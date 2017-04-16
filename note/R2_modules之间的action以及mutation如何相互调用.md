#### 在.vue可以通过，来获取store.js定义的所有module的actions，mutations等

```javascript
<script>
import {mapState} from 'vuex'
...
// 调用module/common.js的actions
created: function () {
    this.$store.dispatch('setPageInfo', {
        headerTitle: '购物车',
        left: {className: 'back'},
        'right': {hide: true, userFont: true, font: '编辑', fontClass: 'font'}
    })
}
</script>
```
### 一：js文件调用其他module中的mutation方法

#### 想在api.js在axios添加一个loading拦截器,调用mudule/common.js的方法

在mudule/common.js定义mutations

```javascript
const mutations = {
    // 全局loading
    [types.GLOBAL_SET_LOADINNG] (state, flag) {
        state.globalLoadinng = flag
        if (state.globalLoadinng) {
            Indicator.open()//element中mint-ui的Indicator
        } else {
            Indicator.close()
        }
    }
}
```

api.js

```javascript
import store from './store'//首先要引入这个store
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
        store.commit(types.GLOBAL_SET_LOADINNG, false)// 调用mudule/common.js中mutation方法
        return response;
    },
    err => {
        return Promise.reject(err);
    }
)

```

### 二：js文件中mutation调用其他module中的mutation方法

比如shoppingCart.js中某个mutation调用common.js中mutation方法

api.js
引入了

```javascript
import store from './store'
```
可以在module下的js来来调用action或者mutation

```javascript
const mutations = {
    [types.SHOW_CHECKBOX] (state) {
        if (state.shoppingCartCheckbox) {
            state.shoppingCartCheckbox = false
            store.commit('TOP_RIGHT_CLICK', {font: '完成'})//来自mudule/common.js
        } else {
            state.shoppingCartCheckbox = true
        }
    }
}
```

### 三：js文件中action调用其他文件的action方法

```
// import store from './store'不用引入
const actions = {
    getShoppingCartList: function ({commit}) {
        if (state.hasMore) {
            commit(types.LOADING);//来自common.js 的action方法
            return api.getShoppingCartList(state.currentPage, function (res) {
                commit(types.SHOPPINGCART_GET_LIST, res)
            })
        }
    }
}
```




