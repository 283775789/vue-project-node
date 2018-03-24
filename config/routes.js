const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const scss = require('../handler/scss')
const markdown = require('../handler/markdown')

router.get('/', function (req, res, next) {
  res.sendfile(path.join(__dirname, '../www/html/main.html'))
})

// 处理scss变量模板
router.get('/getScssVars', function (req, res, next) {
  fs.readFile('templates/scss/_variables.scss', 'utf-8', (e, data) => {
    const result = scss.compileTemplate(data)
    res.send(JSON.stringify(result))
  })
})

// 处理所有markdown文件
router.get('/getMarkdown', function (req, res, next) {
  fs.readFile(`examples/docs/${req.query.name}.md`, 'utf-8', (e, data) => {
    res.send(markdown(data))
  })
})

module.exports = router
