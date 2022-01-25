const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const locationSchema = new mongoose.Schema({
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

const motelSchema = new mongoose.Schema({
  createUserId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  homeDetails: {
    bossName: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    bossPhone: {
      type: String,
      required: true,
      max: 10,
      min: 9,
    },
    address: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    prices: {
      type: Number,
      required: true,
      min: 0,
    },
    pricePerPerson: {
      type: Number,
      min: 0,
    },
    acreage: {
      type: Number,
      required: true,
      min: 0,
    },
    mezzanine: {
      type: Number,
      required: true,
      min: 0,
    },
    maxPeople: {
      type: Number,
      required: true,
      min: 1,
      max: 15,
    },
    numberPeopleAreNeeded: {
      type: Number,
      min: 1,
      default: 1,
    },
    elecPrices: {
      type: Number,
      required: true,
      min: 0,
    },
    waterPrices: {
      type: Number,
      required: true,
      min: 0,
    },
    // sameRoom: {
    //   type: Number,
    //   min: 0,
    // },
    deposit: {
      type: String,
      min: 0,
      max: 255,
      default: 'Không có yêu cầu đặt cọc',
    },
    description: {
      type: String,
      min: 6,
      max: 1024,
      required: true,
    },
    mergeDescription: {
      type: String,
      max: 1024,
    },
    formality: {
      type: String,
      required: true,
    },
  },
  homeUtilities: {
    nearSchool: {
      type: String,
      min: 0,
      max: 255,
    },
    checkedCarPark: Boolean,
    checkedFan: Boolean,
    checkedConditioner: Boolean,
    checkedCamera: Boolean,
    checkedGarbageBin: Boolean,
    checkedKitchen: Boolean,
    checkedToilet: Boolean,
    checkedWifi: Boolean,
    checkedCupboard: Boolean,
    checkedDryingGround: Boolean,
    checkedWaterHeater: Boolean,
    checkedMore: Boolean,
    checkedAlarm: Boolean,
    checkedBathub: Boolean,
    checkedBed: Boolean,
    checkedCool: Boolean,
    checkedFridge: Boolean,
    checkedHospital: Boolean,
    checkedTienSon: Boolean,
    checkedMarket: Boolean,
    checkedSupermarket: Boolean,
    checkedWashingMachine: Boolean,
    checkedPet: Boolean,
  },
  motelImages: [],
  location: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  dateCreate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: 'Đang xử lí',
  },
  statusMessage: {
    type: String,
    default: 'Yêu cầu của bạn đang chờ xác thực',
    min: 0,
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
});

motelSchema.plugin(toJSON);
motelSchema.plugin(paginate);

motelSchema.statics.isMotelTaken = async function (category, bossName, bossPhone, address, price) {
  const motel = await this.findOne({
    "category": category,
    "homeDetails.bossName": bossName,
    "homeDetails.bossPhone": bossPhone,
    "homeDetails.address": address,
    "homeDetails.prices": price,
  });
  return !!motel;
};

motelSchema.statics.isValidLocation = async function (latitude, longitude) {
  const motel = await this.findOne({
    $and: [
      {
        "location.latitude": latitude,
      },
      {
        "location.longitude": longitude,
      },
    ]
  });
  return !!motel;
};

motelSchema.statics.isValidMotel = async function (ownerId, motelId) {
  const motel = await this.findOne({
    "_id": motelId,
    "createUserId": ownerId
  });
  return motel;
};


module.exports = mongoose.model('Motel', motelSchema);
