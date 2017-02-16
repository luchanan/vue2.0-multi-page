<template>
  <footer class="footer">
    <ul class="clearfix">
      <li><a href="index.html" data-font="首页"></a> </li>
      <li><a href="" data-font="目的地" class="destination"></a> </li>
      <li><a href="" data-font="购物车" class="cart" :data-count="getShoppingCartNum"></a></li>
      <li><a href="my.html" data-font="我的" class="my"></a></li>
    </ul>
  </footer>
</template>
<script>
import { Vue, $, Common } from 'js/base'
import {mapGetters} from 'vuex'
export default {
    props: ['footerIndex'],
    mounted: function () {
        let self = this
        document.querySelector('footer').children[0].children[self.footerIndex].children[0].classList.add('on')
        if (Common.isLogin()) {
            this.$store.dispatch('getShoppingCartNum')
            /* document.querySelector('.cart').setAttribute('data-count', this.$store.getters.getShoppingCartNum)
            this.$http.get('../../../static/api/order/countShopCartNum.json').then((response) => {
                console.log(response.data)
                document.querySelector('.cart').setAttribute('data-count', response.data.shop_cart_num)
            }, (response) => {
                console.log(response)
            }) */
        }
    },
    computed: {
        ...mapGetters({
            getShoppingCartNum: 'getShoppingCartNum'
        })
    }
}
</script>
