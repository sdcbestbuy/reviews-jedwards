module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        database: 'allReviews',
        user:     'postgres',
        password: 'Unlucky1!'
      }
      },
    staging: {
      client: 'postgresql',
      connection: {
        database: 'allReviews',
        user:     'postgres',
        password: 'Unlucky1!'
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: 'postgresql',
      connection: {
        database: 'allReviews',
        user:     'postgres',
        password: 'Unlucky1!'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };