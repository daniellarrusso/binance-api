const sqlite = require('sqlite3');

const db = new sqlite.Database('./myBinance.sqlite3', err => {
  if (err) {
    console.log('Error when creating database', err);
  } else {
    console.log('Database created');
    createTable();
  }
});

const createTable = () => {
  console.log('create database table pairings');

  db.run('CREATE TABLE IF NOT EXISTS Pairings(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, popularity INTEGER DEFAULT 1)', insertData);
};

const insertData = () => {
  console.log('Insert data');
  let pairs = ['USDTBTC', 'ETHBTC'];
  let sql = 'INSERT INTO Pairings(name) VALUES ' + pairs.map(pair => '(?)').join(',') + '';
  console.log(sql);
  db.run(sql, pairs, err => {
    if (err) {
      console.log(err.message);
    }
  });
};

module.exports = db;
