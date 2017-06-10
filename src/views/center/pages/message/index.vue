<template>
  <div class="container messageList">
    <ul class="bg_white">
      <li v-for="list in listData">
        <a href="javascript:void(0)">
          <h1 class="top flex flex_v_center">
            <div class="title flex_item"><span data-count="1">{{list.title}}</span></div>
            <div class="time"><time>{{list.create_time | toFriendlyTime}}</time></div>
          </h1>
          <p class="detail">{{list.content}}</p>
        </a>
      </li>
    </ul>
    <mugen-scroll :handler="fetchData" :should-handle="!loading">
      <list-bottom ref="listBottom"></list-bottom>
    </mugen-scroll>
  </div>
</template>
<script>
import {Common} from 'js/base'
import MugenScroll from 'vue-mugen-scroll'
import listBottom from 'components/common/list-bottom.vue'
import filters from 'assets/js/filters'
import {mapGetters} from 'vuex'
export default{
    data () {
        return {
            loading: false
        }
    },
    mounted: function () {
        // this.$bus.emit('setCenterHeader', {title: '消息中心', left: {className: 'back'}, 'right': {hide: true}})
        this.$store.dispatch('setPageInfo', {
            headerTitle: '消息中心',
            left: {className: 'back'},
            'right': {hide: true}
        })
    },
    computed: {
        ...mapGetters({
            // 在 mapState 里面我们既可以调用 store 的 state ，也可以调用 store 的 getters
            listData: 'getMessageListGet',
            hasMore: 'hasMore'
        })
    },
    components: {
        MugenScroll,
        listBottom
    },
    filters: {
        toFriendlyTime: filters.toFriendlyTime// 注册filters
    },
    methods: {
        fetchData () {
            if (!this.loading) {
                this.loading = true;
                if (!this.hasMore) {
                    this.finishAction()
                    return false
                }
                this.$store.dispatch('getMessageList')
                setTimeout(() => {
                    this.loading = false // 如果设置setTimeout超时时间，那么有可能导致数据更新了，但是视图不更新数据的问题
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
<style lang="scss">
  @import "../../../../assets/scss/base/necessary.scss";
  .messageList {
    li {
      padding-left: px2rem(24);
      &:last-child {
        a {
          border-bottom: none;
        }
      }
    }
    a {
      @include px2px(font-size, 30);
      color: $color_424242;
      padding: px2rem(20) px2rem(24) px2rem(20) 0;
      border-bottom: solid 1px $color_E1E9F0;
      .time {
        @include px2px(font-size, 22);
        color: $color_9E9E9E;
      }
      .detail {
        padding-top: px2rem(10);
      }
      .title {
        span {
          @extend .relative;
          &[data-count]:after {
            content: attr(data-count);
            position: absolute;
            right: px2rem(-12);
            top: px2rem(-6);
            font-size: 9px;
            width: px2rem(18);
            height: px2rem(18);
            line-height: px2rem(18);
            text-align: center;
            text-indent: -9999em;
            border-radius: 50%;
            color: #ffffff;
            background: $color_FC5D7B;
          }
          &[data-count='0']:after {
            display: none;
          }
        }
      }
    }
  }
</style>
