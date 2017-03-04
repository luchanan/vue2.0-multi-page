import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import store from '../../vuex/store'
require('../collect/scss/collect.scss')
import shoppingCart from './shoppingCart.vue'
var homeVue = new Vue({
    el: '#shoppingCart',
    store,
    template: '<div class="pageview"><my-header></my-header><shopping-cart></shopping-cart></div>',
    components: {
        'my-header': myHeader,
        'shopping-cart': shoppingCart
    }
})
