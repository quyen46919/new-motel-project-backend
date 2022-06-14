/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-param-reassign */
const httpStatus = require('http-status');
const mongoose = require('mongoose');
const tf = require('@tensorflow/tfjs-node');
const TeachableMachine = require('@sashido/teachablemachine-node');
const { Motel } = require('../models');
const ApiError = require('../utils/ApiError');
const { distanceSampleData } = require('../utils/predictDistance');
// const features = require('./lib/features');
const Features = require('./lib/featuresClass');
const linearRegression = require('./lib/linear-regression');
// const checkValidImages = require('./lib/checkValidImage');

const handler = tf.io.fileSystem('./predict-distance-model2/model.json');

/**
 * Create a motel
 * @param {Object} motelBody
 * @returns {Promise<Motel>}
 */
const postMotel = async (motelBody) => {
  const model = new TeachableMachine({
    modelUrl: 'https://teachablemachine.withgoogle.com/models/MsdmCLpKI/',
  });

  const setCriteria = new Set();
  const x = motelBody.imageList.map(async (image) => {
    await model
      .classify({
        imageUrl: image,
      })
      .then((predictions) => {
        const returnValue = predictions.filter((criteria) => criteria.score > 0.8);
        // console.log('returnValue =', returnValue);
        returnValue.map((criteria) => setCriteria.add(criteria.class));
      })
      .catch(() => {
        throw new Error('Somethings wrong!');
      });
  });
  await Promise.allSettled(x)
    .then(() => {
      const array = Array.from(setCriteria);
      // console.log('array =', array);
      const filteredArray = array.filter((criteria) => criteria === 'banList');
      if (filteredArray.length > 0) {
        motelBody.status = 'Đã từ chối phê duyệt';
        motelBody.statusMessage = 'Thông tin trọ có chứa hình ảnh không phù hợp';
      }
    })
    .catch(() => {
      throw new Error('Somethings wrong!');
    });
  return Motel.create(motelBody);

  // if (check) {
  //   motelBody.status = 'Đã từ chối phê duyệt';
  //   motelBody.statusMessage = 'Thông tin trọ có chứa hình ảnh không phù hợp';
  // }
};

/**
 * Query for motels
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
// const queryMotels = async (filter, options) => {
//   const motels = await Motel.paginate(filter, options);

//   // fix this line in future
//   const filteredMotel = motels.results.filter((item) => item._destroy === false && item.status === 'Đã duyệt');
//   const verifyMotels = {
//     ...motels,
//     results: filteredMotel,
//     totalResults: filteredMotel.length,
//   };

//   return verifyMotels;
// };

const queryAndPagination = async (query) => {
  const features = new Features(Motel.find(), query).paginating().sorting().searching().filtering();
  const motelQuery = await features.query;
  const results = await Promise.allSettled([
    motelQuery,
    Motel.countDocuments({ status: 'Đã duyệt', visibility: 'Đang hiển thị' }),
  ]);

  const motels = results[0].status === 'fulfilled' ? results[0].value : [];
  const countMotel = results[1].status === 'fulfilled' ? results[1].value : 0;

  return { countMotel, motels };
};

const adminQueryMotels = async (query) => {
  console.log(query);
  const features = new Features(Motel.find(), query).paginating().sorting().searching().filtering();
  const motelQuery = await features.query;
  const count = new Features(Motel.countDocuments(), query).countingByStatus();
  const motelCountTest = await count.query;
  const results = await Promise.allSettled([motelQuery, motelCountTest]);

  const motels = results[0].status === 'fulfilled' ? results[0].value : [];
  const countMotel = results[1].status === 'fulfilled' ? results[1].value : 0;

  return { countMotel, motels };
};

/**
 * Get motel by id
 * @param {ObjectId} id
 * @returns {Promise<Motel>}
 */
const getMotelById = async (id) => {
  return Motel.findById(id);
};

const getMotelByPostedUserId = async (userId) => {
  const motels = Motel.find({ createUserId: mongoose.Types.ObjectId(userId) }).select({
    id: 1,
    address: 1,
    price: 1,
    createAt: 1,
    updateAt: 1,
    expireAt: 1,
    mezzanine: 1,
    acreage: 1,
    formality: 1,
    tags: 1,
    imageList: 1,
    status: 1,
    statusMessage: 1,
    visibility: 1,
    visibilityMessage: 1,
    maxPeople: 1,
    _destroy: 1,
  });

  return motels;
};

/**
 * Get motel by email
 * @param {string} email
 * @returns {Promise<Motel>}
 */
const getMotelByEmail = async (email) => {
  return Motel.findOne({ email });
};

/**
 * Update motel by id
 * @param {ObjectId} motelId
 * @param {Object} updateBody
 * @returns {Promise<Motel>}
 */
