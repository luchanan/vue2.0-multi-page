import * as types from '../mutation-types'
import {Common} from 'js/base'
import api from '../api'
const state = {
    showCheckbox: false,
    collectList: [],
    hasMore: true,
    currentPage: 0
}

const actions = {
    getCollectList: function ({commit}) {
        if (state.hasMore) {
            commit(types.COLLECT_LIST_CURRENTPAGE);
            return api.getCollectList(state.currentPage, function (res) {
                commit(types.COLLECT_GET_LIST, res)
            })
        }
    }
}
const getters = {
    getCollectList: state => state.collectList,
    collectHasMore: state => state.hasMore,
    getCheckboxShow: state => state.showCheckbox
}

const mutations = {
    [types.COLLECT_GET_LIST] (state, res) {
        state.collectList = state.collectList.concat(res.favourite_list)
        state.hasMore = state.currentPage < Common.index2PageCount(res.total_index) === true
    },
    [types.COLLECT_LIST_CURRENTPAGE] (state) {
        state.currentPage += 1
        state.hasMore = false
    },
    [types.SHOW_CHECKBOX] (state) {
        if (state.showCheckbox) {
            state.showCheckbox = false
        } else {
            state.showCheckbox = true
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
