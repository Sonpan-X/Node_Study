const pathlib = require('path');

module.exports={
  port:8080,
  uploadDir:pathlib.resolve('www/upload'),
  wwwDir:pathlib.resolve('www'),
  
  secret_key:['gghgjkhkjhjkyuiyui','ghfghfghftyrtyddfsdfsdsdfgfdsg','gggghhjghfjhgftyrteewewdxdsdsfdserwxdsfggfeert'],

  db_port:3301,
  db_host:'localhost',
  db_user:'root',
  db_password:'',
  db_database:'common_db'
}