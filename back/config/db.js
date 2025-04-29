const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'demo',
  password: 'allubb',
  database: 'mis1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
