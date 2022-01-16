const express = require('express');
const mysql = require('mysql');

const app = express();
const url = 'https://produktsucher3.free.beeceptor.com';
const table ='KaufLand';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
});

app.listen(url, () => {
  console.log(`App server now listening to port ${url}`);
});

app.get('/api/api', (req, res) => {
  pool.query(`select * from ${table}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});