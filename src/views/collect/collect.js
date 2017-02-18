import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import store from '../../vuex/store'
require('./scss/collect.scss')
import collect from './collect.vue'
var homeVue = new Vue({
    el: '#collect',
    store,
    template: '<div class="pageview"><my-header></my-header><collect></collect></div>',
    components: {
        'my-header': myHeader,
        'collect': collect
    }
})
