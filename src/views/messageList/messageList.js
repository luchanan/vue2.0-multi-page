import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
require('./scss/messageList.scss')
import myCenter from './messageList.vue'
import store from '../../vuex/store'
var homeVue = new Vue({
    el: '#messageList',
    store,
    template: '<div class="pageview"><my-header></my-header><my></my></div>',
    components: {
        'my-header': myHeader,
        'my': myCenter
    }
})
