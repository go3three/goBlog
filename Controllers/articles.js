const Hoek = require('hoek'); // show errors in console without killing app
const db = require('../config/conn.js');

function insertData(req, res) {
    const client = db.createClient(db.config);
    const title = req.payload.title;
    const category_id = req.payload.category_id;
    const summary = req.payload.summary;
    const details = req.payload.details;
    const image = req.payload.image;
    const active = req.payload.active;


    console.log(active);
    const user_id = 1;
    const select = `SELECT * FROM article WHERE (title = '${title}') AND user_id ='${user_id}';`;
    db.selectdata(client, select, function(err, result) {
        const d = new Date();
        const created_at = d.toDateString();
        if (err || result.rowCount === 0) {
            var q = `INSERT INTO article
           (title,uid,category_id,summary,details,image,active,isdelete,created_at,updated_at,updated_by,deleted_by)
           values
           ('${title}','${user_id}','${category_id}','${summary}','${details}','${image}','${active}',0,'${created_at}',NULL,NULL,NULL);`;
            db.insertdata(client, q, function(err, result) {
                Hoek.assert(!err, 'ERROR: Select data from Postgres', err);
                msg = "Article Added Successfully";
                return res.view('CreateArticle', {
                    title: 'DisplayArticles',
                    subtitle: 'Display Articles',
                    info: 'You Can Display and Edit Articles',
                    msg: msg // escaped above
                });
            });
        } else {
            return res.view('CreateArticle', {
                title: 'DisplayArticles',
                subtitle: 'Display Articles',
                info: 'You Can Display and Edit Articles',
                msg: 'Sorry, The Article is Duplicated !'
            }).code(400);
        }
    })
}

function SelectData(req, res) {
    const client = db.createClient(db.config);
    const select = `SELECT * FROM article WHERE uid=1 and isdelete='0'`;
    db.selectdata(client, select, function(err, result) {
        Hoek.assert(!err, 'ERROR: inserting data into Postgres', err);
        return res.view('DisplayArticles', {
            title: 'DisplayArticles',
            subtitle: 'Display Articles',
            info: 'You Can Display and Edit Articles',
            result: result.rows, // escaped above
        });
    });
}

function DeleteData(req, res) {
    const client = db.createClient(db.config);
    const id = req.params.id;
    const del = `UPDATE article SET isdelete='1' WHERE id='${id}'`;
    db.selectdata(client, del, function(err, result) {
        Hoek.assert(!err, 'ERROR: inserting data into Postgres', err);
        req.yar.set('msg', {
            msg: 'Article Delete Successfully'
        });
        return res.redirect('/admin/DisplayArticles');
    });
}
module.exports = {
    insertData: insertData,
    SelectData: SelectData,
    DeleteData: DeleteData,
};
