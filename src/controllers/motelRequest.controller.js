const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { motelRequestService } = require('../services');

const getAllMotelRequest = catchAsync(async (req, res) => {
  const queryParams = req.query;
  const response = await motelRequestService.getAllMotelRequest(queryParams);
  res.status(httpStatus.OK).send(response);
});

const postNewRequest = catchAsync(async (req, res) => {
  const response = await motelRequestService.postNewRequest(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const getPostedMotelRequestByUserId = catchAsync(async (req, res) => {
  const response = await motelRequestService.getPostedMotelRequestByUserId(req.params.userId);
  res.status(httpStatus.CREATED).send(response);
});

const updateMotelRequest = catchAsync(async (req, res) => {
  const { requestId } = req.params;
  const response = await motelRequestService.updateMotelRequest(requestId, req.body);
  res.status(httpStatus.OK).send(response);
});

const deleteMotelRequest = catchAsync(async (req, res) => {
  const { requestId } = req.params;
  const response = await motelRequestService.deleteMotelRequest(requestId);
  res.status(httpStatus.OK).send(response);
});

module.exports = {
  getAllMotelRequest,
  postNewRequest,
  updateMotelRequest,
  getPostedMotelRequestByUserId,
  deleteMotelRequest,
};
