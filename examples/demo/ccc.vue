<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      v-bind:key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          price: false
        }, {
          value: '选项3',
          label: '蚵仔煎',
          prices: []
        }, {
          value: '选项4',
          label: '龙须面',
          price: 40
        }, {
          value: '选项5',
          label: '北京烤鸭',
          price: 50
        }],
        value: ''
      }
    }
  }
</script>
