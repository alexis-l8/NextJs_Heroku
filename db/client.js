const config = require('../knexfile.js')
const env = process.env.NODE_ENV
console.log('environment: ', env)

const knex = require('knex')(config[env])

module.exports = knex
