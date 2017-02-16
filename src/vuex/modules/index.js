import * as types from '../mutation-types'
import api from '../api'
const state = {
    indexData: []
}

const actions = {
    getIndexData: function ({commit}) {
        return api.getIndexData(function (res) {
            commit(types.INDEX_GET_DATA, res);
        })
    }
}
const getters = {
    getIndexData: state => state.indexData
}

const mutations = {
    [types.INDEX_GET_DATA] (state, res) {
        state.indexData = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
