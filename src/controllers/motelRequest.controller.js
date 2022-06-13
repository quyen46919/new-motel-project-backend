const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { motelRequestService } = require('../services');

const getAllMotelRequest = catchAsync(async (req, res) => {
  const response = await motelRequestService.getAllMotelRequest(req.body);
  res.status(httpStatus.OK).send(response);
});

const postNewRequest = catchAsync(async (req, res) => {
  const response = await motelRequestService.postNewRequest(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const updateMotelRequest = catchAsync(async (req, res) => {
  const { requestId } = req.params;
  const response = await motelRequestService.updateMotelRequest(requestId, req.body);
  res.status(httpStatus.OK).send(response);
});

module.exports = {
  getAllMotelRequest,
  postNewRequest,
  updateMotelRequest,
};
