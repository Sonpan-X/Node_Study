const koa = require('koa');
const router =  require('koa-router');

let server = new koa();
server.listen(8080);

let r1 = router();
server.use(r1.routes());

r1.get('/aaa',async (ctx,next)=>{
  ctx.response.set('a',12);
  ctx.response.body = {'a':12,'b':13};
})