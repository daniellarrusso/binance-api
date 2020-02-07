const binance = require('node-binance-api');

const key = binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>',
  useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});

module.exports = function(pair, cb) {
  key.prices(pair, (error, ticker) => {
    cb(ticker);
  });
};
