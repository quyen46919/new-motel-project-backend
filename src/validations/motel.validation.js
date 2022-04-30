const Joi = require('joi');
const { objectId } = require('./custom.validation');

const postMotel = {
  body: Joi.object().keys({
    createUserId: Joi.string().required().custom(objectId),
    bossName: Joi.string().min(6).max(255).required(),
    bossPhone: Joi.string().min(9).max(10).required(),
    address: Joi.string().min(6).max(255).required(),
    price: Joi.number().min(0).max(20000000).required(),
    acreage: Joi.number().min(1).max(255).required(),
    mezzanine: Joi.number().min(0).max(255).required(),
    maxPeople: Joi.number().min(1).max(20).required(),
    elecPrice: Joi.number().min(0).max(100000).required(),
    waterPrice: Joi.string().min(0).max(255).required(),
    renterRequire: Joi.string().min(0).max(255).required(),
    // sameRoom: Joi.number().min(0).max(200),
    description: Joi.string().max(1024).allow(null, ''),
    formality: Joi.string().required(),
    category: Joi.string().required(),

    checkCarPark: Joi.boolean(),
    checkFan: Joi.boolean(),
    checkAirConditioner: Joi.boolean(),
    checkCamera: Joi.boolean(),
    checkFreedom: Joi.boolean(),
    checkPet: Joi.boolean(),
    checkKitchen: Joi.boolean(),
    checkToilet: Joi.boolean(),
    checkFridge: Joi.boolean(),
    checkWashingMachine: Joi.boolean(),
    checkBathroom: Joi.boolean(),
    checkWaterHeater: Joi.boolean(),
    checkWifi: Joi.boolean(),
    checkTerrace: Joi.boolean(),
    checkDryingPlace: Joi.boolean(),
    checkBed: Joi.boolean(),
    checkBoard: Joi.boolean(),

    imageList: Joi.array().required(),
    location: Joi.object({
      lat: Joi.number().required(),
      lng: Joi.number().required(),
    }),
  }),
};

const queryMotels = {
  query: Joi.object().keys({
    address: Joi.string(),
    bossName: Joi.string(),
    acreage: Joi.string(),
    nearSchool: Joi.string(),

    checkedAlarm: Joi.boolean(),
    checkedPet: Joi.boolean(),
    checkedFan: Joi.boolean(),
    checkedCarPark: Joi.boolean(),
    checkedConditioner: Joi.boolean(),
    checkedGarbageBin: Joi.boolean(),
    checkedKitchen: Joi.boolean(),
    checkedToilet: Joi.boolean(),
    checkedWifi: Joi.boolean(),
    checkedDryingGround: Joi.boolean(),
    checkedWaterHeater: Joi.boolean(),
    checkedBed: Joi.boolean(),
    checkedFridge: Joi.boolean(),
    checkedHospital: Joi.boolean(),
    checkedTienSon: Joi.boolean(),
    checkedMarket: Joi.boolean(),
    checkedSupermarket: Joi.boolean(),
    checkedWashingMachine: Joi.boolean(),
    checkBed: Joi.boolean(),
    checkBoard: Joi.boolean(),

    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMotel = {
  params: Joi.object().keys({
    motelId: Joi.string().custom(objectId),
  }),
};

const getMotelsByUserId = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateMotelStatus = {
  params: Joi.object().keys({
    motelId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      status: Joi.string().valid('Đang xử lí', 'Đã duyệt', 'Đã từ chối phê duyệt').required(),
      statusMessage: Joi.when('status', {
        is: Joi.string().valid('Đã từ chối phê duyệt'),
        then: Joi.string().min(5).required(),
        otherwise: Joi.string().allow(''),
      }),
      visibility: Joi.string().valid('Đang hiển thị', 'Đã ẩn đi').required(),
      visibilityMessage: Joi.when('visibility', {
        is: Joi.string().valid('Đã ẩn đi'),
        then: Joi.string().min(5).required(),
        otherwise: Joi.string().allow(''),
      }).allow(null),
      expireAt: Joi.date().allow(''),
      _destroy: Joi.boolean().default(false),
    })
    .min(1),
};

const updateMotelInfo = {
  params: Joi.object().keys({
    motelId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      bossPhone: Joi.string().allow(null).allow(''),
      bossName: Joi.string().allow(null).allow(''),
      address: Joi.string().allow(null).allow(''),
      deposit: Joi.string().allow(null).allow(''),
      description: Joi.string().allow(null).allow(''),
      mergeDescription: Joi.string().allow(null).allow(''),
      formality: Joi.string().allow(null).allow(''),
      prices: Joi.number().allow(null).allow(''),
      pricePerPerson: Joi.number().allow(null).allow(''),
      sameRoom: Joi.number().allow(null).allow(''),
      maxPeople: Joi.number().allow(null).allow(''),
      numberPeopleAreNeeded: Joi.number().allow(null).allow(''),
    })
    .min(1),
};

const deleteMotel = {
  params: Joi.object().keys({
    createUserId: Joi.string().custom(objectId),
    motelId: Joi.string().custom(objectId),
  }),
};

const predictDistance = {
  body: Joi.object().keys({
    location: Joi.object().keys({
      longitude: Joi.number().required(),
      latitude: Joi.number().required(),
    }),
  }),
};

module.exports = {
  postMotel,
  queryMotels,
  getMotel,
  deleteMotel,
  updateMotelStatus,
  updateMotelInfo,
  getMotelsByUserId,
  predictDistance,
};
