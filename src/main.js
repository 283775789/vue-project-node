// 引入库及应用配置
import Vue from 'vue'
import '@/config/api'
import '@/config/components'
import '@/config/directives'
import '@/config/demo-components.js'
import App from '@/App'
import router from '@/config/router'

import { Button, ColorPicker } from 'element-ui'

Vue.use(Button)
Vue.use(ColorPicker)

// 解决ios click bug
var attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

// 创建Vue应用根实例
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
