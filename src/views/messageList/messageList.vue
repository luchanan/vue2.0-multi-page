<template>
  <div class="container padding_t_122 messageList">
    <ul class="bg_white">
      <li v-for="list in listData">
        <a href="">
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
import { Vue, $, Common } from 'js/base'
import MugenScroll from 'vue-mugen-scroll'
import listBottom from '../../components/common/list-bottom.vue'
import filters from '../../assets/js/filters'
export default{
    data () {
        return {
            listData: [],
            loading: false,
            currentPageCount: 1,
            pageCount: 0
        }
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
                if (this.currentPageCount > this.pageCount && this.pageCount !== 0) {
                    this.loading = true
                    console.log(this.$refs.listBottom.$el.children)
                    this.$refs.listBottom.$el.children.textContent = '没有更多数据了'
                    return false
                }
                this.$http.get('../../../static/api/center/getNotification.json').then((response) => {
                    console.log(response.data)
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
        }
    }
}
</script>
