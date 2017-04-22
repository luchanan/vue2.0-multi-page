
### 方法一

```
<li v-for="(item,index) in list">
        <a href="" class="flex padding_24">
          <div class="checkbox_wrap">
            <label class="checkbox_label"><input type="checkbox" name="cb" v-model="itemChecked[index]" v-on:change="itemCheckedEvent(item.id)"><span></span></label>
          </a>
</li>
```
```
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
    isDelete: false
}
// select all event
[types.SHOPPINGCART_SELECT_ALL] (state) {
    state.itemChecked = []
    state.checkAll = !state.checkAll
    if (state.checkAll) {
        state.shoppingList.forEach(function (item, index) {
            state.itemChecked.push(state.shoppingList[index].id);
        })
    }
}
```
但是如果没有checkbox被点击呢？

### 方法二

在返回的数据上加上checked标志

参考

http://stackoverflow.com/questions/33571382/check-all-checkboxes-vuejs
