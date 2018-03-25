// 编译markdown文件的demo内容
const fs = require('fs')

module.exports = function (data) {
  if (!data) return

  const dataRow = data.split('\n')

  for (let i = 0; i < dataRow.length; i++) {
    const demoReg = /^\{\{(.*)\}\}/

    if (demoReg.test(dataRow[i])) {
      const matches = demoReg.exec(dataRow[i])

      const code = fs.readFileSync(`examples/demo/${matches[1].replace('tw-', '')}.vue`, 'utf-8')
      dataRow[i] = `<div class="tw-dropdown-demo"><${matches[1]} /></div>\n<span class="tw-markdown-shortcut"><span>快捷键 | </span>${matches[1]}</span>\n\`\`\`xml\n${code}\`\`\``
    }
  }

  return dataRow.join('\n')
}
