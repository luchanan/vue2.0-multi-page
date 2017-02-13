import * as types from '../mutation-types'
import api from '../api'
const state = {
    loginSuccess: false,
    errorMessage: ''
}

const actions = {
    goLogin: function ({commit}, params) {
        return new Promise((resolve, reject) => {
            api.getLogin(params, function (res) {
                commit(types.LOGIN_IS_SUCCESS, res);
                resolve(res)
            })
        })
    }
}
const getters = {
    getLoginSuccess: state => state.loginSuccess,
    getLoginMessage: state => state.errorMessage
}

const mutations = {
    [types.LOGIN_IS_SUCCESS] (state, res) {
        state.loginSuccess = res.error_code === '0000'
        state.errorMessage = res.error_msg
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
