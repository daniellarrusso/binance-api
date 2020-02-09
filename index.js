const binance = require('./credentials');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database');

const app = express();

app.use(bodyParser.json()).use(cors());

app.get('/api/prices', (req, res) => {
  binance('RVNBTC', data => {
    res.send(data);
  });
});

app.post('/api/buy', (req, res) => {
  const buy = req.body;
  if (buy.authToken !== 'goJetter0220') {
    return res.status(401).send('Not Authorised');
  }
  res.send(buy);
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
