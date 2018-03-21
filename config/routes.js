const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const scss = require('../handler/scss')

router.get('/', function (req, res, next) {
  res.sendfile(path.join(__dirname, '../www/html/main.html'))
})

router.get('/project', function (req, res, next) {
  fs.readFile('template/scss/_variables.scss', 'utf-8', (e, data) => {
    const result = scss.compileTemplate(data)
    res.send(JSON.stringify(result))
  })
})

module.exports = router
