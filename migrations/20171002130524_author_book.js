
exports.up = function(knex, Promise) {

    return knex.schema.createTable('author_book', (table)=>{
        table.increments();
        table.integer("author_id")
        .references("author.id").onDelete("CASCADE");
        table.integer("book_id")
        .references("book.id").onDelete("CASCADE");

    });

};

exports.down = function(knex, Promise) {

return knex.schema.dropTableIfExists('author_book');

};
