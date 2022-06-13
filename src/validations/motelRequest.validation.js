const Joi = require('joi');
const { objectId } = require('./custom.validation');

const queryMotelRequests = {
  query: Joi.object()
    .keys({
      sortBy: Joi.string(),
      limit: Joi.number().integer(),
      page: Joi.number().integer(),
      search: Joi.string().allow(''),
    })
    .unknown(true),
};

const createNewMotelRequest = {
  body: Joi.object().keys({
    messageType: Joi.string().valid('Đăng ký đặt phòng', 'Báo thông tin sai', 'Báo trọ đã có người thuê').required(),
    message: Joi.string().min(1).max(1000).required(),
    motelId: Joi.string().custom(objectId).required(),
    createUserId: Joi.string().custom(objectId).required(),
    contactPhone: Joi.string()
      .regex(/(84|0[3|5|7|8|9])+([0-9]{8})/)
      .required(),
  }),
};

const updateMotelRequest = {
  params: Joi.object().keys({
    requestId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      adminId: Joi.string().custom(objectId).required(),
      adminMessage: Joi.string().min(1).max(1000).required(),
      status: Joi.number().valid(0, 1, 2).required(),
    })
    .min(3),
};

module.exports = {
  queryMotelRequests,
  updateMotelRequest,
  createNewMotelRequest,
};
