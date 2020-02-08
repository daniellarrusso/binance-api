const binance = require('./credentials');
const express = require('express');

const app = express();

app.get('/api/prices', (req, res) => {
  binance('RVNBTC', data => {
    res.send(data);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
