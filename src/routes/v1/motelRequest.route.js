const express = require('express');
const validate = require('../../middlewares/validate');
const motelRequestController = require('../../controllers/motelRequest.controller');
const motelRequestValidation = require('../../validations/motelRequest.validation');

const router = express.Router();

router
  .route('/')
  .get(validate(motelRequestValidation.queryMotelRequests), motelRequestController.getAllMotelRequest)
  .post(validate(motelRequestValidation.createNewMotelRequest), motelRequestController.postNewRequest);

router
  .route('/:requestId')
  .patch(validate(motelRequestValidation.updateMotelRequest), motelRequestController.updateMotelRequest);

module.exports = router;
