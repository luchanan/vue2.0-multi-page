import * as types from '../mutation-types'
import api from '../api'
const state = {
    getDestinationIndex: []
}

const actions = {
    getDestinationIndex ({commit}) {
        api.getDestinationIndex(function (res) {
            commit(types.DESTINATION_GET_INDEX, res);
        })
    }
}
const getters = {
    getDestinationIndex: state => {
        return state.getDestinationIndex
    }
}
const mutations = {
    [types.DESTINATION_GET_INDEX] (state, res) {
        state.getDestinationIndex = res.country_list
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
