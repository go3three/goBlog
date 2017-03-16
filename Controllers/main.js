const Hoek = require('hoek'); // show errors in console without killing app
const db = require('../config/conn.js');

function SelectData(req, res) {
    const client = db.createClient(db.config);
    const select = `SELECT * FROM article WHERE isdelete='0' ORDER BY id DESC LIMIT  3 ;`;
    db.selectdata(client, select, function(err, result) {
        Hoek.assert(!err, 'ERROR: inserting data into Postgres', err);
        const data = {
            title: 'DisplayArticles',
            subtitle: 'Display Articles',
            info: 'You Can Display and Edit Articles',
            result: result.rows, // escaped above
        };
        return res.view('index', data, {
            layout: false
        });
    });
}

function article(req, res) {
    const id = req.params.id;
    const select = `SELECT * FROM article WHERE isdelete='0' AND id=${id};`;
    const client = db.createClient(db.config);
    db.selectdata(client, select, function(err, result) {
        const data = {
            title: 'DisplayArticles',
            subtitle: 'Display Articles',
            info: 'You Can Display and Edit Articles',
            result: result.rows, // escaped above
        }
        return res.view('single', data, {
            layout: false
        });
    })
}

function login(req, res) {
    const email = req.payload.email;
    const password = req.payload.password;
    const select = `SELECT * FROM admin WHERE password='${password}' AND email='${email}';`;

    const client = db.createClient(db.config);
    db.selectdata(client, select, function(err, result) {
      console.log(err);
        if (err || typeof result == 'undefiend') {
          return res.redirect('/');
        } else {
            const data = {

            }
            return res.redirect('/admin/DisplayArticles');
        }
    })
}


module.exports = {
    SelectData: SelectData,
    article: article,
    login: login
};
