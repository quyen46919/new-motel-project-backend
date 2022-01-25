const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const postMotel = {
  body: Joi.object().keys({
    createUserId: Joi.string().required().custom(objectId),
    bossName: Joi.string().min(6).max(255).required(),
    bossPhone: Joi.string().min(9).max(10).required(),
    address: Joi.string().min(6).max(255).required(),
    prices: Joi.number().min(0).max(20000000).required(),
    pricePerPerson: Joi.number().min(0).max(20000000),
    acreage: Joi.number().min(1).max(255).required(),
    mezzanine: Joi.number().min(0).max(255).required(),
    maxPeople: Joi.number().min(1).max(20).required(),
    numberPeopleAreNeeded:  Joi.number().min(1).max(20),
    elecPrices:  Joi.number().min(0).max(100000).required(),
    waterPrices:  Joi.number().min(0).max(1000000).required(),
    // sameRoom: Joi.number().min(0).max(200),
    description: Joi.string().max(1024).allow(null, ''),
    mergeDescription: Joi.string().max(1024).allow(null, ''),
    deposit: Joi.string().max(255),
    formality: Joi.string().required(),
    category: Joi.string().required(),

    checkedCarPark: Joi.boolean(),
    checkedFan: Joi.boolean(),
    checkedConditioner: Joi.boolean(),
    checkedCamera: Joi.boolean(),
    checkedGarbageBin: Joi.boolean(),
    checkedKitchen: Joi.boolean(),
    checkedToilet: Joi.boolean(),
    checkedWifi: Joi.boolean(),
    checkedCupboard: Joi.boolean(),
    checkedDryingGround: Joi.boolean(),
    checkedWaterHeater: Joi.boolean(),
    checkedAlarm: Joi.boolean(),
    checkedBed: Joi.boolean(),
    checkedFridge: Joi.boolean(),
    checkedHospital: Joi.boolean(),
    checkedTienSon: Joi.boolean(),
    checkedMarket: Joi.boolean(),
    checkedSupermarket: Joi.boolean(),
    checkedWashingMachine: Joi.boolean(),
    checkedPet: Joi.boolean(),
    
    nearSchool: Joi.string().required(),
    motelImages: Joi.array().required(),
    location: Joi.object({
      latitude: Joi.string().required(),
      longitude: Joi.string().required(),
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
      status: Joi.string().required(),
      statusMessage: Joi.string().required(),
      _destroy: Joi.boolean().required(),
    })
    .min(3),
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
  body: Joi.object()
    .keys({
      location: Joi.object().keys({
        longitude: Joi.number().required(),
        latitude: Joi.number().required()
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
  predictDistance
};