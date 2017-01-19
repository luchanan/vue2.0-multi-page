import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
require('./scss/service.scss')
import myCenter from './service.vue'
var homeVue = new Vue({
    el: '#service',
    template: '<div class="pageview"><my-header></my-header><my></my></div>',
    components: {
        'my-header': myHeader,
        'my': myCenter
    }
})
