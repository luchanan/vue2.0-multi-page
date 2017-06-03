之前是使用是之间写一个json的文件， 比如删除购物车deleteShopCart.json
```
{
    "error_code": "0000",
    "error_msg": "OK",
    "execute_time": 0.31
}
```
然后在对应的接口使用相对地址来请求这个接口
```
deleteShoppingCartList: function (parmas, cb) {
    axios.get(url + 'order/deleteShopCart.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
        if (res.status >= 200 && res.status < 300) {
            cb(res.data, parmas)
        }
    }).catch((error) => {
        return Promise.reject(error)
    })
}
```
这种方法缺点是数据不够灵活，有可能返回的东西不一定是OK，要使得上面的三个参数返回随机化，那么就需要一些灵活的接口工具，这里使用[mockjs](http://mockjs.com/)

```
npm install mockjs --save
```

src/js新建mock文件夹，里面新建index.js和shopping.js

```
// shopping.js
import Mock from 'mockjs'
const shopping = [
    {
        path: '/shopping/delete',
        data: {
            'error_code|1': ['0000', '1000'],
            'error_msg': function () {
                const errorCode = this.error_code
                let errorMsg = ''
                switch (errorCode) {
                case '0000':
                    errorMsg = '删除成功'
                    break
                case '1000':
                    errorMsg = '删除失败'
                    break
                default:
                    errorMsg = '未知错误'
                }
                return errorMsg
            },
            'execute_time|1-10': 1
        }
    }
]

export default shopping

```

```
//  index.js
import Mock from 'mockjs'
import shopping from 'js/mock/shopping'
function addToMock (api) {
    api.forEach(item => {
        Mock.mock(item.path, item.data)
    })
}
addToMock(shopping)
export default Mock
```

```
base.js 放在这里是对所有符合条件的ajax进行拦截，符合条件将会调用mock定义的数据
import mock from 'js/mock/index'
```

调用：

```
//  api.js
deleteShoppingCartList: function (parmas, cb) {
    axios.get('/shopping/delete').then(function (res) {
        if (res.status >= 200 && res.status < 300) {
            cb(res.data, parmas)
        }
    }).catch((error) => {
        return Promise.reject(error)
    })
}
```

这里点击删除，其实在chrome network看不到接口请求的，因为mockjs已经拦截了ajax请求，转到去调用对应的js方法

