import api from '../api'
// 主页
import * as types from '../mutation-types'
const state = {
    listData: []
}

const actions = {
    // 获取banner列表
    getMessageList: function ({commit}) {
        api.getMessageList(function (res) {
            commit(types.MESSAGE_GET_LIST, res);
        })
    }
}
const getters = {
    getMessageListGet: state => state.listData
}

const mutations = {
    // es6使用变量作为方法名
    [types.MESSAGE_GET_LIST] (state, res) {
        state.listData = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
