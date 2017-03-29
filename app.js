'use strict';
const messages = require('./controllers/messages');
const Home = require('./controllers/home');
const Member = require('./controllers/member');
const Stage = require('./controllers/stage');
const Stagelist = require('./controllers/stagelist');
const MusixiserDetail = require('./controllers/musixiserdetail');
const WorkUpdate = require('./controllers/workupdate')
// const MyFavorite = require('./controllers/myfavorite');
const WeddingInvitation = require('./controllers/wedding');


const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const app = koa();

// Logger
app.use(logger());


/*********    routers registration    *********/
// app.use(route.get('/', messages.home));
// app.use(route.get('/messages', messages.list));
// app.use(route.get('/messages/:id', messages.fetch));
// app.use(route.post('/messages', messages.create));
// app.use(route.get('/async', messages.delay));
// app.use(route.get('/promise', messages.promise));

/***** Home *****/
app.use(route.get('/', Home.Page.home));

/***** Member *****/
// 注册用户
app.use(route.get('/member/join', Member.Page.join));
app.use(route.post('/member/join', Member.Page.join));
// 登陆用户
app.use(route.get('/member/login', Member.Page.login));
app.use(route.post('/member/login', Member.Page.login));
// 登出用户
app.use(route.get('/member/logout', Member.Page.logout));

/***** Stage *****/
//舞台列表
app.use(route.get('/stagelist',Stagelist.Page.show));

// 进入舞台
app.use(route.get('/stage/:nick_name', Stage.Page.enter));
app.use(route.post('/stage/:nick_name', Stage.Page.enter));

//我的收藏
// app.use(route.get('/me/favorite', MyFavorite.Page.enter));
// app.use(route.post('/me/favorite', MyFavorite.Page.enter));

//音乐人详情
app.use(route.get('/musixiser-detail/:nick_name', MusixiserDetail.Page.enter));
app.use(route.post('/musixiser-detail/:nick_name', MusixiserDetail.Page.enter));

//更新作品信息
app.use(route.get('/work-update/:workid', WorkUpdate.Page.enter));
app.use(route.post('/work-update/:workid', WorkUpdate.Page.enter));
/**********************************************/

app.use(route.get('/wpp-invitation', WeddingInvitation.Page.home));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3001);
  console.log('listening on port 3001');
}

module.exports = app;