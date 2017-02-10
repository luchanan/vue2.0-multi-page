import * as types from '../mutation-types'
const state = {
    messageCount: 0
}

const actions = {
    getMessageCount: function ({commit}, number) {
        commit(types.MESSAGE_GET_COUNTER, number);
    }
}
const getters = {
    getMessageCount: state => state.messageCount
}

const mutations = {
    [types.MESSAGE_GET_COUNTER] (state, number) {
        state.messageCount = number
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
