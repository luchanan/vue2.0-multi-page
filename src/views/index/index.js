import { Vue, $ } from 'js/base'
import store from '../../vuex/store'
import homeHeader from '../../components/home/home-header.vue'
require('./scss/home.scss')
import homeIndex from './index.vue'
var homeVue = new Vue({
    el: '#home',
    store,
    template: '<div class="pageview"><home-header></home-header><home-index></home-index></div>',
    components: {
        'home-index': homeIndex,
        'home-header': homeHeader
    }
})
