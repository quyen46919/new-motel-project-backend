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
  console.log(params);
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
    throw new ApiError(httpStatus.NOT_FOUND, 'Y??u c???u n??y kh??ng t???n t???i');
  }

  if (motelRequest.status !== 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      '???? c?? ng?????i x??? l?? y??u c???u n??y r???i, l??m m???i tr??nh duy???t ????? c???p nh???t d??? li???u m???i nh???t'
    );
  }

  const updateMotelRequestValues = {
    adminId: requestBody.adminId,
    adminMessage: requestBody.adminMessage,
    status: requestBody.status,
  };

  if (Number.parseInt(requestBody.status, 10) === 1) {
    switch (requestBody.requestType) {
      case '????ng k?? ?????t ph??ng':
      case 'B??o tr??? ???? c?? ng?????i thu??':
        await Motel.findByIdAndUpdate(requestBody.motelId, {
          visibility: requestBody.visibility,
          visibilityMessage: requestBody.visibilityMessage,
        });
        break;
      case 'B??o th??ng tin sai':
        await Motel.findByIdAndUpdate(requestBody.motelId, {
          status: '???? t??? ch???i ph?? duy???t',
          statusMessage: requestBody.visibilityMessage,
          visibility: requestBody.visibility,
          visibilityMessage: requestBody.visibilityMessage,
        });
        break;
      default:
        throw new ApiError(httpStatus.BAD_REQUEST, 'Y??u c???u kh??ng h???p l???');
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
  // do ch??a x??? l?? ???????c kh??c aggregate bi???n ?????i t??? _id sang h???n _id
  const motelRequest = await MotelRequest.findById(requestId);
  if (!motelRequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Y??u c???u n??y kh??ng t???n t???i');
  }
  await motelRequest.remove();
  const response = {
    message: 'X??a d??? li???u th??nh c??ng!',
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
