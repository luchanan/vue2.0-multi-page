<template>
  <a href="javascript:void(0)" data-src="http://www.frontsucai.com" class="service">客服帮助</a>
</template>
<script>
export default {
    methods: {
        goTo: function () {
            console.log('b')
        }
    }
}
</script>
<style lang='scss' scoped>
  @import "../../assets/scss/base/necessary.scss";
  .service{
    @include px2px(width,72);
    @include px2px(height,72);
    text-indent: -(999rem);
    background: url(../../assets/images/icon/service.png) scroll no-repeat center center;
    @extend .contain;
    @extend .block;
  }
</style>
