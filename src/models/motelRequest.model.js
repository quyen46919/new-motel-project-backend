const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const today = new Date();
today.setHours(today.getHours() + 7);

const motelRequired = mongoose.Schema(
  {
    messageType: {
      type: String,
      enum: ['Đăng ký đặt phòng', 'Báo thông tin sai', 'Báo trọ đã có người thuê'],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    adminId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      default: null,
    },
    adminMessage: {
      type: String,
      default: '',
    },
    createUserId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    motelId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Motel',
      required: true,
      index: true,
    },
    contactPhone: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      enum: [0, 1, 2],
      default: 0,
    },
    createAt: {
      type: Date,
      default: today,
    },
    updateAt: {
      type: Date,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
motelRequired.plugin(toJSON);

/**
 * @typedef MotelRequire
 */
const MotelRequire = mongoose.model('MotelRequire', motelRequired);

module.exports = MotelRequire;
