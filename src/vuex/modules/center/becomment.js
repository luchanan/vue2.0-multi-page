import * as types from '../../mutation-types'
import {Common} from 'js/base'
import api from '../../api'
const state = {
    beCommentList: [],
    hasMore: true,
    currentPage: 0
}

const actions = {
    getBeCommentList: function ({commit}) {
        if (state.hasMore) {
            commit(types.BECOMMENT_LIST_CURRENTPAGE);
            return api.getBeCommentList(state.currentPage, function (res) {
                commit(types.BECOMMENT_GET_LIST, res)
            })
        }
    }
}
const mutations = {
    [types.BECOMMENT_GET_LIST] (state, res) {
        console.log(res)
        state.beCommentList = state.beCommentList.concat(res.comment_list)
        state.hasMore = state.currentPage < Common.index2PageCount(res.total_index) === true
    },
    [types.BECOMMENT_LIST_CURRENTPAGE] (state) {
        state.currentPage += 1
        state.hasMore = false
    }
}

export default {
    state,
    actions,
    mutations
}
