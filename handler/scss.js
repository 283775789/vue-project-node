// 编译SASS变量模块
const compileModule = function (str) {
  const moduleReg = /\/\*\s+-+\s+(.*)\s+-+\s+\*\//
  const obj = {}

  if (moduleReg.test(str)) {
    const matches = moduleReg.exec(str)
    obj.name = matches[1]
    obj.children = []
    return obj
  }

  return false
}

// 编译SASS变量组
const compileGroup = function (str) {
  const groupReg = /\/\*\s+([^-]*)\s+\*\//
  const obj = {}

  if (groupReg.test(str)) {
    const matches = groupReg.exec(str)
    obj.name = matches[1]
    obj.children = []
    return obj
  }

  return false
}

// 编译SASS变量对象
const compileVar = function (str) {
  const varReg = /(\$.*):\s*(.*);\s*\/\/\s*(.*)/
  const obj = {}

  if (varReg.test(str)) {
    const matches = varReg.exec(str)
    obj.varName = matches[1]
    obj.value = matches[2]
    obj.name = matches[3]
    return obj
  }

  return false
}

// 编译SASS模板
const compileTemplate = function (data) {
  const dataRows = data.split('\n')
  const templateObjs = []
  let moduleIndex = -1
  let groupIndex = -1

  for (let i = 0; i < dataRows.length; i++) {
    const varObj = compileVar(dataRows[i])
    if (varObj) {
      if (moduleIndex === -1 || groupIndex === -1) continue
      templateObjs[moduleIndex].children[groupIndex].children.push(varObj)
      continue
    }

    const groupObj = compileGroup(dataRows[i])
    if (groupObj) {
      if (moduleIndex === -1) continue
      templateObjs[moduleIndex].children.push(groupObj)
      groupIndex++
      continue
    }

    const moduleObj = compileModule(dataRows[i])
    if (moduleObj) {
      templateObjs.push(moduleObj)
      moduleIndex++
      groupIndex = -1
    }
  }

  return templateObjs
}

// 编译SASS变量集
const compileVars = function (data) {
  const dataRows = data.split('\n')
  const vars = []

  for (let i = 0; i < dataRows.length(); i++) {
    if (/^\s*\/\//.test(dataRows[i])) {
      break
    } else {
      const varObj = compileVar(dataRows[i])
      if (varObj) {
        vars.push(varObj)
      }
    }
  }

  return vars
}

module.exports = {
  compileTemplate,
  compileVars
}
