require('dotenv').config()

const express = require('express')
const { join } = require('path')
const db = require('./config/index.js')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

async function init() {
  await require('./config').sync()
  app.listen(process.env.PORT || 3000)
}

init()
