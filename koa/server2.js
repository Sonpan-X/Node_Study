const Koa =  require('koa');
const router =  require('koa-router');

let server = new Koa();
server.listen(8080);

let r1 = router();
server.use(r1.routes());

r1.get('/',async (ctx,next)=>{
  console.log('=========req=============');
  console.log(ctx.req);
  console.log('=========res=============');
  console.log(ctx.res);
  console.log('===========request==============');
  console.log(ctx.request);
  console.log('===========response==============');
  console.log(ctx.response);
  console.log('===========header==============');
  console.log(ctx.request.header);
  console.log('===========headers==============');
  console.log(ctx.request.headers)
  // ctx.response.status = 403; 
  // ctx.response.body = 'hello'; 

})