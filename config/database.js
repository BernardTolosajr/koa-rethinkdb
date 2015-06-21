var config = require('../config/config'),
    r = require('rethinkdbdash')(config.rethinkdb),
    co = require('co');

module.exports = function() {
  co(function *() {
    var db = config.db;
    console.log(`running at database: ${db}`);
    try {
      yield r.dbCreate(db).run();
      yield r.db(db).tableCreate('sample').run();
    }
    catch(e) {
      if (e.message.indexOf("already exists") == -1)
        console.log(e.message);
    }
  });
};
