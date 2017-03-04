import * as types from '../mutation-types'
import {Common} from 'js/base'
import api from '../api'
const state = {
    shoppingCartCheckbox: false,
    shoppingList: [],
    hasMore: true,
    currentPage: 0
}

const actions = {
    getShoppingCartList: function ({commit}) {
        if (state.hasMore) {
            commit(types.SHOPPINGCART_LIST_CURRENTPAGE);
            return api.getShoppingCartList(state.currentPage, function (res) {
                commit(types.SHOPPINGCART_GET_LIST, res)
            })
        }
    }
}
const getters = {
    getShoppingList: state => state.shoppingList,
    shoppingCartHasMore: state => state.hasMore,
    getShoppingCartCheckboxShow: state => state.shoppingCartCheckbox
}

const mutations = {
    [types.SHOPPINGCART_GET_LIST] (state, res) {
        state.shoppingList = state.shoppingList.concat(res.cart_list)
        state.hasMore = state.currentPage < Common.index2PageCount(res.total_index) === true
    },
    [types.SHOPPINGCART_LIST_CURRENTPAGE] (state) {
        state.currentPage += 1
        state.hasMore = false
    },
    [types.COLLECT_SHOW_CHECKBOX] (state) {
        if (state.shoppingCartCheckbox) {
            state.shoppingCartCheckbox = false
        } else {
            state.shoppingCartCheckbox = true
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
