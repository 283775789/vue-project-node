// 注册通用的全局组件
import Vue from 'vue'
import Footer from '@comps/footer/footer'
import Poppane from '@comps/poppane/poppane'
import Collapse from '@comps/collapse/collapse'
import CollapseGroup from '@comps/collapse/collapse-group'
import List from '@comps/list/list'
import Select from '@comps/select/select'
import SelectGroup from '@comps/select/select-group'
import Draggrid from '@comps/draggrid/draggrid'
import Dragcol from '@comps/draggrid/draggrid-col'

const components = [
  Footer,
  Poppane,
  Collapse,
  CollapseGroup,
  List,
  Select,
  SelectGroup,
  Draggrid,
  Dragcol
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
