const express = require('express');
const router = express.Router();
const knex = require('../knex');


// knex.destroy();

/* GET all BOOK LISTING. */

//TODO add authors to this response
router.get('/', function(request, response, next) {

    let formattedData = [];
    // get book data
    knex('book').select('id','book_title', 'book_genre', 'book_description', 'book_cover_url').then(bookData =>{

        // loop over array of objects & create book object for each book
        bookData.forEach( (book)=>{
            let bookData = {};
            bookData.id = book.id;
            bookData.title = book.book_title;
            bookData.genre = book.book_genre;
            bookData.description =book.book_description;
            bookData.coverPic = book.book_cover_url;
            bookData.authors = [];
            formattedData.push(bookData);
        });


        console.log(formattedData);
       response.json(formattedData);


   });




    // then get author by book id
    router.get('/', function(request, response, next) {

        // get book data
        knex('book').select('book_title', 'book_genre', 'book_description', 'book_cover_url').then(bookData =>{

            // loop over array of objects & create book o

            bookAndAuthorData.authors = [];

            console.log(bookAndAuthorData);
           response.json(bookAndAuthorData);


       });

    knex('author')
    .join('author_book', 'author.id', '=', 'author_book.author_id')
    .select('author.first_name', 'author.last_name')


});




module.exports = router;
