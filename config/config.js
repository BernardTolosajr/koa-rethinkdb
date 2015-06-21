'use strict';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  rethinkdb: {
      host: "localhost",
      port: 28015,
      authKey: "",
      db: 'koa_sample_' + env
  },
  db: 'koa_sample_' + env,
  table: ['sample'],
  koa: {
    port: 3000
  }
};
