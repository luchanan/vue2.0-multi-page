import { Indicator } from 'mint-ui';
import * as types from '../mutation-types'
import api from '../api'
const state = {
    globalLoadinng: true,
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
    },
    [types.SHOPPING_GET_NUM] (state, res) {
        state.shoppingCartNum = res.shop_cart_num
    },
    [types.GLOBAL_SET_LOADINNG] (state, flag) {
        state.globalLoadinng = flag
        if (state.globalLoadinng) {
            Indicator.open()
        } else {
            Indicator.close()
        }
    },
    [types.TOP_RIGHT_CLICK_FONT] (state, params) {
        if (state.right.font === params.afterFont) {
            state.right.font = '编辑'
        } else {
            state.right.font = '完成'
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
