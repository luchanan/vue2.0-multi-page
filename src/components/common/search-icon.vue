<template>
  <a href="http://www.frontsucai.com" class="search">搜索按钮</a>
</template>
<script>
export default {
    methods: {
        goTo: function () {
            console.log('a')
        }
    }
}
</script>
<style lang='scss' scoped>
  @import "../../assets/scss/base/necessary.scss";
  .search{
    @include px2px(width,72);
    @include px2px(height,72);
    text-indent: -(999rem);
    background: url(../../assets/images/icon/search.png) scroll no-repeat center center;
    @extend .contain;
    @extend .block;
  }
</style>
