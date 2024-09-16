// const express = require('express');
// const path = require('path');
// const sqlite3 = require('sqlite3').verbose();
// const app = express();
// const port = 3000;

// // Set Pug as the templating engine
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Use the routes defined in routes/api.js
// const apiRoutes = require('./routes/api');
// app.use('/api', apiRoutes);

// // Route to serve the main page
// app.get('/', (req, res) => {
//     res.render('index'); // Renders views/index.pug
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set Pug as the templating engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in routes/api.js
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Route to serve the main page
app.get('/', (req, res) => {
    res.render('index'); // Renders views/index.pug
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
