// 主页
import * as types from '../mutation-types'
const state = {
    banner: [],
    banner1: []
}

const actions = {
    // 获取banner列表
    getMessageList: function ({commit}) {
        let dataStr = [{'num': '1'}, {'num': '2'}]
        console.log('b')
        console.log(state)
        commit(types.MESSAGE_GET_LIST, dataStr);
    }
}
const getters = {
    getMessageListGet: state => state.banner
}

const mutations = {
    // es6使用变量作为方法名
    [types.MESSAGE_GET_LIST] (state, res) {
        console.log('c')
        console.log(res)
        state.banner = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
