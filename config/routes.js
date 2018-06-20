const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const sass = require('node-sass')
const scss = require('../handler/scss')
const markdown = require('../handler/markdown')
const uid = 0

router.get('/', function (req, res, next) {
  res.sendfile(path.join(__dirname, '../www/main.html'))
})

// 处理scss变量模板
router.get('/getScssVars', function (req, res, next) {
  fs.readFile('templates/scss/web-variables.scss', 'utf-8', (e, data) => {
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

// 处理css请求
router.post('/css', function (req, res, next) {
  const scssContent = scss.createScss(req.body) + fs.readFileSync('www/static/css/main.scss')

  sass.render({
    data: scssContent,
    includePaths: ['www/static/css/'],
    outputStyle: 'compressed'
  }, function (e, result) {
    if (e) {
      console.log(e.message)
    } else {
      res.setHeader('content-type', 'text/css')
      res.send(result.css.toString())
    }
  })
})

module.exports = router
