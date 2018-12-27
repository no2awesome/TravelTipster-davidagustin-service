const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'reviews'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connection to database');
  } else {
    console.log('Successful connection to database');
    // connection.query(`SELECT * FROM (user)`, (err, res) => {
    // if (err) {
    //   console.log('Error');
    // } else {
    //   console.log(res);
    // }
    // connection.query(`SELECT * FROM (images)`, (err, res) => {
    //   if (err) {
    //     console.log('Error');
    //   } else {
    //     console.log(res);
    //   }
    // });
    // connection.query(`SELECT *
    //                   FROM (hotels)`, (err, res) => {
    //   if (err) {
    //     console.log('Error');
    //   } else {
    //     console.log(res);
    //   }
    // });
    // connection.query(`SELECT * FROM (userReviewMessage)`, (err, res) => {
    //   if (err) {
    //     console.log('Error');
    //   } else {
    //     console.log(res);
    //   }
    // });
    // connection.query(`SELECT * FROM (reply)`, (err, res) => {
    //   if (err) {
    //     console.log('Error');
    //   } else {
    //     console.log(res);
    //   }
    // });
    // });
  }
});

module.exports = connection;
