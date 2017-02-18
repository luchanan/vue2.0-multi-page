<template>
  <div class="container padding_tb_120 my">
    <div class="summary margin_b_20 bg_white">
      <a class="flex flex_v_center info" :href="isLogin?'info.html':'login.html'">
        <div class="photo"><img v-bind:src="isLogin?loginImgSrc[0]:loginImgSrc[1]"></div>
        <div class="flex_item arrow_right">
          <h1 v-if="isLogin">{{my.nickname}}</h1>
          <p v-if="isLogin">查看个人资料</p>
          <p v-if="!isLogin" class="noLogin">未登录</p>
        </div>
      </a>
      <ul class="flex bottom">
        <li class="flex_item"><a href="" :data-count="isLogin?my.coupon_amount:0">优惠券</a></li>
        <li class="flex_item"><a href="" :data-count="isLogin?my.comment_amount:0">我的点评</a></li>
      </ul>
    </div>
    <ul class="flex order margin_b_20 bg_white">
      <li class="flex_item">
        <a href="" data-font="全部订单"><em></em></a>
      </li>
      <li class="flex_item">
        <a href="" data-font="待付款" class="paying"><em :data-count="isLogin?my.need_pay_amount:0"></em></a>
      </li>
      <li class="flex_item">
        <a href="" data-font="待评价" class="comment"><em :data-count="isLogin?my.need_comment_amount:0"></em></a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item"><span class="tb_icon" :data-count="isLogin?my.taobao_order_amount:0">淘宝订单</span></h1>
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
        <a href="collect.html" class="arrow_right flex flex_v_center collect">
          <h1 class="flex_item">我的收藏</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="service.html" class="arrow_right flex flex_v_center service">
          <h1 class="flex_item">客服电话</h1>
        </a>
      </li>
    </ul>
    <common-footer footerIndex="3"></common-footer>
  </div>
</template>
<script>
import { Vue, $, Common, wx } from 'js/base'
import {mapGetters} from 'vuex'
import CommonFooter from '../../components/common/footer.vue'
export default{
    data () {
        return {
            isLogin: Common.isLogin(),
            loginImgSrc: [require('./images/logined.jpg'), require('./images/nologin.jpg')]
        }
    },
    mounted: function () {
        if (this.isLogin) {
            (async () => {
                let result = await this.$store.dispatch('gerCenterData')
                this.$store.dispatch('getMessageCount', result.notification_amount)
            })()
            /* this.$http.get('../../../static/api/center/getCenter.json').then((response) => {
                response.data['isLogin'] = Common.isLogin()
                console.log(response.data)
                this.my = response.data
                // 触发getMessageCount事件，并且传递参数
                this.$store.dispatch('getMessageCount', response.data.notification_amount)
            }, (response) => {
                console.log(response)
            }) */
        }
    },
    computed: {
        ...mapGetters({
            my: 'getCenterData'
        })
    },
    components: {
        'common-footer': CommonFooter
    }
}
</script>
