const Koa = require('koa');
const Router = require('koa-router');
const staticCache = require('koa-static-cache');
const body = require('koa-better-body');
const convert = require('koa-convert');
const session = require('koa-session');

const pathlib = require('path');
const config = require('./config');
const db = require('./lib/db')

let server = new Koa();
server.listen(config.port);

let db =db;

let r1 = new Router();
server.use(r1);



server.use(convert());

server.keys = config.keys;
server.use(session({}, server));

server.use(staticCache);

