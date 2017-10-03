const express = require('express');
const router = express.Router();
const knex = require('../knex');


// knex.destroy();

/* GET all BOOK LISTING. */

//TODO add authors to this response
router.get('/', function(request, response, next) {

    // get book data

    knex('book').select('book_title', 'book_genre', 'book_description', 'book_cover_url').then(bookData =>{
        let bookAndAuthorData = bookData;

        console.log(bookAndAuthorData);
       response.json(bookAndAuthorData);
   });




    // then get authors


});




module.exports = router;
