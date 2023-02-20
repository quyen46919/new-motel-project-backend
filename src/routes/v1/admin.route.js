const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const motelValidation = require('../../validations/motel.validation');
const userValidation = require('../../validations/user.validation');
const motelController = require('../../controllers/motel.controller');
const userController = require('../../controllers/user.controller');
const checkRole = require('../../middlewares/checkRole');

const router = express.Router();

router.route('/').get(checkRole(['admin']), validate(motelValidation.queryMotels), motelController.adminQueryMotels);
router
  .route('/:motelId')
  .patch(checkRole(['admin']), validate(motelValidation.updateMotelStatus), motelController.adminUpdateMotelStatus);

router.route('/user').get(checkRole(['admin']), validate(userValidation.getUsers), userController.adminGetAllUsers);
router
  .route('/user/:userId')
  .patch(checkRole(['admin']), validate(userValidation.updateUserStatus), userController.adminUpdateUserStatus);

module.exports = router;
