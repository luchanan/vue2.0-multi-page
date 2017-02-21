import { Vue, $, Common } from 'js/base'
import store from '../../vuex/store'
require('./scss/destinationIndex.scss')
import myHeader from '../../components/my/my-header.vue'
import destinationIndex from './destinationIndex.vue'
var home = new Vue({
    el: '#destinationIndex',
    store,
    template: '<div class="pageview"><my-header></my-header><destination-index></destination-index></div>',
    components: {
        'destinationIndex': destinationIndex,
        'my-header': myHeader
    }
})
