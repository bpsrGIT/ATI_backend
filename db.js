const mysql = require('mysql');
const async = require('async');

const PROD_DB = 'prod';
const TEST_DB = 'test';

exports.MODE_TEST = 'test_db';
exports.MODE_PROD = 'prod';

exports.state = {
  con: null,
  mode: null,
};

exports.connection;

exports.connect = function (mode, done) {
  this.state.con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: TEST_DB,
  });

  this.state.mode = mode;
  done();
};

exports.create_table = function () {
  let con = this.state.con;
  if (!con) return done(new Error('Missing database connection.'));

  let sql =
    'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), address VARCHAR(100), post_code VARCHAR(10), contact_number VARCHAR(20), email VARCHAR(50), user_name VARCHAR(20), password VARCHAR(250))';
  con.query(sql, function (err) {
    if (err) throw err;
  });
};
