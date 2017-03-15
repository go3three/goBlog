'use strict';
const Hapi = require('hapi');
// require('env2')('./.env');    // loads all entries into process.env
const handlebars = require('handlebars');
const vision = require('vision');
// const pg = require('hapi-postgres-connection');
const server = new Hapi.Server();
const inert = require('inert');
const routes = require('./route.js');
server.connection({
    port: process.env.PORT || 3000
});
server.register(vision, (err) => {
    if (err) {
        throw err
    }
});
server.register({
    register:inert
  }, function(err) {
  if (err) throw err
  server.route(routes);
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
