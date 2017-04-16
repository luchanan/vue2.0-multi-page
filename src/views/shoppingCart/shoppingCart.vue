<template>
  <div class="container padding_tb_100 collect shoppingcart">
    <ul class="bg_white">
      <li v-for="(item,index) in list">
        <a href="" class="flex padding_24">
          <div class="checkbox_wrap">
            <label class="checkbox_label"><input type="checkbox" name="cb" :checked="item.checked" v-on:change="itemCheckedEvent(item.id)"><span></span></label>
          </div>
          <div class="bg bg_lazyload" lazy=loading><img v-lazy="item.image"></div>
          <div class="flex_item itemInfo flex">
            <h1>{{item.product_name}}</h1>
            <div class="sum">
              <p class="sku">{{item.sku_format_val}}</p>
              <p class="datenum">
                <time class="mr10">{{item.go_time}}</time>
                <span class="num" v-if="item.single_amount > 0"><span class="mr10">数量:{{item.single_amount}}</span></span>
                <span class="num" v-else>
                  <span class="mr10" v-if="item.adult_amount > 0">成人:{{item.adult_amount}}</span>
                  <span class="mr10" v-if="item.child_amount > 0">儿童:{{item.child_amount}}</span>
                  <span class="mr10" v-if="item.baby_amount > 0">婴儿:{{item.baby_amount}}</span>
                </span>
              </p>
            </div>
            <div class="flex bottom">
              <div class="price flex_item">{{item.payment}}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <footer class="action flex bg_white fixed">
      <div class="checkbox_wrap select_all">
        <label class="checkbox_label"><input type="checkbox" name="cb" v-on:change="checkAllEvent" :checked="checkAll"><span></span></label>
      </div>
      <div class="flex_item flex flex_v_center">
        <div class="price flex_item" :style="priceShow">合计:¥<span>{{totalPrice}}</span></div>
        <input type="button" :value="buyBtnCurrentFont" class="btn" :disabled="buyBtnDisabled" @click="submitForm">
      </div>
    </footer>
    <mugen-scroll :handler="fetchData" :should-handle="!loading">
      <list-bottom ref="listBottom"></list-bottom>
    </mugen-scroll>
  </div>
</template>
<script>
import { Vue, $, Common, wx } from 'js/base'
import {mapState} from 'vuex'
import MugenScroll from 'vue-mugen-scroll'
import listBottom from '../../components/common/list-bottom.vue'
export default{
    data () {
        return {
            loading: false,
            first: true
        }
    },
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '购物车',
            left: {className: 'back'},
            'right': {hide: true, userFont: true, font: '编辑', fontClass: 'font'}
        })
    },
    computed: {
        ...mapState({
            isDelete: state => state.shoppingCart.isDelete,
            itemChecked: state => state.shoppingCart.itemChecked,
            checkAll: state => state.shoppingCart.checkAll,
            buyBtnCurrentFont: state => state.shoppingCart.buyBtnCurrentFont,
            priceShow: state => state.shoppingCart.priceShow,
            totalPrice: state => state.shoppingCart.totalPrice,
            buyBtnDisabled: state => state.shoppingCart.buyBtnDisabled,
            checkboxShow: state => state.shoppingCart.shoppingCartCheckbox,
            list: (state, getters) => {
                return state.shoppingCart.shoppingList
            },
            hasMore: (state, getters) => {
                return getters.shoppingCartHasMore
            }
        })
    },
    components: {
        MugenScroll,
        listBottom
    },
    methods: {
        submitForm () {
            if (this.isDelete) {
                this.$store.dispatch('deleteShoppingCartList')
            } else {
                window.location.href = '/'
            }
        },
        checkAllEvent () {
            this.$store.commit('SHOPPINGCART_SELECT_ALL')
        },
        itemCheckedEvent (index) {
            this.$store.commit('SHOPPINGCART_SELECT_ITEM', index)
        },
        fetchData () {
            if (!this.loading) {
                this.loading = true;
                if (!this.hasMore) {
                    this.finishAction()
                    return false
                }
                (async () => {
                    await this.$store.dispatch('getShoppingCartList')
                    if (!this.$store.getters.shoppingCartHasMore) {
                        this.finishAction()
                        return false
                    } else if (this.first && this.$store.getters.shoppingCartHasMore) {
                        this.fetchData()
                        this.first = false
                    }
                })()
                this.loading = false
            }
        },
        finishAction () {
            this.loading = true
            this.$refs.listBottom.$el.children[0].classList.add('finished')
            this.$refs.listBottom.$el.children[0].textContent = this.$refs.listBottom.$data.finishText
        }
    }
}
</script>
