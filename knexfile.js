// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: "desafioconexo",
      user: "root",
      password: "Desafio@157"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'desafioconexo',
      user:     'root',
      password: 'Desafio@157'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'desafioconexo',
      user:     'root',
      password: 'Desafio@157'
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
