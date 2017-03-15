'use strict';

module.exports = {
    admin: `CREATE TABLE IF NOT EXISTS admin (
    id SERIAL,
    email VARCHAR(50),
    fullname VARCHAR(50),
    mobile VARCHAR(50),
    active INT,
    lastlogin VARCHAR(50)) ;`,
    article: `CREATE TABLE IF NOT EXISTS article (
    id SERIAL,
    title VARCHAR(50),
    uid int,
    category_id int,
    summary varchar(250),
    details text,
    image varchar(50),
    active int,
    isdelete int,
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
  );`
};
