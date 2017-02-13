import Vue from 'vue'
import Vuex from 'vuex'
import messageList from './modules/messageList'
import common from './modules/common'
import my from './modules/my'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common,
        my,
        messageList,
        login
    },
    strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})
