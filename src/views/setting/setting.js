import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import store from '../../vuex/store'
require('../my/scss/my.scss')
import setting from './setting.vue'
var homeVue = new Vue({
    el: '#setting',
    store,
    template: '<div class="pageview"><my-header></my-header><setting></setting></div>',
    components: {
        'my-header': myHeader,
        'setting': setting
    }
})
