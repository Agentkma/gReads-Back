const express = require('express');
const router = express.Router();
const env = 'development';
const knex = 'knex';
const config = require('../knexfile.js')[env];


// knex.destroy();

/* GET authors. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

module.exports = router;
