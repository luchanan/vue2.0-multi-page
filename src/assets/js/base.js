import Vue from 'vue'
import $ from 'jquery'
import Common from './Common'
import wx from 'wx'
import Mint from 'mint-ui';
import VueI18n from 'vue-i18n'
var vueResource = require('vue-resource')
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(vueResource)
Vue.use(Mint)
Vue.use(VueI18n)
import mock from 'js/mock/index'
import cn from '../locales/zh-CN.json'
import en from '../locales/en-US.json'
const messages = {
    'zh-CN': cn,
    'en-US': en
}
const i18n = new VueI18n({
    locale: 'zh-CN',
    messages
})

// 导入全局css,scss路径在webpack.base.config.js配置了别名
require('scss/common.scss')
import 'mint-ui/lib/style.css';
module.exports = {
    Vue, $, Common, wx, i18n
}
