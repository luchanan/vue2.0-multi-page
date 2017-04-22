import { Vue, $, Common, i18n } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import store from '../../vuex/store'
require('../my/scss/my.scss')
import setting from './setting.vue'
var homeVue = new Vue({
    el: '#setting',
    i18n,
    store,
    template: '<div class="pageview"><my-header></my-header><setting></setting></div>',
    components: {
        'my-header': myHeader,
        'setting': setting
    }
})
