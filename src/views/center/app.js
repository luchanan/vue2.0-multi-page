import { Vue, VueRouter, i18n } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import store from '../../vuex/store'
import app from './App.vue'
const beComment = resolve => require(['./pages/becomment'], resolve)
const my = resolve => require(['./pages/my'], resolve)
const service = resolve => require(['./pages/service'], resolve)
const setting = resolve => require(['./pages/setting'], resolve)
const message = resolve => require(['./pages/message'], resolve)
const collect = resolve => require(['./pages/collect'], resolve)
import './scss/center.scss'
// 个人中心router
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: my
        },
        {
            path: '/becomment',
            component: beComment,
            meta: {
                requireAuth: true // 进入路由需要登录
            }
        },
        {
            path: '/service',
            component: service
        },
        {
            path: '/setting',
            component: setting
        },
        {
            path: '/message',
            component: message
        },
        {
            path: '/collect',
            component: collect
        }
    ]
})
//  to do登录拦截
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        console.log(store.state.common.token)
        if (store.state.common.token !== null) {
            next()
        } else {
            // token没有进入登录页面
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        // 不需要登录， 一定要，否者进入不了路由
        next()
    }
})
new Vue({
    router,
    store,
    i18n,
    template: '<div class="pageview"><my-header></my-header><app></app></div>',
    components: {
        myHeader,
        app
    }
}).$mount('#app')
