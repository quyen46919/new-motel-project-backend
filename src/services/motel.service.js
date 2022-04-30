/* eslint-disable no-param-reassign */
const httpStatus = require('http-status');
const mongoose = require('mongoose');
const tf = require('@tensorflow/tfjs-node');
const { Motel } = require('../models');
const ApiError = require('../utils/ApiError');
const { distanceSampleData } = require('../utils/predictDistance');

const handler = tf.io.fileSystem('./predict-distance-model2/model.json');

/**
 * Create a motel
 * @param {Object} motelBody
 * @returns {Promise<Motel>}
 */
const postMotel = async (motelBody) => {
  return Motel.create(motelBody);
  // if (
  //   await Motel.isMotelTaken(
  //     motelBody.category,
  //     motelBody.bossName,
  //     motelBody.bossPhone,
  //     motelBody.address,
  //     motelBody.prices
  //   )
  // ) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Trọ này đã tồn tại!');
  // }

  // const motel = {
  //   createUserId: motelBody.createUserId,
  //   category: motelBody.category,
  //   homeDetails: {
  //     bossName: motelBody.bossName,
  //     bossPhone: motelBody.bossPhone,
  //     address: motelBody.address,
  //     prices: motelBody.prices,
  //     acreage: motelBody.acreage,
  //     mezzanine: motelBody.mezzanine,
  //     deposit: motelBody.deposit,
  //     formality: motelBody.formality,
  //     elecPrices: motelBody.elecPrices,
  //     waterPrices: motelBody.waterPrices,
  //     maxPeople: motelBody.maxPeople,
  //     description: motelBody.description,
  //   },
  //   homeUtilities: {
  //     checkedCarPark: motelBody.checkedCarPark,
  //     checkedFan: motelBody.checkedFan,
  //     checkedConditioner: motelBody.checkedConditioner,
  //     checkedCamera: motelBody.checkedCamera,
  //     checkedGarbageBin: motelBody.checkedGarbageBin,
  //     checkedKitchen: motelBody.checkedKitchen,
  //     checkedToilet: motelBody.checkedToilet,
  //     checkedWifi: motelBody.checkedWifi,
  //     checkedCupboard: motelBody.checkedCupboard,
  //     checkedDryingGround: motelBody.checkedDryingGround,
  //     checkedWaterHeater: motelBody.checkedWaterHeater,
  //     checkedAlarm: motelBody.checkedAlarm,
  //     checkedBed: motelBody.checkedBed,
  //     checkedFridge: motelBody.checkedFridge,
  //     checkedTienSon: motelBody.checkedTienSon,
  //     checkedMarket: motelBody.checkedMarket,
  //     checkedSupermarket: motelBody.checkedSupermarket,
  //     checkedWashingMachine: motelBody.checkedWashingMachine,
  //     checkedPet: motelBody.checkedPet,
  //     nearSchool: motelBody.nearSchool,
  //     checkedHospital: motelBody.checkedHospital,
  //   },
  //   motelImages: motelBody.motelImages,
  //   location: motelBody.location,
  // };

  // switch (String(motelBody.category)) {
  //   case 'Ghép trọ':
  //     if (!motelBody.pricePerPerson || !motelBody.numberPeopleAreNeeded || !motelBody.mergeDescription) {
  //       throw new ApiError(httpStatus.BAD_REQUEST, 'Thiếu thông tin cần thiết để đăng tin ghép trọ');
  //     }

  //     motel.homeDetails = {
  //       ...motel.homeDetails,
  //       pricePerPerson: motelBody.pricePerPerson,
  //       numberPeopleAreNeeded: motelBody.numberPeopleAreNeeded,
  //       mergeDescription: motelBody.mergeDescription,
  //     };
  //     break;

  //   case 'Phòng trọ':
  //     motelBody.homeDetails = {
  //       ...motel.homeDetails,
  //     };
  //     break;

  //   default:
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'Thông tin sai!');
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
const queryMotels = async (filter, options) => {
  const motels = await Motel.paginate(filter, options);

  // fix this line in future
  const filteredMotel = motels.results.filter((item) => item._destroy === false && item.status === 'Đã duyệt');
  const verifyMotels = {
    ...motels,
    results: filteredMotel,
    totalResults: filteredMotel.length,
  };

  return verifyMotels;
};

