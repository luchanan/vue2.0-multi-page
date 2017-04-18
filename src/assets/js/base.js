import Vue from 'vue'
import $ from 'jquery'
import Common from './Common'
import wx from 'wx'
import Mint from 'mint-ui';
var vueResource = require('vue-resource')
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(vueResource)
Vue.use(Mint);
// 导入全局css,scss路径在webpack.base.config.js配置了别名
require('scss/common.scss')
import 'mint-ui/lib/style.css';
module.exports = {
    Vue, $, Common, wx
}
