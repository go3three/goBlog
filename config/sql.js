'use strict';

module.exports = {
    admin: `CREATE TABLE IF NOT EXISTS admin (
    id SERIAL,
    email VARCHAR(50),
    password varchar(50),
    fullname VARCHAR(50),
    mobile VARCHAR(50),
    active INT,
    lastlogin VARCHAR(50)) ;`,
    article: `CREATE TABLE IF NOT EXISTS article (
    id SERIAL,
    title VARCHAR(250),
    uid int,
    category_id int ,
    summary text,
    details text,
    image varchar(250),
    active int DEFAULT 0,
    isdelete int DEFAULT 0,
    created_at VARCHAR(50),
    updated_at VARCHAR(50),
    updated_by VARCHAR(50),
    deleted_by int
  );`,
    comments: `CREATE TABLE IF NOT EXISTS comments (
    id SERIAL ,
    article_id int ,
    created_by VARCHAR(50),
    created_at VARCHAR(50),
    details text
  );`,
  inser_admin: `INSERT INTO admin
    (email,password,fullname,mobile,active,lastlogin) values('admin@admin.com','482106','MohammedNaji','0598287419','1','0');`
};
