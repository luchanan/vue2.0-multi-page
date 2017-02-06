// 主页
import * as types from '../mutation-types'

const state = {
    banner: []
}

const actions = {
    // 获取banner列表
    getBannerList: function ({commit}) {
        debugger
        let dataStr = [{'num': '1'}, {'num': '2'}]
        commit(types.HOME_GET_BANNER_LIST, dataStr);
    }
}
const getters = {
    getBannerList: state => state.banner
}

const mutations = {
    [types.HOME_GET_BANNER_LIST] (state, res) {
        state.banner = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
