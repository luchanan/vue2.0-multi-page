<template>
  <div class="becomment">
    <ul>
      <li>
        <a href="">
          <h2 class="title">清迈</h2>
          <div class="flex">
            <div class="flex_item"><time>下单日期：2016-09-27 18:22:55</time></div>
            <div class="goComment">去点评<i class="iconfont icon-arrow"></i></div>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <h2 class="title">545</h2>
          <div class="flex">
            <div class="flex_item"><time>下单日期：2016-09-27 18:22:55</time></div>
            <div class="goComment">去点评<i class="iconfont icon-arrow"></i></div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import MugenScroll from 'vue-mugen-scroll'
export default {
    name: 'becomment',
    data: () => ({
        test: '1'
    }),
    mounted () {
        this.setPageInfo()
    },
    methods: {
        setPageInfo () {
            this.$store.dispatch('setPageInfo', {
                headerTitle: '待评价',
                left: {className: 'back'},
                'right': {hide: true}
            })
        }
    }
}
</script>
<style lang="scss">
  @import "../../../../assets/scss/base/necessary.scss";
  @import "../../../../assets/fonts/iconfont.css";
  .becomment{
    background: $white;
    a{
      color: $color_424242;
      padding: px2rem(24);
      border-bottom: solid 1px $color_E1E9F0;
      @include px2px(font-size,24);
    }
    .title{
      padding-top: 0;
      padding-bottom: 0.2666666667rem;
      @include px2px(font-size,30);
    }
    .goComment{
      color: $color_55C1DD;
    }
    time{
      color: $color_9E9E9E;
    }
    .icon-arrow{
      color: $color_9E9E9E;
      @include px2px(font-size,12);
    }
  }
</style>
