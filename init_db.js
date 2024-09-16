// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./crypto.db');

// db.serialize(() => {
//     db.run("CREATE TABLE IF NOT EXISTS crypto (name TEXT, last REAL, buy REAL, sell REAL, volume REAL, base_unit TEXT)");
// });

// db.close();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('crypto.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS crypto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    last REAL,
    buy REAL,
    sell REAL,
    volume REAL,
    base_unit TEXT
  )`);
});

db.close();
