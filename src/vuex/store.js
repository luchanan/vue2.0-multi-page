import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    },
    strict: process.env.NODE_ENV !== 'production'
})
