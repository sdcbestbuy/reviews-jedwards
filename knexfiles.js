// var knex = require('knex')({
//     client: 'pg',
//     version: '12.3',
//     connection: {
//       host : '127.0.0.1',
//       user : 'postgres',
//       password : 'Unlucky1!',
//       database : 'allReviews'
//     }
// });

module.exports = {
    development: {
        client: "postgresql",
        connection: "postgres://localhost:5432/allReviews",
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        }
    }

}