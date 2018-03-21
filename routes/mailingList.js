const express = require('express')
const mailingListRoute = express.Router()

mailingListRoute.post('/submit', (req, res) => {
  const { first_name, last_name, email } = req.body
  res.send('hello')
})


module.exports = mailingListRoute
