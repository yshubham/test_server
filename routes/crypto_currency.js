const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/info',  (req, res) => res.render('currency'));

module.exports = router ;