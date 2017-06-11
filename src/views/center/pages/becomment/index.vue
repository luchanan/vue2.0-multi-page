<template>
  <div>
    <ul class="becomment">
      <li v-for="item in list" :key="item">
        <a :href="item.id">
          <h2 class="title">{{item.product_name}}</h2>
          <div class="flex">
            <div class="flex_item"><time>下单日期：{{item.order_date}}</time></div>
            <div class="goComment">去点评<i class="iconfont icon-arrow"></i></div>
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
import {mapState} from 'vuex'
import MugenScroll from 'vue-mugen-scroll'
import listBottom from 'components/common/list-bottom.vue'
export default {
    name: 'becomment',
    data: () => ({
        loading: false,
        first: true
    }),
    mounted () {
        this.setPageInfo()
    },
    components: {
        MugenScroll,
        listBottom
    },
    computed: {
        ...mapState({
            list: (state, getters) => {
                return state.beComment.beCommentList
            },
            hasMore: (state, getters) => {
                return state.beComment.hasMore
            }
        })
    },
    methods: {
        setPageInfo () {
            this.$store.dispatch('setPageInfo', {
                headerTitle: '待评价',
                left: {className: 'back'},
                'right': {hide: true}
            })
        },
        fetchData () {
            if (!this.loading) {
                this.loading = true;
                if (!this.hasMore) {
                    this.finishAction()
                    return false
                }
                (async () => {
                    await this.$store.dispatch('getBeCommentList')
                    if (!this.$store.state.beComment.hasMore) {
                        this.finishAction()
                        return false
                    } else if (this.first && this.$store.state.beComment.hasMore) {
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
      margin-bottom:px2rem(10);
      @include px2px(font-size,30);
      @include clamp(2);
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
