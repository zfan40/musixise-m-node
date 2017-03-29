'use strict';
const views = require('co-views');
const parse = require('co-body');
const messages = [{
    id: 0,
    message: 'Koa next generation web framework for node.js'
}, {
    id: 1,
    message: 'Koa is a new web framework designed by the team behind Express'
}];
const render = views(__dirname + '/../views', {
    map: { html: 'swig' }
});
var Page = {
    /**
     * 基本资料
     * @yield {[type]} [description]
     */

    // home: function* home(ctx) {
    //     this.body = yield render('list', { 'messages': messages });
    // },
    enter: function*(nickname) {
        var self = this;
        console.log(nickname);
        var renderer = {};
        // this.body = yield render('stage/stage', { 'messages': messages });
        this.body = yield render('work/update', renderer);
    }
};

var Api = {};

module.exports.Page = Page;
module.exports.Api = Api