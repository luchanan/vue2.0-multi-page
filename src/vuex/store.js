import Vue from 'vue'
import Vuex from 'vuex'
import messageList from './modules/messageList'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        messageList
    },
    strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})
