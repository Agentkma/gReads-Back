const express = require('express');
const router = express.Router();
const knex = require('../knex');

function reformattedBooks (books){

    const reformatted = [];
    //a place to look up book
    const booksById = {};

    books.forEach(book=>{

        if (booksById[book.id]){
            // if book exists, add author
            booksById[book.id].authors.push(
                {
                    first_name : book.first_name,
                    last_name : book.last_name,
                    id: book.author.id
                }
            );
        }
        // if books does not exist in reformatted
        else { booksById[book.id] = {
            book_id : book.id,
            book_title : book.book_title,
            book_genre : book.book_genre,
            book_description: book.book_description,
            book_cover_url: book.book_cover_url,
            authors: [{
                first_name : book.first_name,
                last_name : book.last_name,
                id: book.author.id
            }]
            };
            reformatted.push(booksById[book.id]);
        }
    });
    return reformatted;
}



/* GET all BOOK LISTING. */

//TODO add authors to this response
router.get('/', function(request, response, next) {

    // get book data with authors of each book
    knex('book').select('book.id',
    'book_title',
    'book_genre',
    'book_description',
    'book_cover_url',
    'first_name',
    'last_name',
    'author.id')
    .join('author_book','author_book.book_id', "=",'book.id')
    .join('author','author.id', "=", 'author_book.author_id')
    .then(data =>{
        response.json(data.book.id);

        // const reformatted = reformattedBooks(data);
        //
        // response.json(reformatted);
    });

});



module.exports = router;
