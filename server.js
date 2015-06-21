var koa = require('koa'),
    route = require('koa-route'),
    logger = require('koa-logger');

var app = module.exports = koa(),
  port = process.env.PORT || 8000,
  env = process.env.NODE_ENV || 'development';

app.use(logger());

require('./config/database')();
require('./config/routes')(app);

app.listen(port);
console.log('app listening on port: ', port);
