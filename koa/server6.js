const koa = require('koa');
const betterBody = require('koa-better-body');
const convert = require('koa-convert');
const path = require('path');

let server = new koa();
server.listen(8080);

server.use(convert(betterBody({
  uploadDir:path.resolve('./upload'),
  keepExtensions:true}
  )));

  server.use(async ctx=>{
    console.log(ctx.request.fields);
    console.log(ctx.request.files);
  })
