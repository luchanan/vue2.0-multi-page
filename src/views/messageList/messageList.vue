<template>
  <div class="container padding_t_122 messageList">
    <ul>
      <li v-for='item in banner'>{{item}}</li>
    </ul>
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
import { Vue, $, Common, wx } from 'js/base'
import MugenScroll from 'vue-mugen-scroll'
import listBottom from '../../components/common/list-bottom.vue'
import filters from '../../assets/js/filters'
import {mapGetters} from 'vuex'
export default{
    data () {
        return {
            listData: [],
            loading: false,
            currentPageCount: 1,
            pageCount: 0
        }
    },
    mounted: function () {
        this.$bus.emit('setCenterHeader', {title: '消息中心', left: {className: 'back'}, 'right': {hide: true}})
    },
    created: function () {
        if (this.banner.length === 0) {
            this.$store.dispatch('getBannerList')
        }
    },
    computed: mapGetters({
        banner: 'getBannerList'
    }),
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
                if (this.currentPageCount > this.pageCount && this.pageCount !== 0) {
                    this.finishAction()
                    return false
                }
                this.$http.get('../../../static/api/center/getNotification.json').then((response) => {
                    console.log(response.body)
                    if (response.body.notification_list.length === 0 || response.body.total_index === 0) {
                        this.finishAction()
                        return false
                    }
                    setTimeout(() => {
                        for (let i = 0; i < response.data.notification_list.length; i++) {
                            this.listData.push(response.data.notification_list[i])
                        }
                        this.loading = false // 不明白为什么要提到外面,不提到这里会不断请求不止
                        this.pageCount = Common.index2PageCount(response.data.total_index)
                        this.currentPageCount++
                    }, 3000)
                }, (response) => {
                    console.log(response)
                })
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
