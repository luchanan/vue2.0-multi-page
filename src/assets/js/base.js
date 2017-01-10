import Vue from 'vue'
import $ from 'jquery'
import C from './config'
var vueResource = require('vue-resource')
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(vueResource)
// 导入全局的UI框架
require('scss/common.scss')
module.exports = {
    Vue, $, C
}
