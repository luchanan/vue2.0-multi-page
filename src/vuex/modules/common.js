import * as types from '../mutation-types'
import api from '../api'
const state = {
    headerTitle: '我的',
    left: '',
    right: '',
    type: '',
    shoppingCartNum: 0
}

const actions = {
    setPageInfo ({commit}, settings) {
        commit(types.PAGE_SET_INFO, settings)
    },
    getShoppingCartNum ({commit}) {
        api.getShoppingCartNum(function (res) {
            commit(types.SHOPPING_GET_NUM, res);
        })
    }
}
const getters = {
    getPageInfo: state => state,
    getShoppingCartNum: state => state.shoppingCartNum
}

const mutations = {
    [types.PAGE_SET_INFO] (state, settings) {
        state = Object.assign(state, settings)
        console.log(state)
    },
    [types.SHOPPING_GET_NUM] (state, res) {
        state.shoppingCartNum = res.shop_cart_num
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
