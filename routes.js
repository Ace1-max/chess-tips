const express = require('express');
const router = express.Router();
const functions = require('./functions');

router.get('/', (req, res) => {
    res.json(functions.randomTip());
});

router.get('/all', (req, res) => {
    return res.json(functions.allTips());
});

router.get('/total', (req, res) => {
    res.json(functions.numberOfTips());
});

router.get('/category/:category', (req, res) => {
      res.json(functions.tipsByCatehory(req.params.category));
  });

module.exports = router;
