const express = require('express');
const router = express.Router();
const knex = require('../knex');


// knex.destroy();

/* GET all BOOK LISTING. */
router.get('/', function(request, response, next) {
    knex('book').then(book =>{
       response.json(book);
   });
});

module.exports = router;
