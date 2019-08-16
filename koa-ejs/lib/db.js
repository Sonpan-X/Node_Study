const mongoose = require('mongoose')
const dbConfig = require('../config')

const db =  mongoose.connect(dbConfig.m_db,
  {
  useNewUrlParser: true
  },
  function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    db.close();
  }
);

module.exports =db;