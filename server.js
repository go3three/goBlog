'use strict';
const Hapi = require('hapi');
require('env2')('./.env');    // loads all entries into process.env
const handlebars = require('handlebars');
const vision = require('vision');
const pg = require('hapi-postgres-connection');
const server = new Hapi.Server();
server.connection({
    port: process.env.PORT || 3000
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
}, function (err) { });

 server.register(pg, (err) => {
    if (err) {
        throw err
    }
});
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
