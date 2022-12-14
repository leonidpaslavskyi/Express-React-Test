const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/api')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

app.use((err, req, res, next) => {
  res.status(500).json(err);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})