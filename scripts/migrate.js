'use strict';

var db = require('../config/conn.js');
var client = db.createClient(db.config);
db.createTable(client, function(errTable, resTable) {

  if(errTable) {
    console.log('error while trying to create tables');
    console.log('errTable',errTable);
    // throw errTable;
  }

  console.log('OK: TABLE CREATED');
  client.end();
});
