import { Vue, $, Common } from 'js/base'
import store from '../../vuex/store'
import myHeader from '../../components/my/my-header.vue'
require('./scss/login.scss')
import login from './login.vue'
var homeVue = new Vue({
    el: '#login',
    store,
    template: '<div class="pageview"><my-header></my-header><login></login></div>',
    components: {
        'my-header': myHeader,
        'login': login
    }
})
