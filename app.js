const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Initialize view counter
let viewCounter = 0;

// Increment the view counter on each page load
app.get('/', (req, res) => {
  viewCounter++;
  res.render('index', { views: viewCounter });  // Pass 'views' to EJS
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
