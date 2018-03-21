const express = require('express')
const path = require('path')

const app = express()
const router = require('./config/routes')

/* 静态资源 */
app.use('/js', express.static(path.join(__dirname, 'www/js')))
app.use('/static', express.static(path.join(__dirname, 'www/static')))

app.use('/', router)

app.listen(83, function () {
  console.log('App is running...')
})
