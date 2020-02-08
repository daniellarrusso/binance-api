const binance = require('./credentials');
const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();

app.use(cors());

app.get('/api/prices', (req, res) => {
  binance('RVNBTC', data => {
    res.send(data);
  });
});

app.get('/api/pairings', (req, res) => {
  const sql = 'SELECT * FROM Pairings';
  database.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    res.send(rows);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
