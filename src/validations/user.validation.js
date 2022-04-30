const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      password: Joi.string().custom(password),
      name: Joi.string(),
      gender: Joi.string(),
      address: Joi.string(),
      job: Joi.string(),
      schoolId: Joi.string(),
      dateOfBirth: Joi.date(),
      avatar: Joi.string(),
    })
    .min(1),
};

const updateUserInfo = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().allow(''),
      gender: Joi.string().allow(''),
      avatar: Joi.string().allow(''),
      age: Joi.number().allow(''),
      address: Joi.string().allow(''),
      school: Joi.string().allow(''),
      schoolId: Joi.string().allow(''),
      job: Joi.string().allow(''),
      dateOfBirth: Joi.date().allow(''),
      phone: Joi.string().allow(''),
      oldPassword: Joi.string().custom(password),
      password: Joi.string().custom(password),
    })
    .min(1),
};

const changePassword = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      oldPassword: Joi.string().custom(password),
      password: Joi.string().custom(password),
      confirmNewPassword: Joi.string().custom(password),
    })
    .min(3),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateUserInfo,
  changePassword,
};
