const express = require('express');
const validate = require('../../middlewares/validate');
const motelRequestController = require('../../controllers/motelRequest.controller');
const motelRequestValidation = require('../../validations/motelRequest.validation');
const checkRole = require('../../middlewares/checkRole');

const router = express.Router();

router
  .route('/')
  .get(checkRole(['admin']), validate(motelRequestValidation.queryMotelRequests), motelRequestController.getAllMotelRequest)
  .post(
    checkRole(['user', 'admin']),
    validate(motelRequestValidation.createNewMotelRequest),
    motelRequestController.postNewRequest
  );

router
  .route('/:requestId')
  .patch(
    checkRole(['admin']),
    validate(motelRequestValidation.updateMotelRequest),
    motelRequestController.updateMotelRequest
  )
  .delete(checkRole(['user', 'admin']), motelRequestController.deleteMotelRequest);

router
  .get('/user/:userId', checkRole(['user', 'admin']), motelRequestController.getPostedMotelRequestByUserId)
  .patch(
    checkRole(['admin']),
    validate(motelRequestValidation.updateMotelRequest),
    motelRequestController.updateMotelRequest
  );

module.exports = router;
