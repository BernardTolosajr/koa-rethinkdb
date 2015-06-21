'use strict';

var config = require('../../config/config'),
    r = require('rethinkdbdash')(config.rethinkdb),
    parse = require('co-body');

exports.index = function *() {
  this.body = "Hello, World";
};

exports.create = function *() {
  var object = yield parse(this);
  object.created_at = new Date;

  try {
    yield r.db(config.rethinkdb.db).table('sample')
                      .insert(object);
  }
  catch (err) {
    if (err.message.indexOf("already exists") == -1)
      console.log(err.message);
  }

  this.status = 201;
  this.body = object;
};
