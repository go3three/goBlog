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

});
db.insertadmin(client,function(err,res){
  if(err) {
    console.log('error while trying to create admin');
    console.log('err',err);
    // throw errTable;
  }

  console.log('OK: admin CREATED');
  client.end();

})
