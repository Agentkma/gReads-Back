const express = require('express');
const router = express.Router();
const env = 'development';
const knex = require('../knex');
const config = require('../knexfile.js')[env];


// knex.destroy();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello kevin');
});

module.exports = router;
