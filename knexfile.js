module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        host: '127.0.0.1',
        user:     'postgres',
        password: 'V3rdilith1!',
        database: 'allReviews'
      }
      },
    staging: {
      client: 'postgresql',
      connection: {
        host: '127.0.0.1',
        user:     'postgres',
        password: 'V3rdilith1!',
        database: 'allReviews'
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: 'postgresql',
      connection: {
        host: '127.0.0.1',
        user:     'postgres',
        password: 'V3rdilith1!',
        database: 'allReviews'
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
