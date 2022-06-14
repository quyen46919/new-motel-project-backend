const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Địa chỉ email này đã tồn tại');
  }
  return User.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tài khoản không tồn tại');
  }
  // if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const updateUserInfo = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tài khoản không tồn tại');
  }
  if (updateBody.oldPassword) {
    // update password
    if (!(await user.isPasswordMatch(updateBody.oldPassword))) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Mật khẩu sai');
    }
  } else {
    // update user info
    // eslint-disable-next-line no-param-reassign
    delete updateBody.password;
  }

  // eslint-disable-next-line no-param-reassign
  delete updateBody.oldPassword;

  Object.assign(user, updateBody);
  await user.save();
  return user;
};

// const changePassword = async (userId, updateBody) => {
//   const user = await getUserById(userId);
//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Tài khoản không tồn tại');
//   }

//   const validPassword = await bcrypt.compare(updateBody.oldPassword, user.password);
//   if (!validPassword) throw new ApiError(httpStatus.NOT_FOUND, 'Mật khẩu sai');

//   // if (updateBody.password.localeCompare(updateBody.confirmNewPassword)) {
//   //   throw new ApiError(httpStatus.NOT_FOUND, 'Xác nhận mật khẩu mới không trùng khớp!');
//   // }

//   const newPassword = { password: updateBody.password };
//   Object.assign(user, newPassword);
//   await user.save();
//   return user;
// };

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tài khoản không tồn tại');
  }
  await user.remove();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const adminUpdateUserStatus = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tài khoản không tồn tại');
  }

  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const adminQueryUser = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  updateUserInfo,
  deleteUserById,
  // changePassword,
  adminUpdateUserStatus,
  adminQueryUser,
};
