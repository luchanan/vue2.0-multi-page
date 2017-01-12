<template>
  <div class="container padding_tb_120 my">
    <div class="summary margin_b_20 bg_white">
      <a class="flex flex_v_center info" href="#">
        <div class="photo"><img src="./images/logined.jpg"></div>
        <div class="flex_item arrow_right">
          <h1>无尽的故事</h1>
          <p>查看个人资料</p>
        </div>
      </a>
      <ul class="flex bottom">
        <li class="flex_item"><a href="" data-count="1">优惠券</a></li>
        <li class="flex_item"><a href="" data-count="1">我的点评</a></li>
      </ul>
    </div>
    <ul class="flex order margin_b_20 bg_white">
      <li class="flex_item">
        <a href="" data-font="全部订单"><em></em></a>
      </li>
      <li class="flex_item">
        <a href="" data-font="待付款" class="paying"><em data-count="1"></em></a>
      </li>
      <li class="flex_item">
        <a href="" data-font="待评价" class="comment"><em data-count="0"></em></a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">淘宝订单</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center traveller">
          <h1 class="flex_item">常用出行人</h1>
        </a>
      </li>
      <li>
        <a href="" class="arrow_right flex flex_v_center hotel">
          <h1 class="flex_item">常住酒店</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center collect">
          <h1 class="flex_item">我的收藏</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center service">
          <h1 class="flex_item">客服电话</h1>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
    data () {
        return {
            indexData: []
        }
    },
    mounted: function () {
        this.$http.get('../../../static/api/center/getCenter.json').then((response) => {
            // indexData，然后html就可以遍历
            console.log(response.data)
            this.indexData = response.data
        }, (response) => {
            console.log(response)
        })
    },
    components: {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
</style>"