const adminQueryMotels = async (filter, options) => {
  const motels = await Motel.paginate(filter, options);

  return motels;
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

const updateMotelInfo = async (motelId, body) => {
  const motel = await getMotelById(motelId);
  if (!motel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Không tìm thấy trọ này');
  }

  switch (String(motel.category)) {
    case 'Ghép trọ':
      if (
        !body.pricePerPerson ||
        !body.numberPeopleAreNeeded ||
        !body.mergeDescription ||
        !body.mergeDescription ||
        !body.description
      ) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Thiếu thông tin cần thiết để cập nhật!');
      }
      break;

    case 'Phòng trọ':
      if (!body.sameRoom || !body.description)
        throw new ApiError(httpStatus.BAD_REQUEST, 'Thiếu thông tin cần thiết để cập nhật!');
      break;

    default:
      throw new ApiError(httpStatus.BAD_REQUEST, 'Thông tin sai!');
  }

  Object.assign(motel.homeDetails, body);
  await motel.save();
  return motel;
};

const trainDistanceModel = () => {
  const universityNames = [
    'Đại học Đông Á - Kiến trúc Đà Nẵng',
    'Đại học Ngoại ngữ Đà Nẵng',
    'Đại học Sư phạm Đà Nẵng',
    'Đại học Kinh tế Đà Nẵng',
    'Đại học GreenWich Đà Nẵng',
    'Đại học FPT',
    'Đại học Bách khoa Đà Nẵng',
    'Đại học Duy Tân',
    'Đại học Kỹ thuật Y dược Đà Nẵng',
    'Đại học Sư phạm Kỹ thuật Đà Nẵng',
    '',
  ];

  const universities = [];
  const locations = [];

  // eslint-disable-next-line array-callback-return
  distanceSampleData.map((location) => {
    locations.push((location.location.latitude + 9000) * 18000 + location.location.longitude);
    // locations.push(location.location.latitude + location.location.longitude);
    universities.push(universityNames.indexOf(location.area));
  });

  const xs = tf.tensor1d(locations);
  // xs.print();
  const univeristyTensor = tf.tensor1d(universities, 'int32');

  // oneHot
  const ys = tf.oneHot(univeristyTensor, 11);
  // ys.print();

  // create model
  const model = tf.sequential();
  const hiddenLayer = tf.layers.dense({
    units: 16,
    activation: 'sigmoid',
    inputDim: 1,
  });

  const ouputLayer = tf.layers.dense({
    units: 11,
    activation: 'softmax',
  });

  model.add(hiddenLayer);
  model.add(ouputLayer);

  // model.save('file://./predict-distance-model');

  model.compile({
    optimizer: tf.train.sgd(0.1),
    loss: 'categoricalCrossentropy',
    // loss: 'categoricalCrossentropy'
  });

  // train model
  async function train() {
    const options = {
      epochs: 5000,
      validationSplit: 0.1,
      shuffle: true,
    };
    const res = await model.fit(xs, ys, options);
    model.save('file://./predict-distance-model2');
    return res;
  }

  train()
    .then(() => {
      const location = {
        latitude: 16.0344,
        longitude: 108.2113,
      };

      const inputTensor = tf.tensor1d([(location.latitude + 9000) * 18000 + location.longitude]);
      // const inputTensor = tf.tensor1d([location.latitude + location.longitude]);
      const predictRes = model.predict(inputTensor).dataSync();
      // eslint-disable-next-line no-console
      console.log('predictRes', predictRes);

      // let max = predictRes.argMax().dataSync()[0];
      // console.log('max', max);

      // console.log('vị trí này gần khu vực', universityNames[max]);
      return predictRes;
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
};

// trainDistanceModel();

const predictDistance = async () => {
  try {
    const trainedModel = await tf.loadLayersModel(handler);
    // const x = JSON.parse(trainedModel);

    const UDAlocation = {
      latitude: 16.0344,
      longitude: 108.2114,
    };

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
  queryMotels,
  getMotelById,
  getMotelByEmail,
  updateMotelById,
  deleteMotelById,
  updateMotelStatus,
  updateMotelInfo,
  getMotelByPostedUserId,
  predictDistance,
  adminQueryMotels,
};
