// fetchData.js
const axios = require('axios');
const db = require('./database');

async function fetchData() {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = response.data;
        const top10 = Object.keys(tickers).slice(0, 10).map(key => tickers[key]);

        db.serialize(() => {
            db.run(`DELETE FROM cryptocurrencies`);
            const stmt = db.prepare(`INSERT INTO cryptocurrencies (name, last, buy, sell, volume, base_unit) VALUES (?, ?, ?, ?, ?, ?)`);
            top10.forEach(crypto => {
                stmt.run(crypto.name, crypto.last, crypto.buy, crypto.sell, crypto.volume, crypto.base_unit);
            });
            stmt.finalize();
        });

        console.log('Data fetched and stored in database');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

setInterval(fetchData, 60000); // Fetch data every minute

fetchData();
