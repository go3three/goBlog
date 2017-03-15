'use strict';

var test = require('tape');
var shot = require('shot');
var mainHandler = require('../route.js');

test('GET /: should return main page', (t) => {
  shot.inject(mainHandler, {
    method: 'GET',
    url: '/'
  }, function(res) {
    var indexOf = res.payload.indexOf('title');
    t.notEqual(indexOf, -1, 'got the title somewhere in the html');
    t.equal(res.statusCode, 401, 'got not authenticated status code');
    t.end();
  });
});
