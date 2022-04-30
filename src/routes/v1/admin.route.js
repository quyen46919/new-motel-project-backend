const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const motelValidation = require('../../validations/motel.validation');
const motelController = require('../../controllers/motel.controller');

const router = express.Router();

router.route('/').get(validate(motelValidation.queryMotels), motelController.adminQueryMotels);

router.route('/:motelId').patch(validate(motelValidation.updateMotelStatus), motelController.updateMotelStatus);

module.exports = router;
