const express = require('express')
const mailingListRoute = express.Router()
const insertEmail = require('../db/query/insertEmail')

mailingListRoute.post('/submit', (req, res) => {
  const { first_name, last_name, email } = req.body
  const IP = req.connection.loadAddress
  insertEmail(first_name, last_name, email, IP) .then(() => {
  res.status(201).redirect('/')
  })
    .catch(err => {
      console.log('Mailing List: Email Duplicate')
      res.status(400).redirect('/')
    })
})


module.exports = mailingListRoute
