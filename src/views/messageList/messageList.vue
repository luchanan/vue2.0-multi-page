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
      <list-bottom></list-bottom>
    </mugen-scroll>
  </div>
</template>
<script>
import MugenScroll from 'vue-mugen-scroll'
import listBottom from '../../components/common/list-bottom.vue'
import filters from '../../assets/js/filters'
export default{
    data () {
        return {
            listData: [],
            loading: false,
            count: 1
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
                this.$http.get('../../../static/api/center/getNotification.json').then((response) => {
                    console.log(response.data)
                    setTimeout(() => {
                        for (let i = 0; i < response.data.notification_list.length; i++) {
                            this.listData.push(response.data.notification_list[i])
                        }
                        // 不明白为什么要提到外面
                        this.loading = false
                    }, 5000)
                }, (response) => {
                    console.log(response)
                })
            }
        }
    }
}
</script>
