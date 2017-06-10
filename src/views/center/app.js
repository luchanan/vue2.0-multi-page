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
            component: beComment
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
