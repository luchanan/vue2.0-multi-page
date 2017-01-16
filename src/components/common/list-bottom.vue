<template>
  <div class="list_bottom"><span class="text">数据加载中...</span></div>
</template>
<script>
export default {
    methods: {
    }
}
</script>
<style lang='scss' scoped>
  @import "../../assets/scss/base/necessary.scss";
  .list_bottom{
    padding: px2rem(30) px2rem(24);
    @extend .text_center;
    color:$color_9E9E9E;
    @extend .relative;
    @include px2px(line-height,32);
    @include px2px(font-size,28);
    &:before{
      content: '';
      @extend .inline_block;
      @include px2px(width,32);
      @include px2px(height,32);
      background: url(../../assets/images/icon/loading.gif) scroll no-repeat center center;
      @extend .contain;
      vertical-align: top;
      margin-right: px2rem(10);
    }
  }
</style>
