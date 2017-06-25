自从把个人中心瓜分了个SPA后，发现npm run build的时候，个人中心涉及列表加载的loading组件的style生成不出来，而npm run dev是没有问题

src/views/shoppingCart/shoppingCart.vue
```
<template>
    ...
    <mugen-scroll :handler="fetchData" :should-handle="!loading">
      <list-bottom ref="listBottom"></list-bottom>
    </mugen-scroll>
  </div>
</template>
<script>
import { Vue, $, Common, wx } from 'js/base'
import {mapState} from 'vuex'
import MugenScroll from 'vue-mugen-scroll'
import listBottom from 'components/common/list-bottom.vue'
</script>
```
src/views/shoppingCart/shoppingCart.js
```
import { Vue, $, Common } from 'js/base'
import myHeader from '../../components/my/my-header.vue'
import store from '../../vuex/store'
require('../center/scss/collect.scss')
import shoppingCart from './shoppingCart.vue'
var homeVue = new Vue({
    el: '#shoppingCart',
    store,
    template: '<div class="pageview"><my-header></my-header><shopping-cart></shopping-cart></div>',
    components: {
        'my-header': myHeader,
        'shopping-cart': shoppingCart
    }
})
```
个人中心的route设置
```
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
```
个人中心的src/views/center/pages/collect/index.vue
```
<template>
  <div class="container collect">
    <mugen-scroll :handler="fetchData" :should-handle="!loading">
      <list-bottom ref="listBottom"></list-bottom>
    </mugen-scroll>
  </div>
</template>
<script>
  import { Vue, $, Common, wx } from 'js/base'
  import {mapState} from 'vuex'
  import MugenScroll from 'vue-mugen-scroll'
  import listBottom from 'components/common/list-bottom.vue'
</script>
```
src/components/common/list-bottom.vue
```
<template>
  <div class="list_bottom"><span class="text">{{loadingText}}</span></div>
</template>
<script>
export default {
    data () {
        return {
            loadingText: '数据加载中...',
            finishText: '没有更多数据了',
            errorText: '出错了，请点击重试'
        }
    }
}
</script>
<style lang='scss' scoped>
  // 这里样式没有被个人中心打包
  @import "../../assets/scss/base/necessary.scss";
  .list_bottom{
    padding: px2rem(30) px2rem(24);
    @extend .text_center;
    color:$color_9E9E9E;
    @extend .relative;
    @include px2px(line-height,32);
    @include px2px(font-size,28);
    span{
      &.finished{
        &:before{
          @extend .none;
        }
      }
      &:before{
        content: '';
        @extend .inline_block;
        @include px2px(width,32);
        @include px2px(height,32);
        background: url(../../assets/images/icon/loading.gif) scroll no-repeat center center;
        @extend .contain;
        vertical-align: top;
        margin-right: px2rem(10);
      }
    }
  }
</style>
```
后来样式被打包到shoppingCart.css这里去，而个人中心的没有打包到对应的css文件，可能是配置的问题吧，目前把组件的style样式移到common.scss, 但是有点违背组件化的思想
