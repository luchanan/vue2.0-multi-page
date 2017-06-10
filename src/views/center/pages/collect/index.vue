<template>
  <div class="container collect">
    <ul class="bg_white">
      <li v-for="item in list">
        <a href="" class="flex padding_24">
          <div class="checkbox_wrap" v-show="checkboxShow">
            <label class="checkbox_label"><input type="checkbox" name="cb"><span></span></label>
          </div>
          <div class="bg bg_lazyload" lazy=loading><img v-lazy="item.image"></div>
          <div class="flex_item itemInfo flex">
            <h1>{{item.name}}</h1>
            <div class="flex bottom">
              <div class="price flex_item">{{item.price}}</div>
              <div class="num flex_item text_right">总销量{{item.sale_amount}}份</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <mugen-scroll :handler="fetchData" :should-handle="!loading">
      <list-bottom ref="listBottom"></list-bottom>
    </mugen-scroll>
  </div>
</template>
<script>
  import { Vue, $, Common, wx } from 'js/base'
  import {mapState} from 'vuex'
  import MugenScroll from 'vue-mugen-scroll'
  import listBottom from 'components/common/list-bottom.vue'
  export default{
      data () {
          return {
              loading: false,
              first: true
          }
      },
      created: function () {
          this.$store.dispatch('setPageInfo', {
              headerTitle: '我的收藏',
              left: {className: 'back'},
              'right': {hide: true, userFont: true, font: '編輯', fontClass: 'font'}
          })
      },
      computed: {
          ...mapState({
              checkboxShow: state => state.collect.showCheckbox,
              list: (state, getters) => {
                  return state.collect.collectList
              },
              hasMore: (state, getters) => {
                  return getters.collectHasMore
              }
          })
      },
      components: {
          MugenScroll,
          listBottom
      },
      methods: {
          fetchData () {
              if (!this.loading) {
                  this.loading = true;
                  if (!this.hasMore) {
                      this.finishAction()
                      return false
                  }
                  // 当返回列表个数比较少且没有第二页数据的时候，出现数据加载中字样，应该是没有更多数据
                  // 当返回列表个数比较少且有第二页数据的时候，无限加载组件在可视区域内（不滚动获取第二页的时候），那么它不会获取第二页的数据返回，所以要手动触发第二页的数据
                  (async () => {
                      await this.$store.dispatch('getCollectList')
                      if (!this.$store.getters.collectHasMore) {
                          this.finishAction()
                          return false
                      } else if (this.first && this.$store.getters.collectHasMore) {
                          this.fetchData()
                          this.first = false
                      }
                  })()
                  this.loading = false
              }
          },
          finishAction () {
              this.loading = true
              this.$refs.listBottom.$el.children[0].classList.add('finished')
              this.$refs.listBottom.$el.children[0].textContent = this.$refs.listBottom.$data.finishText
          }
      }
  }
</script>
<style lang="scss">
  @import "../../../../assets/scss/base/necessary.scss";
  $color_e1e9f0:#e1e9f0;
  .collect{
    a{
      color: $color_424242;
    }
    li{
      @include px2px(font-size,30);
      border-bottom: solid 1px $color_E1E9F0;
      &:last-child{
        border-bottom: none;
      }
      h1{
        @include clamp(2);
      }
    }
    .itemInfo{
      /* flex 纵向从上往下排列，用于上面是标题，底部是价格类似情况*/
      justify-content: space-between;
      flex-direction: column;
    }
    .bottom{
      align-items: baseline;
      @include px2px(font-size,24);
      .price{
        @include px2px(font-size,32);
        color:$color_FC5D7B;
        &:before{
          content: '¥';
          display: inline-block;
          margin-right: px2rem(7);
          @include px2px(font-size,22);
          vertical-align: baseline;
        }
      }
      .num{
        color:$color_9E9E9E;
      }
    }
    .bg_lazyload{
      width:px2rem(184);
      height:px2rem(184);
      margin-right: px2rem(20);
      img{
        width:100%;
        height: 100%;
      }
    }
  }
</style>