const updateMotelById = async (motelId, updateBody) => {
  const motel = await getMotelById(motelId);
  if (!motel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Trọ không hợp lệ!');
  }
  // if (updateBody.email && (await Motel.isEmailTaken(updateBody.email, motelId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  Object.assign(motel, updateBody);
  await motel.save();
  return motel;
};

/**
 * Delete motel by id
 * @param {ObjectId} motelId
 * @returns {Promise<Motel>}
 */
const deleteMotelById = async (createUserId, motelId) => {
  const foundMotel = await Motel.isValidMotel(createUserId, motelId);
  if (!(await Motel.isValidMotel(createUserId, motelId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Bạn không phải là người đăng trọ này!');
  }
  await foundMotel.remove();
  return foundMotel;
};

const updateMotelStatus = async (motelId, body) => {
  const motel = await getMotelById(motelId);
  if (!motel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Không tìm thấy trọ này');
  }
  Object.assign(motel, body);
  await motel.save();
  return motel;
};

const recommendMotel = async (ratings) => {
  let predictions = [];
  const motelList = await Motel.find({ status: { $eq: 'Đã duyệt' } });
  // console.log('motels =', motelList);
  let motels;
  const classes = {};
  let xs;

  motels = Object.entries(motelList);

  motels.forEach((motel) => {
    motel[1].evaluates.forEach((criteria) => (classes[criteria] = 0));
  });
  // console.log('classes =', classes);

  xs = motels.map((motel) => {
    // Ghi các key của classes vào Object nếu nó không bị trùng key
    const evaluateList = { ...classes };
    // Tính tỷ lệ của mỗi evaluate / tổng các evaluates
    motel[1].evaluates.forEach((ev) => (evaluateList[ev] = 1 / motel[1].evaluates.length));
    // trả về một mảng chỉ bao gồm giá trị tỷ lệ evaluate
    return Object.values(evaluateList);
  });

  const xTrain = xs.filter((array, i) => {
    return ratings[i];
  });
  const yTrain = ratings.filter((array, i) => {
    return ratings[i];
  });

  const F = (thetas, xs) => {
    return thetas.reduce((accum, theta, i) => {
      return accum + theta * xs[i];
    }, 0);
  };

  const J = (thetas) => {
    return xTrain.reduce((acum, xs, i) => {
      return acum + Math.pow(F(thetas, xs) - yTrain[i], 4);
    }, 0);
  };

  const n = Object.keys(classes).length;
  const thetas = linearRegression(J, n);
  // const error = Math.sqrt(Math.sqrt(J(thetas)));

  predictions = motels
    .map((motel, i) => ({
      prediction: F(thetas, xs[i]),
      motel: motel[1],
    }))
    .filter((obj) => obj.prediction > 8)
    .sort((a, b) => b.prediction > a.prediction);
  // console.log(predictions);

  return predictions;
};

// const updateMotelInfo = async (motelId, body) => {
//   const motel = await getMotelById(motelId);
//   if (!motel) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Không tìm thấy trọ này');
//   }

//   switch (String(motel.category)) {
//     case 'Ghép trọ':
//       if (
//         !body.pricePerPerson ||
//         !body.numberPeopleAreNeeded ||
//         !body.mergeDescription ||
//         !body.mergeDescription ||
//         !body.description
//       ) {
//         throw new ApiError(httpStatus.BAD_REQUEST, 'Thiếu thông tin cần thiết để cập nhật!');
//       }
//       break;

//     case 'Phòng trọ':
//       if (!body.sameRoom || !body.description)
//         throw new ApiError(httpStatus.BAD_REQUEST, 'Thiếu thông tin cần thiết để cập nhật!');
//       break;

//     default:
//       throw new ApiError(httpStatus.BAD_REQUEST, 'Thông tin sai!');
//   }

//   Object.assign(motel.homeDetails, body);
//   await motel.save();
//   return motel;
// };

// const predictNearSchool = (lat, lng) => {
//   const universities = [
//     {
//       name: 'Đại học Đông Á - Đại học kiến trúc',
//       location: [16.032230909876986, 108.22129225859831],
//     },
//     {
//       name: 'Đại học ngoại ngữ - Đại học Đà Nẵng',
//       location: [16.034416621022668, 108.21162953631281],
//     },
//     {
//       name: 'Đại học Kinh tế - Đại học Đà Nẵng',
//       location: [16.047402676254702, 108.2396314037839],
//     },
//     {
//       name: 'Đại học Sư phạm kỹ thuật - Đại học Đà Nẵng',
//       location: [16.077366908765192, 108.21380488213218],
//     },
//     {
//       name: 'Cao đẳng FPT Politechnic Đà Nẵng',
//       location: [16.075946990335677, 108.16996203058308],
//     },
//     {
//       name: 'Đại học Greenwich Việt Nam',
//       location: [16.08229179507841, 108.2359266302836],
//     },
//   ];

//   // 16.03013471538867, 108.22598213047466

//   let result;
//   // universities.map((item) => {

//   // });
//   // eslint-disable-next-line no-restricted-syntax
//   for (const university of universities) {
//     // lat < Math.abs(university.location[0] + 0.003) || lat < Math.abs(university.location[0] - 0.003)
//     // lat < Math.abs(university.location[1] + 0.0045) || lat < Math.abs(university.location[1] - 0.0045)
//     // if (
//     //   (lat < university.location[0] + 0.003 || lat > university.location[0] - 0.003) &&
//     //   (lat < university.location[1] + 0.0045 || lat > university.location[1] - 0.0045)
//     // ) {
//     //   console.log(university.name);
//     // }
//     if (true) {
//       _.inRange(lat, university.location[0] - 0.003, university.location[0] + 0.003) &&
//         _.inRange(lat, university.location[1] - 0.003, university.location[1] + 0.003);
//       console.log(university.name);
//     }
//   }
// };
// // predictNearSchool(16.047558433936185, 108.24184992344304);

// const trainDistanceModel = () => {
//   const universityNames = [
//     'Đại học Đông Á - Kiến trúc Đà Nẵng',
//     'Đại học Ngoại ngữ Đà Nẵng',
//     'Đại học Sư phạm Đà Nẵng',
//     // 'Đại học Kinh tế Đà Nẵng',
//     // 'Đại học GreenWich Đà Nẵng',
//     // 'Đại học FPT',
//     // 'Đại học Bách khoa Đà Nẵng',
//     // 'Đại học Duy Tân',
//     // 'Đại học Kỹ thuật Y dược Đà Nẵng',
//     // 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
//     // '',
//   ];

//   const universities = [];
//   const locations = [];

//   // eslint-disable-next-line array-callback-return
//   distanceSampleData.map((location) => {
//     locations.push((location.location.latitude + 90) * 180 + location.location.longitude);
//     // locations.push(location.location.latitude + location.location.longitude);
//     universities.push(universityNames.indexOf(location.area));
//   });

//   const xs = tf.tensor1d(locations);
//   // xs.print();
//   const univeristyTensor = tf.tensor1d(universities, 'int32');

//   // oneHot
//   const ys = tf.oneHot(univeristyTensor, 3);
//   // ys.print();

//   // create model
//   const model = tf.sequential();
//   const hiddenLayer = tf.layers.dense({
//     units: 3,
//     activation: 'sigmoid',
//     inputDim: 1,
//   });

//   const ouputLayer = tf.layers.dense({
//     units: 3,
//     activation: 'softmax',
//   });

//   model.add(hiddenLayer);
//   model.add(ouputLayer);

//   // model.save('file://./predict-distance-model');

//   model.compile({
//     optimizer: tf.train.sgd(0.3),
//     loss: 'categoricalCrossentropy',
//     // loss: 'categoricalCrossentropy'
//   });

//   // train model
//   async function train() {
//     const options = {
//       epochs: 10000,
//       validationSplit: 0.3,
//       shuffle: true,
//     };
//     const res = await model.fit(xs, ys, options);
//     model.save('file://./predict-distance-model2');
//     return res;
//   }

//   train()
//     .then(() => {
//       const location = {
//         latitude: 16.047558433936185,
//         longitude: 108.24184992344304,
//       };

//       const inputTensor = tf.tensor1d([(location.latitude + 90) * 180 + location.longitude]);
//       // const inputTensor = tf.tensor1d([location.latitude + location.longitude]);
//       const predictRes = model.predict(inputTensor).dataSync();
//       // eslint-disable-next-line no-console
//       console.log('predictRes', predictRes);

//       // let max = predictRes.argMax().dataSync()[0];
//       // console.log('max', max);

//       // console.log('vị trí này gần khu vực', universityNames[max]);
//       return predictRes;
//     })
//     // eslint-disable-next-line no-console
//     .catch((err) => console.log(err));
// };

// trainDistanceModel();

const predictDistance = async () => {
  try {
    const trainedModel = await tf.loadLayersModel(handler);
    // const x = JSON.parse(trainedModel);

    // const UDAlocation = {
    //   latitude: 16.0344,
    //   longitude: 108.2114,
    // };

    const DuyTanLocation = {
      latitude: 16.0637,
      longitude: 108.2099,
    };

    const inputTensor = tf.tensor1d([(DuyTanLocation.latitude + 90) * 180 + DuyTanLocation.longitude]);
    const predictRes = trainedModel.predict(inputTensor).dataSync();
    // eslint-disable-next-line no-console
    console.log('predictRes', predictRes);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

// predictDistance();

module.exports = {
  postMotel,
  queryAndPagination,
  getMotelById,
  getMotelByEmail,
  updateMotelById,
  deleteMotelById,
  updateMotelStatus,
  getMotelByPostedUserId,
  predictDistance,
  adminQueryMotels,
  recommendMotel,
};
