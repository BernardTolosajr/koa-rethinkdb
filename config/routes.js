'use strict';

var route = require('koa-route');

var smokeController = require('../app/controllers/smoke');

module.exports = function (app) {
  app.use(route.get('/', smokeController.index));
  app.use(route.post('/', smokeController.create));
};
