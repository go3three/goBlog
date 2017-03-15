'use strict';

var test = require('tape');
var shot = require('shot');
var db = require('../config/conn.js');
var articles = require('../Controllers/articles.js');
var server = require('../server.js');
var client = db.createClient(db.config);
test('GET /: should return main page', (t) => {
  server.inject({
    method: 'GET',
    url: '/'
  }, function(res) {
    var indexOf = res.payload.indexOf('title');
    t.notEqual(indexOf, -1, 'got the title somewhere in the html');
    t.equal(res.statusCode, 200, 'got not authenticated status code');
    t.end();
  });
});

test('GET /: should return CreateArticle page', (t) => {
  server.inject({
    method: 'GET',
    url: '/CreateArticle'
  }, function(res) {
    var indexOf = res.payload.indexOf('input');
    t.notEqual(indexOf, -1, 'got input somewhere in the html');
    t.equal(res.statusCode, 200, 'got not authenticated status code');
    t.end();
  });
});

test('GET /: should return CreateArticle page', (t) => {
  server.inject({
    method: 'GET',
    url: '/CreateArticle'
  }, function(res) {
    var indexOf = res.payload.indexOf('input');
    t.notEqual(indexOf, -1, 'got input somewhere in the html');
    t.equal(res.statusCode, 200, 'got not authenticated status code');
    t.end();
  });
});


test('GET /: should return CreateArticle page', (t) => {
  server.inject({
    method: 'GET',
    url: '/DisplayArticles'
  }, function(res) {
    var indexOf = res.payload.indexOf('row');
    t.notEqual(indexOf, -1, 'got row somewhere in the html');
    t.equal(res.statusCode, 200, 'got not authenticated status code');
    t.end();
  });
});
