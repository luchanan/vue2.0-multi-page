import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import store from '../../vuex/store'
require('./scss/my.scss')
import myCenter from './my.vue'
var homeVue = new Vue({
    el: '#my',
    store,
    template: '<div class="pageview"><my-header></my-header><my></my></div>',
    components: {
        'my-header': myHeader,
        'my': myCenter
    }
})
