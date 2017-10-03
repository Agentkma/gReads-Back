require ('dotenv').config();

// Update with your config settings.

module.exports = {

      development: {
      ///postrges database
        client:'pg',
        connection: 'postgres://localhost/gReads-Back',
      },

      production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
      }

    };
