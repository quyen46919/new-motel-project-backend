const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const motelValidation = require('../../validations/motel.validation');
const motelController = require('../../controllers/motel.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(motelValidation.postMotel), motelController.postMotel)
  .get(validate(motelValidation.queryMotels), motelController.queryMotels)
  .delete(auth(), validate(motelValidation.deleteMotel), motelController.deleteMotel);

router.route('/predict-distance').get(validate(motelValidation.predictDistance), motelController.predictDistance);
router.route('/recommend').post(validate(motelValidation.recommendMotel), motelController.recommendMotel);

router
  .route('/:motelId')
  .get(validate(motelValidation.getMotel), motelController.getMotel)
  .patch(validate(motelValidation.updateMotelVisibility), motelController.updateMotelStatus);

router.route('/user/:userId').get(validate(motelValidation.getMotelsByUserId), motelController.getMotelsByUserId);

router
  .route('/update/:motelId')
  .patch(auth('updateMotels'), validate(motelValidation.updateMotelInfo), motelController.updateMotelInfo);
//   .patch(auth('manageUsers'), validate(motelValidation.updateUser), motelController.updateUser)

module.exports = router;
