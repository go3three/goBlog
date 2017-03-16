# goBlog
Heroku link is [here](https://go3blog.herokuapp.com)

![Heroku](https://heroku-badge.herokuapp.com/?app=go3blog) [![Build Status](https://travis-ci.org/go3three/goBlog.svg?branch=master)](https://travis-ci.org/go3three/goBlog) [![Code Climate](https://codeclimate.com/github/AkramBadah/goblog/badges/gpa.svg)](https://codeclimate.com/github/AkramBadah/goblog)
[![Test Coverage](https://codeclimate.com/github/go3three/goBlog/badges/coverage.svg)](https://codeclimate.com/github/go3three/goBlog/coverage)



![alt text](http://imgh.us/2_2903.jpg)

### How to run goBlog

  * ``git clone`` the file
  * Install dependencies with ``npm i``
  * Create database with ``npm run db:create``
  * migrate tables with ``npm run migrate``
  * Then run ``node server.js``

### Programming Language

  * ``JavaScript``
  * ``node.js``
  * Frameworks ``hapi.js & handlebars.js``
  with CI (Continuos Integration technique)

### Design process

>For the things we have to learn before we can do them, we learn by doing them. ~Aristotle

#### User stories

For a user looking for a blog design with CMS.

  * I want a blog where I can add, edit and publish my own writings.
  * I want a blog where I can have my dashboard as the admin and where I can control my posts and other guest users comments.
  * The blog should have a home page where guest users can see my latest posts.

#### Requirements Analysis

![alt text](http://imgh.us/1_4077.jpg)

#### Database

![alt text](http://imgh.us/3_2445.jpg)

   * **tbl_user** stores the user information, including username and password.
   * **tbl_post** stores the blog post information. It mainly consists of the following columns:
  * title: required, title of the post;
  * content: required, body content of the post.
   * **tbl_comment** stores the post comment information. Each comment is associated with a post and mainly consists of the following columns:
       * author: required, the author name;
       * email: required, the author email;
       * url: optional, the author website URL;
       * content: required, the comment content in plain text format.

#### Prototype sketches

![alt text](http://imgh.us/4_2162.jpg)

#### Organizing the code

  * Files structure
  * Code structure

#### Tests

Following the TDD approach, test cases were conducted to make sure back-end, front-end, database functionality is authentic and easily maintained.
