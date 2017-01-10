<template>
  <header class="padding_24 clearfix">
    <search-icon class="float_left"></search-icon>
    <service-icon class="float_right"></service-icon>
  </header>
</template>

<script>
  import service from '../common/service-icon.vue'
  import search from '../common/search-icon.vue'
  export default {
      data () {
          return {
              msg: '头部'
          }
      },

      components: {
          'service-icon': service,
          'search-icon': search
      }
  }
</script>

<style lang='scss' scoped>
  header{
    position: fixed;
    width: 100%;
    left:0;
    z-index: 3;
  }
</style>
