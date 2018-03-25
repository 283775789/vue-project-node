const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')

const app = express()
const router = require('./config/routes')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use(bodyParser.json())

/* 静态资源 */
app.use('/js', express.static(path.join(__dirname, 'www/js')))
app.use('/static', express.static(path.join(__dirname, 'www/static')))

app.use('/', router)

app.listen(83, function () {
  console.log('App is running...')
})
