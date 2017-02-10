import * as types from '../mutation-types'
const state = {
    headerTitle: '我的',
    left: '',
    right: ''
}

const actions = {
    setPageInfo ({commit}, settings) {
        commit(types.PAGE_SET_INFO, settings)
    }
}
const getters = {
    getPageInfo: state => state
}

const mutations = {
    [types.PAGE_SET_INFO] (state, settings) {
        state = Object.assign(state, settings)
        console.log(state)
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
