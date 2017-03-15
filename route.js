'use strict';

const server = require('./server.js');
const Path = require('path');
const Hoek = require('hoek');
const handlebars = require('handlebars');
const inert = require('inert');
const article = require('./Controllers/articles.js');
module.exports=function(request,reply){
  server.register({
    register:inert
  }, function(err) {
  if (err) throw err

  server.route({
    method: 'GET',
    path: '/assets/{file*}',
    handler: {
      directory: {
        path: 'public/assets/'
      }
    }
  })
})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      const data ={
        title:'Main Page'
      }
        reply.view("main",data);
    }
});

server.route({
    method: 'GET',
    path: '/CreateArticle',
    handler: function(request, reply) {
      const data ={
        title:'CreateArticle',
        subtitle:'Create Article',
        info:'You Can Add Articles'
      }
        reply.view("CreateArticle",data);
    }
});
server.route({
    method: 'POST',
    path: '/CreateArticle',
    handler: function(request, reply) {
      const data ={
        title:'CreateArticle',
        subtitle:'Create Article',
        info:'You Can Add Articles'
      }
      article.insertData(request,reply);
    }
});
server.route({
    method: 'GET',
    path: '/DisplayArticles',
    handler: function(request, reply) {
      article.SelectData(request,reply);
    }
});
}
