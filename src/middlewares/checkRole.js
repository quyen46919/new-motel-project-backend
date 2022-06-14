const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { User } = require('../models');

const checkRole = (roles) => {
  // console.log('in here 1');
  return async (req, res, next) => {
    const key = req.headers.authorization.split(' ')[0];
    const jwtToken = req.headers.authorization.split(' ')[1];

    if (key !== 'Bearer') {
      return res.status(401).json({ message: 'Token không hợp lệ' });
    }

    if (jwtToken) {
      try {
        const { sub } = jwt.verify(jwtToken, config.jwt.secret);
        if (sub) {
          const foundUser = await User.findById(sub);
          if (roles.includes(foundUser.role)) {
            res.locals.user = sub;
            res.locals.jwt = jwtToken;
            next();
          } else {
            res.status(401).json({ message: 'Bạn không có quyền sử dụng chức năng này!' });
          }
        }
      } catch (err) {
        return res.status(401).json({ message: 'Token không hợp lệ' });
      }
    } else {
      return res.status(401).json({ message: 'Token không hợp lệ' });
    }
  };
};

module.exports = checkRole;
