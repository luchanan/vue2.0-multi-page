import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
require('./scss/my.scss')
import myCenter from './my.vue'
var homeVue = new Vue({
    el: '#my',
    template: '<div class="pageview"><my-header></my-header><my></my></div>',
    components: {
        'my-header': myHeader,
        'my': myCenter
    }
})
