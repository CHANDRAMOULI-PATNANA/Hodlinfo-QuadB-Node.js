// server.js
const express = require('express');
const db = require('./database');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/getTop10', (req, res) => {
    db.all(`SELECT * FROM cryptocurrencies LIMIT 4`, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            const formattedRows = rows.map(row => ({
                name: row.name,
                last: row.last.toLocaleString(),
                buy: row.buy.toLocaleString(),
                sell: row.sell.toLocaleString(),
                difference: ((row.buy - row.sell) / row.sell * 100).toFixed(2) + '%',
                savings: ((row.last - row.buy) / row.buy * 100).toFixed(2) + '%'
            }));
            res.json(formattedRows);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
