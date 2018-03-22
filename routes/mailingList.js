const express = require('express')
const mailingListRoute = express.Router()
const insertEmail = require('../db/query/insertEmail')

mailingListRoute.post('/submit', (req, res) => {
  const { first_name, last_name, email } = req.body
  const ip1 = req.headers["X-Forwarded-For"].split(',').pop()
  const ip2 = req.connection.remoteAddress
  insertEmail(first_name, last_name, email, ip1, ip2) .then(() => {
  res.status(201).redirect('/')
  })
    .catch(err => {
      console.log('Mailing List: Email Duplicate')
      res.status(400).redirect('/')
    })
})


module.exports = mailingListRoute
