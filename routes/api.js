const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Open the SQLite database
const dbPath = path.join(__dirname, '../crypto.db');
const db = new sqlite3.Database(dbPath);

// Route to get top 10 crypto data
router.get('/getTop10', (req, res) => {
    db.all('SELECT * FROM crypto ORDER BY name LIMIT 10', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Database error');
            return;
        }
        res.json(rows);
    });
});

module.exports = router;
