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
    url: '/admin/CreateArticle'
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
    url: '/admin/CreateArticle'
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
    url: '/article/20'
  }, function(res) {
    t.equal(res.statusCode, 200, 'got not authenticated status code');
    t.end();
  });
});

test('GET /: should return CreateArticle page', (t) => {
  server.inject({
    method: 'GET',
    url: '/admin/DisplayArticles'
  }, function(res) {
    var indexOf = res.payload.indexOf('row');
    t.equal(res.statusCode, 200, 'got not authenticated status code');
    t.end();
  });
});


test('POST /: should return CreateArticle page', (t) => {
  var qs = require('qs');
  var obj =qs.parse("email=admin@admin.com&passowrd=482106");
  server.inject({
    method: 'POST',
    payload:obj,
    url: '/login'
  }, function(res) {
    t.equal(res.statusCode, 302, 'got row somewhere in the html');
    t.end();
  });
});

test('POST /: should return CreateArticle page', (t) => {
  var qs = require('qs');
  var obj =qs.parse("title=testpost&category_id=1&summary=testsummpory&details=testdetials&image=testimage&active=1");
  server.inject({
    method: 'POST',
    payload:obj,
    url: '/admin/CreateArticle'
  }, function(res) {
    t.equal(res.statusCode, 400, 'got row somewhere in the html');
    t.end();
  });
});
test('GET /: should return CreateArticle page', (t) => {
  server.inject({
    method: 'GET',
    url: '/admin/Article/delete/6'
  }, function(res) {
    t.equal(res.statusCode, 400, 'got not authenticated status code');
    t.end();
  });
});
