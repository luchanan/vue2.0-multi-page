import * as types from '../mutation-types'
const state = {
    headerTitle: '我的'
}

const actions = {
    setPageInfo ({commit}, settings) {
        commit(types.PAGE_SET_INFO, settings)
    }
}
const getters = {
    setPageInfo: state => state,
    headerTitle: state => state.headerTitle
}

const mutations = {
    [types.PAGE_SET_INFO] (state, settings) {
        state.headerTitle = settings.headerTitle
        state = Object.assign(state, settings)
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
