const config = require('../knexfile.js')
const env = 'development'
console.log('environment: ', process.env.NODE_ENV)

const knex = require('knex')(config[env])

module.exports = knex
