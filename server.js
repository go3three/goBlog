'use strict';
const Hapi = require('hapi');
const handlebars = require('handlebars');
const vision = require('vision');
const inert = require('inert');
const server = new Hapi.Server();
const routes = require('./route.js');
server.connection({
    port: process.env.PORT || 3000,
    host:'0.0.0.0'

});
server.register(vision, (err) => {
    if (err) {
        throw err
    }
});
var options = {
    storeBlank: false,
    cookieOptions: {
        password: 'the-password-must-be-at-least-32-characters-long',
        isSecure: true
    }
};

server.register({
    register: require('yar'),
    options: options
}, function (err) {

  server.route(routes);

});
server.register({
    register: inert
}, function(err) {
    if (err) throw err
})


server.on('response', function (request) {
    console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
});
server.views({
    engines: {
        html: require('handlebars')
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'default',
     helpersPath: 'views/helpers'
    //helpersPath: 'views/helpers',
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

module.exports=server;
