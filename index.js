const binance = require('./credentials');
const express = require('express');

const app = express();

app.get('/api/prices', (req, res) => {
  binance('RVNBTC', data => {
    res.send(data);
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));
