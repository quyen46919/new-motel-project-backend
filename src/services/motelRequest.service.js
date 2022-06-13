const httpStatus = require('http-status');
const { MotelRequest } = require('../models');
const ApiError = require('../utils/ApiError');
const Features = require('./lib/featuresClass');

/**
 * Get all motel request
 * @param {Object} requestBody
 * @returns {Promise<MotelRequest>}
 */
const getAllMotelRequest = async (query) => {
  const features = new Features(MotelRequest.find(), query).paginating().sorting().searching().filtering();
  const motelQuery = await features.query;
  const results = await Promise.allSettled([motelQuery, MotelRequest.countDocuments()]);

  const motelRequests = results[0].status === 'fulfilled' ? results[0].value : [];
  const countMotel = results[1].status === 'fulfilled' ? results[1].value : 0;

  return { countMotel, motelRequests };
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
 * Update a motel request
 * @param {Object} requestBody
 * @returns {Promise<MotelRequest>}
 */
const updateMotelRequest = async (requestId, requestBody) => {
  const motelRequest = await MotelRequest.findById(requestId);
  if (!motelRequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Yêu cầu không tồn tại');
  }
  Object.assign(motelRequest, requestBody);
  await motelRequest.save();
  return motelRequest;
};

module.exports = {
  getAllMotelRequest,
  postNewRequest,
  updateMotelRequest,
};
