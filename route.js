'use strict';
const server = require('./server.js');
module.exports=function(request,reply){
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hello, world!');
    }
});
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function(request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

}
