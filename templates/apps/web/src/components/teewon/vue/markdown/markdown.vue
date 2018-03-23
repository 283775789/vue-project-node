<template>
  <div class="tw-markdown">

  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    name:'twMarkdown',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.$el.innerHTML = marked(content)
    }
  }
</script>
