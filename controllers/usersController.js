const bcrypt = require('bcrypt');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PW,
  database: process.env.DATABASE_TEST_DB,
});

module.exports.new = async (reqBody) => {
  let query = `SELECT * FROM users WHERE email='${reqEmail}';`;
  return connection.query(query, function (err, res) {
    if (err) throw err;
    if (res.length > 0) {
      return res.length;
    } else {
      bcrypt.hash(reqBody.password, 10, async function (err, hash) {
        if (err) throw err;
        let query = `INSERT INTO users (first_name, last_name, address, post_code, contact_number, email, user_name, password) VALUES ('${reqBody.first_name}', '${reqBody.last_name}', '${reqBody.address}', '${reqBody.post_code}', '${reqBody.contact_number}', '${reqBody.email}', '${reqBody.user_name}', '${hash}');`;
        connection.query(query, function (err, res) {
          if (err) throw err;
          console.log(res);
        });
      });
    }
  });
};

module.exports.remove = (reqBody) => {
  let query = `DELETE FROM users WHERE id='${reqBody.id}'`;
  connection.query(query, function (err) {
    if (err) throw err;
    console.log(`User with id ${reqBody.id} removed.`);
  });
};

module.exports.update = (reqBody) => {
  let query = `UPDATE users SET first_name='${reqBody.first_name}', last_name='${reqBody.last_name}', address='${reqBody.address}', post_code='${reqBody.post_code}', contact_number='${reqBody.contact_number}', email='${reqBody.email}' WHERE id='${reqBody.id}'`;
  connection.query(query, function (err) {
    if (err) throw err;
    console.log(`User with ID ${reqBody.id} updated.`);
  });
};

module.exports.removeMany = (reqBody) => {
  reqBody.id.map((userId) => {
    let query = `DELETE FROM users WHERE id='${userId}'`;
    connection.query(query, function (err) {
      if (err) throw err;
      console.log(`User with id ${userId} removed.`);
    });
  });
};

module.exports.get = (reqBody) => {
  let query = `SELECT * FROM users WHERE id='${reqBody.id}'`;
  let result = connection.query(query, function (err, res) {
    if (err) throw err;
    return res;
  });
  return result;
};

module.exports.getAll = (reqBody) => {
  let query = `SELECT * FROM users`;
  return connection.query(query, function (err) {
    if (err) throw err;
  });
};
