// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

// Download resume endpoint
router.get('/resume', (req, res) => {
  const file = `${__dirname}/../resume.pdf`;
  res.download(file);
});

module.exports = router;
