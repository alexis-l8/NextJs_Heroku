const config = require('../knexfile.js')
const env = process.env.NODE_ENV
const url = process.env.URL
console.log('environment: ', env)
console.log('url', url)
const knex = require('knex')(config[env])

module.exports = knex
