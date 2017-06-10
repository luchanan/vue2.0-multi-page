<template>
  <div class="service">
    <ul>
      <li class="bg_white">
        <h1><span class="font">国内客服</span><span class="work">周一至周日</span><span class="time">09:00-18:00</span></h1>
        <div class="tel"><a href="tel:400-000-0000"><span class="tel_num">400-000-0000</span></a></div>
      </li>
      <li class="bg_white">
        <h1><span class="font">泰国当地客服</span><span class="work">周一至周日</span><span class="time">09:00-18:00</span></h1>
        <div class="tel"><a href="tel:+86-10-00000000"><span class="tel_num font12">+86-10-00000000</span></a></div>
      </li>
    </ul>
    <div class="remark">关于商品、订单和售后，请联系国内客服；如果您在行程中遇到任何问题，请优先联系当地客服</div>
  </div>
</template>
<script>
export default{
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '客服电话',
            left: {className: 'back'},
            'right': {hide: true}
        })
    }
}
</script>
<style lang="scss">
  @import "../../../../assets/scss/base/necessary.scss";
  $color_02d1b1:#02d1b1;
  .service{
    .tel_num{
      @extend .inline_block;
      @include px2px(line-height,90);
      font-size:px2rem(46);
      font-family: arial;
      &:before{
        content: '';
        background:url(images/tel.png) scroll no-repeat center center;
        @include px2px(width,50);
        @include px2px(height,50);
        @extend .contain;
        @extend .inline_block;
        @include px2px(margin-right,20);
        vertical-align:top;
        position:absolute;
        @include px2px(left,42);
        top:50%;
        @include px2px(margin-top,-25);
      }
    }
    .remark{
      @include px2px(font-size,24);
      color:$color_9E9E9E;
      padding:0 px2rem(24);
      line-height:1.5;
    }
    li{
      .work{
        @include px2px(margin-left,33);
      }
      .time{
        @include px2px(margin-left,33);
      }
      @extend .text_center;
      @include px2px(margin-bottom,20);
      h1{
        color:#2c3e50;
        @include px2px(font-size,28);
        @include px2px(line-height,80);
        border-bottom:solid 1px $color_E1E9F0;
      }
      .tel{
        font-size:0;
        @include px2px(padding-top,30);
        @include px2px(padding-bottom,30);
      }
      a{
        color:$white;
        position:relative;
        width:60%;
        background:$color_02d1b1;
        @extend .inline_block;
        padding:0 px2rem(44) 0 px2rem(114);
        @include px2px(border-radius,44);
        text-align:left;
      }
      .font12{
        font-size:px2rem(36);
      }
    }
  }
</style>
