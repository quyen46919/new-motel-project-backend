const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { motelService } = require('../services');

const postMotel = catchAsync(async (req, res) => {
  const motel = await motelService.postMotel(req.body);
  res.status(httpStatus.CREATED).send(motel);
});

const queryMotels = catchAsync(async (req, res) => {
  const result = await motelService.queryAndPagination(req.query);
  res.status(httpStatus.OK).send(result);
});

const adminQueryMotels = catchAsync(async (req, res) => {
  const result = await motelService.adminQueryMotels(req.query);
  res.status(httpStatus.OK).send(result);
});

const getMotel = catchAsync(async (req, res) => {
  const motel = await motelService.getMotelById(req.params.motelId);
  if (!motel) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Không tìm thấy trọ này');
  }
  res.send(motel);
});

const getMotelsByUserId = catchAsync(async (req, res) => {
  const motels = await motelService.getMotelByPostedUserId(req.params.userId);
  if (!motels) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Không tìm thấy trọ mà bạn đã đăng');
  }
  res.send(motels);
});

const deleteMotel = catchAsync(async (req, res) => {
  await motelService.deleteMotelById(req.query.createUserId, req.query.motelId);
  res.status(httpStatus.NO_CONTENT).send();
});

const adminUpdateMotelStatus = catchAsync(async (req, res) => {
  const motel = await motelService.updateMotelById(req.params.motelId, req.body);
  res.send(motel);
});

const updateMotelInfo = catchAsync(async (req, res) => {
  const motel = await motelService.updateMotelInfo(req.params.motelId, req.body);
  res.send(motel);
});

const predictDistance = catchAsync(async (req, res) => {
  const predictResult = await motelService.predictDistance(req.body.location);
  res.send(predictResult);
});

const recommendMotel = catchAsync(async (req, res) => {
  const { ratings } = req.body;
  const recommendRes = await motelService.recommendMotel(ratings);
  res.send(recommendRes);
});

module.exports = {
  postMotel,
  queryMotels,
  getMotel,
  getMotelsByUserId,
  deleteMotel,
  adminUpdateMotelStatus,
  updateMotelInfo,
  predictDistance,
  adminQueryMotels,
  recommendMotel,
};
