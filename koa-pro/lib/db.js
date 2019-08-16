const Mysql = require('mysql-pro');
const config=require('../config');

let db = new Mysql({
  mysql: {
    host: config.db_host,
    port: config.db_port,
    user: config.db_user,
    passward:config.db_password,
    database: config.db_database
  }
})

module.exports = db;