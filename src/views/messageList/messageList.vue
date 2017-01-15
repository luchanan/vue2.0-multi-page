<template>
  <div class="container padding_t_122 messageList">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <ul class="bg_white">
        <li  <li v-for="list in listData.notification_list">
          <a href="">
            <h1 class="top flex flex_v_center">
              <div class="title flex_item"><span data-count="1">优惠信息</span></div>
              <div class="time"><time>1个月前</time></div>
            </h1>
            <p class="detail">您有1张3.00元的优惠券还有3天就过期啦，请记得使用哦！</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
    data () {
        return {
            listData: [],
            busy: false,
            count: 0
        }
    },
    created () {
        this.loadMore()
    },
    components: {
    },
    methods: {
        loadMore: function () {
            if (!this.busy) {
                this.busy = true;
                this.$http.get('../../../static/api/center/getNotification.json').then((response) => {
                    console.log(response.data)
                    this.listData = response.data
                }, (response) => {
                    console.log(response)
                })
                this.busy = false
            }
        }
    }
}
</script>
