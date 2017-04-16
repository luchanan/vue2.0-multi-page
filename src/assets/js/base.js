import Vue from 'vue'
import $ from 'jquery'
import Common from './Common'
import wx from 'wx'
var vueResource = require('vue-resource')
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(vueResource)
// 导入全局css,scss路径在webpack.base.config.js配置了别名
require('scss/common.scss')
module.exports = {
    Vue, $, Common, wx
}
