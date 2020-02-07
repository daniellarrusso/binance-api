const binance = require('./credentials');

binance('RVNBTC', data => {
  console.log(data);
});
