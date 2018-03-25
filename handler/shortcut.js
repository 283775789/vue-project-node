// 生成快捷输入键
const fs = require('fs')
const demoDir = 'examples/demo/'
const shortcuts = {}

fs.readdir(demoDir, function (e, files) {
  files.forEach((filename, index) => {
    let n = 1

    const data = fs.readFileSync(demoDir + filename, 'utf-8')
    const prefix = 'tw-' + filename.replace(/.vue$/, '')

    let result = data.replace(/(^<\/?template.*\n)|(^\s*name:.*\n)|(^\s\s)/gm, '')

    // 光标定位到标签内容区
    result = result.replace(/>([^<>\n]+?)</gm, function (m, p1) {
      return `>\${${n++}:${p1}}<`
    })

    // 光标定位到标签属性值
    result = result.replace(/(=\s*?")(.*?)"/gm, function (m, p1, p2) {
      return `${p1}\${${n++}:${p2}}"`
    })

    // 光标定位到键值对
    result = result.replace(/(\s+)([\w]+)(:\s*'?)([^,'\n]*)/gm, function (m, p1, p2, p3, p4) {
      return `${p1}\${${n++}:${p2}}${p3}\${${n++}:${p4}}`
    })

    shortcuts[prefix] = {
      'prefix': prefix,
      'body': [result]
    }
  })

  fs.writeFile('examples/config/vue-html.json', JSON.stringify(shortcuts), 'utf-8', function (e) {
    if (e) {
      console.log(e)
    }
  })
})
