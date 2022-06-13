const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const motelRoute = require('./motel.route');
const adminRoute = require('./admin.route');
const motelRequest = require('./motelRequest.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/motel',
    route: motelRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
  {
    path: '/motel-request',
    route: motelRequest,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
