import store from '../store'
import * as types from '../mutation-types'
import {Common, Vue} from 'js/base'
import api from '../api'
import { Toast, MessageBox } from 'mint-ui';
const buyBtnFont = {go: '去结算', delete: '删除'}
const state = {
    shoppingCartCheckbox: false,
    shoppingList: [],
    hasMore: true,
    currentPage: 0,
    totalPrice: 0,
    buyBtnDisabled: true,
    buyBtnCurrentFont: buyBtnFont.go,
    priceShow: {visibility: 'visible'},
    checkAll: false,
    itemChecked: [],
    isDelete: false,
    deleteIDs: []
}

const actions = {
    getShoppingCartList: function ({commit}) {
        if (state.hasMore) {
            commit(types.SHOPPINGCART_LIST_CURRENTPAGE);
            return api.getShoppingCartList(state.currentPage, function (res) {
                commit(types.SHOPPINGCART_GET_LIST, res)
            })
        }
    },
    deleteShoppingCartList: function ({commit, state}) {
        var ids = state.deleteIDs
        MessageBox({
            title: '',
            showCancelButton: true,
            message: '确定删除这' + ids.length + '个商品?',
            callback: function (action) {
                if (action === 'confirm') {
                    api.deleteShoppingCartList(state.deleteIDs, function (res) {
                        // commit只能接受两个参数，想传多个参数的话，可以在第二个参数以array or object的方式传入
                        commit(types.SHOPPINGCART_DELETE_SELECT, res);
                    })
                }
            }
        })
    }
}
const getters = {
    getShoppingList: state => state.shoppingList,
    shoppingCartHasMore: state => state.hasMore
}

const mutations = {
    [types.SHOPPINGCART_DELETE_ARRAY] (state) {
        let len = state.shoppingList.length
        let deleteID = []
        // 找出checked为true的数组
        let filter = state.shoppingList.filter(function (item, index, array) {
            return item.checked === true
        })
        filter.forEach(function (item, index, array) {
            deleteID.push(item.id)
        })
        state.deleteIDs = deleteID
    },
    [types.SHOPPINGCART_DELETE_SELECT] (state, res) {
        state.deleteIDs.forEach(function (item, index, array) {
            let cIndex = state.shoppingList.map(x => x.id).indexOf(item)
            state.shoppingList.splice(cIndex, 1)
            Toast({
                message: '删除成功',
                duration: 3000
            });
        })
    },
    [types.SHOPPINGCART_SELECT_ITEM] (state, id) {
        var len = state.shoppingList.length
        var index = state.shoppingList.findIndex(_item => _item.id === id)
        if (index > -1) {
            state.shoppingList[index]['checked'] = !state.shoppingList[index]['checked']
        }
        // 是否全部选中
        var isAllSelected = state.shoppingList.every(function (item, index) {
            return item.checked;
        })
        state.checkAll = isAllSelected === true;
        // 有一个被选中
        var oneSelected = state.shoppingList.some(function (item, index) {
            return item.checked;
        });
        state.buyBtnDisabled = oneSelected === false;
        store.commit(types.SHOPPINGCART_DELETE_ARRAY);
        store.commit('CALCULATE_TOTAL_PRICE')
    },
    [types.CALCULATE_TOTAL_PRICE] (state) {
        let totalPrice = 0
        state.deleteIDs.forEach(function (item, index, array) {
            let cIndex = state.shoppingList.map(x => x.id).indexOf(item)
            totalPrice += Number(state.shoppingList[cIndex].payment)
        })
        state.totalPrice = totalPrice
    },
    [types.SHOPPINGCART_SELECT_ALL] (state) {
        state.shoppingList.forEach(function (item) {
            item.checked = !state.checkAll
        });
        state.checkAll = !state.checkAll
        store.commit(types.SHOPPINGCART_DELETE_ARRAY)
        store.commit('CALCULATE_TOTAL_PRICE')
        // 没有一个被选中
        state.buyBtnDisabled = state.checkAll === false;
    },
    [types.SHOPPINGCART_GET_LIST] (state, res) {
        res.cart_list.forEach(function (item, index, array) {
            item['checked'] = false // 为每个返回的数据加上一个checked标志
        })
        state.shoppingList = state.shoppingList.concat(res.cart_list)
        state.hasMore = state.currentPage < Common.index2PageCount(res.total_index) === true
    },
    [types.SHOPPINGCART_LIST_CURRENTPAGE] (state) {
        state.currentPage += 1
        state.hasMore = false
    },
    [types.SHOW_CHECKBOX] (state) {
        store.commit('TOP_RIGHT_CLICK_FONT', {afterFont: '完成'})
        if (state.shoppingCartCheckbox) {
            state.shoppingCartCheckbox = false
            state.priceShow = {visibility: 'visible'}
            state.buyBtnDisabled = true
            state.buyBtnCurrentFont = buyBtnFont.go
            state.isDelete = false
            // 有一个被选中
            var oneSelected = state.shoppingList.some(function (item, index) {
                return item.checked;
            });
            state.buyBtnDisabled = oneSelected === false;
        } else {
            state.shoppingCartCheckbox = true
            state.priceShow = {visibility: 'hidden'}
            state.buyBtnDisabled = false
            state.buyBtnCurrentFont = buyBtnFont.delete
            state.isDelete = true
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
