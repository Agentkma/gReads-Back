
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author_book').del()
    .then(function () {
      // Inserts seed entries
      return knex('author_book').insert([
          //python in a
        {id: 1,
        author_id: 1,
        book_id: 1},
        {id: 2,
        author_id: 5,
        book_id: 1},
        {id: 3,
        author_id: 6,
        book_id: 1},

        //think python
        {id: 4,
        author_id: 2,
        book_id: 2},

        //learning react
        {id: 5,
        author_id: 3,
        book_id: 3},

        //YDKNJS:E&B
        {id: 6,
        author_id: 4,
        book_id: 4},

        //YDKNJS:S&C
        {id: 7,
        author_id: 4,
        book_id: 5},

        //YDKNJS:A&P
        {id: 8,
        author_id: 4,
        book_id: 6}

      ]);
    });
};
