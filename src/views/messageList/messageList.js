import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
require('./scss/messageList.scss')
import myCenter from './messageList.vue'
var homeVue = new Vue({
    el: '#messageList',
    template: '<div class="pageview"><my-header></my-header><my></my></div>',
    components: {
        'my-header': myHeader,
        'my': myCenter
    }
})
