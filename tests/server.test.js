'use strict';

var test = require('tape');
var shot = require('shot');
const server = require('../server.js');

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
