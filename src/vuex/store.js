import Vue from 'vue'
import Vuex from 'vuex'
import messageList from './modules/messageList'
import common from './modules/common'
import my from './modules/my'
import login from './modules/login'
import index from './modules/index'
import collect from './modules/collect'
import destinationIndex from './modules/destinationIndex'
import shoppingCart from './modules/shoppingCart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index,
        common,
        my,
        messageList,
        login,
        collect,
        destinationIndex,
        shoppingCart
    },
    strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})
