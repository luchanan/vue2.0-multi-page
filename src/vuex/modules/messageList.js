import {Common} from 'js/base'
import api from '../api'
import * as types from '../mutation-types'
// 主页
const state = {
    listData: [],
    hasMore: true,
    currentPage: 0,
    totalPage: 0
}

const actions = {
    getMessageList: function ({commit}) {
        if (state.hasMore) {
            commit(types.MESSAGE_LIST_CURRENTPAGE);
            api.getMessageList(state.currentPage, function (res) {
                commit(types.MESSAGE_GET_LIST, res);
            })
        }
    }
}
const getters = {
    getMessageListGet: state => state.listData,
    hasMore: state => state.hasMore
}

const mutations = {
    // es6使用变量作为方法名
    [types.MESSAGE_GET_LIST] (state, res) {
        state.listData = state.listData.concat(res.notification_list)
        state.hasMore = state.currentPage < Common.index2PageCount(res.total_index) === true
    },
    [types.MESSAGE_LIST_CURRENTPAGE] (state) {
        state.currentPage += 1
        state.hasMore = false
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
