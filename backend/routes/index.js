var express = require('express');
var router = express.Router();
var offers = require('../offers.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(offers)
});

module.exports = router;
