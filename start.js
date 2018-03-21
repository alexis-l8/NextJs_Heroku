const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
const server = require('./routes/index.js')

app.prepare()
.then(server(handle))
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
