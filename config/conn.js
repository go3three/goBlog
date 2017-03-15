'use strict';
var pg = require('pg');
var URL = require('url-parse');
const sqlQueries = require('./sql.js');
var url = new URL(process.env.DATABASE_URL || 'postgres://postgres:330167@localhost:5432/test');
var config = {
    user: url.username,
    database: url.pathname.split('/')[1],
    password: url.password,
    host: url.hostname,
    port: url.port,
    max: 10,
    idleTimeoutMillis: 30000,
    ssl: process.env.DATABASE_URL ? true : false
};
var createClient = (config, cb) => {
    var client = new pg.Client(config);
    client.connect(err => {
        if (err) {
            throw err;
        }
    });
    return client;
};

var createTable = (client, cb) => {
    var finalQuery = `${sqlQueries.admin} ${sqlQueries.article} ${sqlQueries.comments}`;
    client.query(finalQuery, cb);
};

var selectdata = (client, query, cb) => {

    client.query(query, cb);
};
var insertdata = (client, data, cb) => {
    client.query(data, cb);
};

module.exports = {
    config: config,
    createClient: createClient,
    createTable: createTable,
    insertdata: insertdata,
    selectdata: selectdata
};
