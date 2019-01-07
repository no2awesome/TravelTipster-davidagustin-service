const mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
});

// const connection = mysql.createConnection({
//   host: 'traveltipsterreviews.cgsmjchp1oui.us-west-2.rds.amazonaws.com',
//   user: 'root',
//   password: 'password',
//   database: 'reviews'
// });
// //
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'password',
//   database: 'reviews'
// });


connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

module.exports = connection;
