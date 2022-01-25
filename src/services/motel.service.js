/* eslint-disable no-param-reassign */
const httpStatus = require('http-status');
const mongoose = require('mongoose');
const tf = require('@tensorflow/tfjs-node');
const { Motel } = require('../models');
const ApiError = require('../utils/ApiError');
const { distanceSampleData } = require('../utils/predictDistance');

const handler = tf.io.fileSystem('./predict-distance-model/model.json');

/**
 * Create a motel
 * @param {Object} motelBody
 * @returns {Promise<Motel>}
 */
const postMotel = async (motelBody) => {
  if (
    await Motel.isMotelTaken(
      motelBody.category,
      motelBody.bossName,
      motelBody.bossPhone,
      motelBody.address,
      motelBody.prices
    )
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Trọ này đã tồn tại!');
  }

  const motel = {
    createUserId: motelBody.createUserId,
    category: motelBody.category,
    homeDetails: {
      bossName: motelBody.bossName,
      bossPhone: motelBody.bossPhone,
      address: motelBody.address,
      prices: motelBody.prices,
      acreage: motelBody.acreage,
      mezzanine: motelBody.mezzanine,
      deposit: motelBody.deposit,
      formality: motelBody.formality,
      elecPrices: motelBody.elecPrices,
      waterPrices: motelBody.waterPrices,
      maxPeople: motelBody.maxPeople,
      description: motelBody.description,
    },
    homeUtilities: {
      checkedCarPark: motelBody.checkedCarPark,
      checkedFan: motelBody.checkedFan,
      checkedConditioner: motelBody.checkedConditioner,
      checkedCamera: motelBody.checkedCamera,
      checkedGarbageBin: motelBody.checkedGarbageBin,
      checkedKitchen: motelBody.checkedKitchen,
      checkedToilet: motelBody.checkedToilet,
      checkedWifi: motelBody.checkedWifi,
      checkedCupboard: motelBody.checkedCupboard,
      checkedDryingGround: motelBody.checkedDryingGround,
      checkedWaterHeater: motelBody.checkedWaterHeater,
      checkedAlarm: motelBody.checkedAlarm,
      checkedBed: motelBody.checkedBed,
      checkedFridge: motelBody.checkedFridge,
      checkedTienSon: motelBody.checkedTienSon,
      checkedMarket: motelBody.checkedMarket,
      checkedSupermarket: motelBody.checkedSupermarket,
      checkedWashingMachine: motelBody.checkedWashingMachine,
      checkedPet: motelBody.checkedPet,
      nearSchool: motelBody.nearSchool,
      checkedHospital: motelBody.checkedHospital,
    },
    motelImages: motelBody.motelImages,
    location: motelBody.location,
  };

  switch (String(motelBody.category)) {
    case 'Ghép trọ':
      if (!motelBody.pricePerPerson || !motelBody.numberPeopleAreNeeded || !motelBody.mergeDescription) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Thiếu thông tin cần thiết để đăng tin ghép trọ');
      }

      motel.homeDetails = {
        ...motel.homeDetails,
        pricePerPerson: motelBody.pricePerPerson,
        numberPeopleAreNeeded: motelBody.numberPeopleAreNeeded,
        mergeDescription: motelBody.mergeDescription,
      };
      break;

    case 'Phòng trọ':
      motelBody.homeDetails = {
        ...motel.homeDetails,
      };
      break;

    default:
      throw new ApiError(httpStatus.BAD_REQUEST, 'Thông tin sai!');
  }

  return Motel.create(motel);
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
  const filteredMotel = motels.results.filter((item) => item._destroy === false && item.status === 'Đang xử lí');
  const verifyMotels = {
    ...motels,
    results: filteredMotel,
    totalResults: filteredMotel.length,
  };

  return verifyMotels;
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
    'homeDetails.address': 1,
    'homeDetails.prices': 1,
    dateCreate: 1,
    status: 1,
    statusMessage: 1,
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
    throw new ApiError(httpStatus.NOT_FOUND, 'Motel not found');
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

const predictDistance = async (inputlocation) => {
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
    locations.push((location.location.latitude + 90) * 180 + location.location.longitude);
    // console.log(location.location.latitude);
    // console.log(location.location.latitude + 90);
    // console.log((location.location.latitude + 90) * 180);
    // console.log(location.location.longitude);
    // console.log((location.location.latitude + 90) * 180 + location.location.longitude);
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

  model.save('file://./predict-distance-model');

  model.compile({
    optimizer: tf.train.sgd(0.1),
    loss: 'categoricalCrossentropy',
    // loss: 'categoricalCrossentropy'
  });

  // train model
  async function train() {
    const options = {
      epochs: 9999,
      validationSplit: 0.3,
      shuffle: true,
    };
    const res = await model.fit(xs, ys, options);
    return res;
  }

  train()
    .then(() => {
      // console.log(result.history.loss);

      const location = {
        latitude: 16.0356,
        longitude: 108.2407,
      };
      // let location = {
      //   latitude: (16.0238 - 15) / 2,
      //   longitude: (16.0238 - 100) / 10,
      // };

      const inputTensor = tf.tensor1d([(location.latitude + 90) * 180 + location.longitude]);
      const predictRes = model.predict(inputTensor).dataSync();
      console.log('predictRes', predictRes);

      // let max = predictRes.argMax().dataSync()[0];
      // console.log('max', max);

      // console.log('vị trí này gần khu vực', universityNames[max]);
      return predictRes;
    })
    .catch((err) => console.log(err));

  // try {
  //   const trainedModel = await tf.loadLayersModel(handler);
  //   // const x = JSON.parse(trainedModel);

  //   const location = {
  //     latitude: 16.0612,
  //     longitude: 108.2087,
  //   };

  //   const inputTensor = tf.tensor1d([(location.latitude + 90) * 180 + location.longitude]);
  //   const predictRes = trainedModel.predict(inputTensor).dataSync();
  //   console.log('predictRes', predictRes);
  // } catch (err) {
  //   console.log(err);
  // }
};

predictDistance();

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
};
