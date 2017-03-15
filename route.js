'use strict';

const server = require('./server.js');
const Path = require('path');
const Hoek = require('hoek');
const handlebars = require('handlebars');
const inert = require('inert');
const article = require('./Controllers/articles.js');




var getassets = {
    method: 'GET',
    path: '/assets/{file*}',
    handler: {
      directory: {
        path: 'public/assets/'
      }
    }
}


var gethome = {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      const data ={
        title:'Main Page'
      }
        reply.view("main",data);
    }
}
var getcreatearticle = {
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
}
var postcreatearticle = {
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
}
var getdisplayarticle = {
      method: 'GET',
      path: '/DisplayArticles',
      handler: function(request, reply) {
        article.SelectData(request,reply);
      }
}

module.exports = [
  getassets,
  gethome,
  getcreatearticle,
  postcreatearticle,
  getdisplayarticle
];
