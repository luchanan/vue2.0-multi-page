import * as types from '../mutation-types'
import api from '../api'
const state = {
    messageCount: 0,
    centerData: []
}

const actions = {
    getMessageCount: function ({commit}, number) {
        commit(types.MESSAGE_GET_COUNTER, number)
    },
    gerCenterData: function ({commit}) {
        return api.getCenterData(function (res) {
            commit(types.CENTER_GET_DATA, res)
        })
    }
}
const getters = {
    getMessageCount: state => state.messageCount,
    getCenterData: state => {
        return state.centerData
    }
}

const mutations = {
    [types.MESSAGE_GET_COUNTER] (state, number) {
        state.messageCount = number
    },
    [types.CENTER_GET_DATA] (state, res) {
        state.centerData = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
