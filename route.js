  'use strict';
  const server = require('./server.js');
  const Path = require('path');
  const Hoek = require('hoek');
  const handlebars = require('handlebars');
  const article = require('./Controllers/articles.js');
  const main = require('./Controllers/main.js');
  const files = {
      method: 'GET',
      path: '/assets/{file*}',
      handler: {
          directory: {
              path: 'public/assets/'
          }
      }
  }
  const images = {
      method: 'GET',
      path: '/images/{file*}',
      handler: {
          directory: {
              path: 'public/assets/images'
          }
      }
  }


  const home = {
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
          main.SelectData(request, reply);
      }
  }
  const login = {
      method: 'POST',
      path: '/login',
      handler: function(request, reply) {
          main.login(request, reply);
      }
  }
  const articleid = {
      method: 'GET',
      path: '/article/{id}',
      handler: function(request, reply) {
          main.article(request, reply);
      }
  }

  const CreatearticleGET = {
      method: 'GET',
      path: '/admin/CreateArticle',
      handler: function(request, reply) {
          const data = {
              title: 'CreateArticle',
              subtitle: 'Create Article',
              info: 'You Can Add Articles'
          }
          reply.view("CreateArticle", data);
      }
  }
  const CreateArticlePOST = {
      method: 'POST',
      path: '/admin/CreateArticle',
      handler: function(request, reply) {
          const data = {
              title: 'CreateArticle',
              subtitle: 'Create Article',
              info: 'You Can Add Articles'
          }
          article.insertData(request, reply);
      }
  }
  const ArticleDelete = {
      method: 'GET',
      path: '/admin/Article/delete/{id}',
      handler: function(request, reply) {
          article.DeleteData(request, reply);
      }
  }
  const DisplayArticles = {
      method: 'GET',
      path: '/admin/DisplayArticles',
      handler: function(request, reply) {
          article.SelectData(request, reply);
      }
  }
  module.exports = [files, images, home, login, articleid, CreatearticleGET, CreateArticlePOST, ArticleDelete, DisplayArticles]
