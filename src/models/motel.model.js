const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { toJSON } = require('./plugins');

const motelSchema = new mongoose.Schema({
  createUserId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  counter: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  renterRequire: {
    type: String,
    required: true,
  },
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
  price: {
    type: Number,
    required: true,
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
    max: 6,
  },
  elecPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  waterPrice: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    max: 1024,
    default: '',
  },
  formality: {
    type: String,
    required: true,
  },
  nearSchool: {
    type: Array,
    default: [],
  },
  checkCarPark: Boolean,
  checkFan: Boolean,
  checkAirConditioner: Boolean,
  checkCamera: Boolean,
  checkFreedom: Boolean,
  checkPet: Boolean,
  checkKitchen: Boolean,
  checkToilet: Boolean,
  checkFridge: Boolean,
  checkWashingMachine: Boolean,
  checkBathroom: Boolean,
  checkWaterHeater: Boolean,
  checkWifi: Boolean,
  checkTerrace: Boolean,
  checkDryingPlace: Boolean,
  checkBed: Boolean,
  checkBoard: Boolean,
  imageList: [],
  location: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  rating: {
    type: Array,
    required: true,
  },
  evaluates: {
    type: Array,
    required: true,
  },
  expireAt: {
    type: Date,
    default: '',
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: '',
  },
  tags: {
    type: Array,
    default: [],
  },
  status: {
    type: String,
    enum: ['Đang xử lí', 'Đã duyệt', 'Đã từ chối phê duyệt'],
    default: 'Đang xử lí',
  },
  statusMessage: {
    type: String,
    default: 'Yêu cầu của bạn đang chờ xác thực',
  },
  visibility: {
    type: String,
    enum: ['Đang hiển thị', 'Đang có người liên hệ', 'Đã ẩn đi'],
    default: 'Đang hiển thị',
  },
  visibilityMessage: {
    type: String,
    default: '',
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
});

motelSchema.plugin(AutoIncrement, { id: 'order_seq', inc_field: 'counter' });
motelSchema.plugin(toJSON);
motelSchema.index({ address: 'text', bossName: 'text' });

motelSchema.statics.isMotelTaken = async function (category, bossName, bossPhone, address, price) {
  const motel = await this.findOne({
    category,
    bossName,
    bossPhone,
    address,
    price,
  });
  return !!motel;
};

motelSchema.statics.isValidLocation = async function (latitude, longitude) {
  const motel = await this.findOne({
    $and: [
      {
        'location.lat': latitude,
      },
      {
        'location.lng': longitude,
      },
    ],
  });
  return !!motel;
};

motelSchema.statics.isValidMotel = async function (ownerId, motelId) {
  const motel = await this.findOne({
    _id: motelId,
    createUserId: ownerId,
  });
  return motel;
};

const Motel = mongoose.model('Motel', motelSchema);
Motel.createIndexes({ address: 'text', bossName: 'text' });

module.exports = Motel;
