
exports.up = function(knex, Promise) {

    return knex.schema.createTable('book', (table)=>{
        table.increments();
        table.text('book_title');
        table.text('book_genre');
        table.text('book_description');
        table.text('book_cover_url');
    });

};

exports.down = function(knex, Promise) {

return knex.schema.dropTableIfExists('book');

};
