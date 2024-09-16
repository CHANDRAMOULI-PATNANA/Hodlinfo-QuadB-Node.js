const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('crypto.db');

async function fetchData() {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const top10 = Object.values(response.data.tickers)
      .slice(0, 10)
      .map(ticker => ({
        name: ticker.symbol,
        last: ticker.last,
        buy: ticker.buy,
        sell: ticker.sell,
        volume: ticker.volume,
        base_unit: ticker.base_unit
      }));

    db.serialize(() => {
      db.run('DELETE FROM crypto');
      const stmt = db.prepare('INSERT INTO crypto (name, last, buy, sell, volume, base_unit) VALUES (?, ?, ?, ?, ?, ?)');

      top10.forEach(item => {
        stmt.run(item.name, item.last, item.buy, item.sell, item.volume, item.base_unit);
      });

      stmt.finalize();
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    db.close();
  }
}

fetchData();
