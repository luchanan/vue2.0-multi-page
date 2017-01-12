import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import CommonFooter from '../../components/common/footer.vue'
console.log(Common.isLogin)
require('./scss/my.scss')
import myCenter from './my.vue'
var homeVue = new Vue({
    el: '#my',
    template: '<div class="pageview"><my-header></my-header><my></my><common-footer></common-footer></div>',
    components: {
        'my-header': myHeader,
        'my': myCenter,
        'common-footer': CommonFooter
    }
})
