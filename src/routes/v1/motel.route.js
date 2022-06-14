const express = require('express');
const validate = require('../../middlewares/validate');
const motelValidation = require('../../validations/motel.validation');
const motelController = require('../../controllers/motel.controller');
const checkRole = require('../../middlewares/checkRole');

const router = express.Router();

router
  .route('/')
  .post(validate(motelValidation.postMotel), motelController.postMotel)
  .get(validate(motelValidation.queryMotels), motelController.queryMotels)
  .delete(checkRole(['user', 'admin']), validate(motelValidation.deleteMotel), motelController.deleteMotel);

router.route('/predict-distance').get(validate(motelValidation.predictDistance), motelController.predictDistance);
router.route('/recommend').post(validate(motelValidation.recommendMotel), motelController.recommendMotel);

router
  .route('/:motelId')
  .get(validate(motelValidation.getMotel), motelController.getMotel)
  .patch(validate(motelValidation.updateMotelVisibility), motelController.adminUpdateMotelStatus);

router
  .route('/user/:userId')
  .get(checkRole(['user', 'admin']), validate(motelValidation.getMotelsByUserId), motelController.getMotelsByUserId);

router
  .route('/update/:motelId')
  .patch(checkRole(['admin']), validate(motelValidation.updateMotelInfo), motelController.updateMotelInfo);
//   .patch(auth('manageUsers'), validate(motelValidation.updateUser), motelController.updateUser)

module.exports = router;
