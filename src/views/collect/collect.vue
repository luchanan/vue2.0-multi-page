<template>
  <div class="container padding_tb_120 collect">
    <ul class="bg_white">
      <li v-for="item in list">
        <a href="" class="flex padding_24">
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
  import listBottom from '../../components/common/list-bottom.vue'
  export default{
      data () {
          return {
              loading: false
          }
      },
      created: function () {
          this.$store.dispatch('setPageInfo', {
              headerTitle: '我的收藏',
              left: {className: 'back'},
              'right': {hide: true}
          })
      },
      computed: {
          ...mapState({
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
                  // 第一次无限加载数量比较少(2.3条)且没有第二页数据的时候，需要显示没有数据，加入async await，如果没有加入
                  // 无限加载这个组件一直在可视区域内，且不能滚动请求数据
                  (async () => {
                      await this.$store.dispatch('getCollectList')
                      if (!this.$store.getters.collectHasMore) {
                          this.finishAction()
                          return false
                      }
                  })()
                  setTimeout(() => {
                      this.loading = false
                  }, 0)
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
