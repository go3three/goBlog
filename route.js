  'use strict';
  const server = require('./server.js');
  const Path = require('path');
  const Hoek = require('hoek');
  const handlebars = require('handlebars');
  const inert = require('inert');
  const article = require('./Controllers/articles.js');
  const main = require('./Controllers/main.js');
  module.exports = function(request, reply) {
      server.register({
          register: inert
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
          server.route({
              method: 'GET',
              path: '/images/{file*}',
              handler: {
                  directory: {
                      path: 'public/assets/images'
                  }
              }
          })
      })

      server.route({
          method: 'GET',
          path: '/',
          handler: function(request, reply) {
              main.SelectData(request, reply);
          }
      });
      server.route({
          method: 'POST',
          path: '/login',
          handler: function(request, reply) {
              main.login(request, reply);
          }
      });
      server.route({
          method: 'GET',
          path: '/article/{id}',
          handler: function(request, reply) {
              main.article(request, reply);
          }
      });

      server.route({
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
      });
      server.route({
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
      });
      server.route({
          method: 'GET',
          path: '/admin/Article/delete/{id}',
          handler: function(request, reply) {
              article.DeleteData(request, reply);
          }
      });
      server.route({
          method: 'GET',
          path: '/admin/DisplayArticles',
          handler: function(request, reply) {
              article.SelectData(request, reply);
          }
      });
  }
