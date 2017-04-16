/**
 * axios接口大全
 * api配置
 */

import store from './store'
import * as types from './mutation-types'
import axios from 'axios'
var config = require('../../config')
var url = process.env.NODE_ENV !== 'production' ? '/static/api/' : config.build.assetsPublicPath + config.build.assetsSubDirectory + '/api/'
// 请求的时候实现一个loading拦截器,不然每次都要在对应的文件写开loading和关loading
axios.interceptors.request.use(
    config => {
        store.commit(types.GLOBAL_SET_LOADINNG, true)
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)
axios.interceptors.response.use(
    response => {
        store.commit(types.GLOBAL_SET_LOADINNG, false)
        return response;
    },
    err => {
        return Promise.reject(err);
    }
)
export default {
    /**
     * 获取消息列表数据
     */
    getMessageList: function (currentPage, cb) {
        axios.get(url + 'center/getNotification.json?t=' + new Date() * 1 + '&currentPage=' + currentPage + '&callback=?').then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    /**
     * 登录
     */
    getLogin: function (params, cb) {
        axios.get(url + 'user/login.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    /**
     * 获取购物车数量
     */
    getShoppingCartNum: function (cb) {
        axios.get(url + 'order/countShopCartNum.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    /**
     * 获取我的收藏
     */
    getCollectList: function (currentPage, cb) {
        return new Promise((resolve, reject) => {
            axios.get(url + 'center/getFavourite.json?t=' + new Date() * 1 + '&currentPage=' + currentPage + '&callback=?').then(function (res) {
                if (res.status >= 200 && res.status < 300) {
                    cb(res.data)
                    resolve(res.data)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    /**
     * 获取我的购物车列表
     */
    getShoppingCartList: function (currentPage, cb) {
        return new Promise((resolve, reject) => {
            axios.get(url + 'order/shopCart.json?t=' + new Date() * 1 + '&currentPage=' + currentPage + '&callback=?').then(function (res) {
                if (res.status >= 200 && res.status < 300) {
                    cb(res.data)
                    resolve(res.data)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    /**
     * 删除购物车
     */
    deleteShoppingCartList: function (parmas, cb) {
        axios.get(url + 'order/deleteShopCart.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                cb(res.data, parmas)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    /**
     * 获取购物车数量
     */
    getCenterData: function (cb) {
        return new Promise((resolve, reject) => {
            axios.get(url + 'center/getCenter.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
                if (res.status >= 200 && res.status < 300) {
                    cb(res.data)
                    resolve(res.data)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    /**
     * 首页
     */
    getIndexData: function (cb) {
        return new Promise((resolve, reject) => {
            axios.get(url + 'home/homepageV3.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
                if (res.status >= 200 && res.status < 300) {
                    cb(res.data)
                    resolve(res.data)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    /**
     * 获取目的地首页
     */
    getDestinationIndex: function (cb) {
        axios.get(url + 'destination/getDestination.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}
