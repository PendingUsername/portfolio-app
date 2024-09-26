// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set EJS as template engine
app.set('view engine', 'ejs');

// Static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Portfolio app running at http://localhost:${port}`);
});
