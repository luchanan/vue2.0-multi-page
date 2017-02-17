<template>
  <div class="container padding_tb_120 my setting">
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">告诉朋友</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">意见反馈</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">退出登录</h1>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Vue, $, Common, wx } from 'js/base'
import {mapGetters} from 'vuex'
import CommonFooter from '../../components/common/footer.vue'
export default{
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '设置',
            left: {className: 'back'},
            'right': {hide: true}
        })
    }
}
</script>
