const httpStatus = require('http-status');
const { MotelRequest } = require('../models');
const { Motel } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get all motel request
 * @param {Object} requestBody
 * @returns {Promise<MotelRequest>}
 */
const getAllMotelRequest = async (params) => {
  const page = params.page * 1 || 1;
  const limit = params.limit * 1 || 10;
  const skip = limit * (page - 1);

  const requestList = await MotelRequest.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'createUserId',
        foreignField: '_id',
        as: 'postRequestUser',
      },
    },
    {
      $unwind: '$postRequestUser',
    },
    {
      $lookup: {
        from: 'users',
        localField: 'adminId',
        foreignField: '_id',
        as: 'acceptAdmin',
      },
    },
    {
      $project: {
        postUserName: '$postRequestUser.name',
        postUserAvatar: '$postRequestUser.avatar',
        postUserId: '$postRequestUser._id',
        adminName: { $arrayElemAt: ['$acceptAdmin.name', 0] },
        adminId: { $arrayElemAt: ['$acceptAdmin._id', 0] },
        id: '$_id',
        _id: 0,
        createAt: 1,
        updateAt: 1,
        messageType: 1,
        message: 1,
        motelId: 1,
        createUserId: 1,
        contactPhone: 1,
        status: 1,
        adminMessage: 1,
      },
    },
    {
      $sort: { createAt: -1 },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ]);
  const totalItems = await MotelRequest.countDocuments();

  const results = await Promise.allSettled([requestList, totalItems]);

  const motelRequests = results[0].status === 'fulfilled' ? results[0].value : [];
  const countMotelRequest = results[1].status === 'fulfilled' ? results[1].value : 0;

  return { countMotelRequest, motelRequests };
};

/**
 * Create a motel request
 * @param {Object} requestBody
 * @returns {Promise<MotelRequest>}
 */
const postNewRequest = async (requestBody) => {
  return MotelRequest.create(requestBody);
};

/**
 * Create a motel request
 * @param {Object} requestBody
 * @returns {Promise<MotelRequest>}
 */
const getPostedMotelRequestByUserId = async (userId) => {
  return MotelRequest.find({ createUserId: userId });
};

/**
 * Update a motel request
 * @param {Object} requestBody
 * @returns {Promise<MotelRequest>}
 */
const updateMotelRequest = async (requestId, requestBody) => {
  const motelRequest = await MotelRequest.findById(requestId);
  if (!motelRequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Yêu cầu này không tồn tại');
  }

  if (motelRequest.status !== 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Đã có người xử lí yêu cầu này rồi, làm mới trình duyệt để cập nhật dữ liệu mới nhất'
    );
  }

  const updateMotelRequestValues = {
    adminId: requestBody.adminId,
    adminMessage: requestBody.adminMessage,
    status: requestBody.status,
  };

  if (Number.parseInt(requestBody.status, 10) === 1) {
    switch (requestBody.requestType) {
      case 'Đăng ký đặt phòng':
      case 'Báo trọ đã có người thuê':
        await Motel.findByIdAndUpdate(requestBody.motelId, {
          visibility: requestBody.visibility,
          visibilityMessage: requestBody.visibilityMessage,
        });
        break;
      case 'Báo thông tin sai':
        await Motel.findByIdAndUpdate(requestBody.motelId, {
          status: 'Đã từ chối phê duyệt',
          statusMessage: requestBody.visibilityMessage,
          visibility: requestBody.visibility,
          visibilityMessage: requestBody.visibilityMessage,
        });
        break;
      default:
        throw new ApiError(httpStatus.BAD_REQUEST, 'Yêu cầu không hợp lệ');
    }
  }

  const today = new Date();
  today.setHours(today.getHours());
  updateMotelRequestValues.updateAt = today;
  Object.assign(motelRequest, updateMotelRequestValues);
  await motelRequest.save();
  return motelRequest;
};

const deleteMotelRequest = async (requestId) => {
  // do chưa xử lí được khúc aggregate biến đổi từ _id sang hẳn _id
  const motelRequest = await MotelRequest.findById(requestId);
  if (!motelRequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Yêu cầu này không tồn tại');
  }
  await motelRequest.remove();
  const response = {
    message: 'Xóa dữ liệu thành công!',
  };
  return response;
};

module.exports = {
  getAllMotelRequest,
  postNewRequest,
  updateMotelRequest,
  getPostedMotelRequestByUserId,
  deleteMotelRequest,
};
