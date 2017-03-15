
'use strict';

var test = require('tape');

module.exports = {
  finish: () => {
    test('force tests to finish', t => {
      t.end();
      process.exit(0);
    });
  }
};
