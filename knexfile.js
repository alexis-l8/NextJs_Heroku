let config;

if ( process.env.NODE_ENV === 'production' ) {
  config = './config.env';
} else {
  config = './config-dev.env';
}

require('env2')(config)

const knexfile = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    }
  },
}

module.exports = knexfile
