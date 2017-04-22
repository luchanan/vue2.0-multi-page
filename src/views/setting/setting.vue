<template>
  <div class="container padding_tb_120 my setting">
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">{{ $t("setting.share") }}</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">{{ $t("setting.advice") }}</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white" @click="selectLanguage">
      <li>
        <a href="javascript:;" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">{{ $t("setting.changeLanguage") }}</h1>
        </a>
      </li>
    </ul>
    <ul class="item margin_b_20 bg_white">
      <li>
        <a href="" class="arrow_right flex flex_v_center">
          <h1 class="flex_item">{{ $t("setting.logout") }}</h1>
        </a>
      </li>
    </ul>
    <mt-actionsheet
      :actions="actions"
      v-model="showSelectLanguage">
    </mt-actionsheet>
  </div>
</template>
<script>
import { Vue, $, Common, wx, i18n } from 'js/base'
import {mapGetters} from 'vuex'
import CommonFooter from '../../components/common/footer.vue'
export default{
    data: function () {
        return {
            actions: [{ name: '中文', method: this.changeLanguage, lang: 'zh-CN' }, { name: '英文', method: this.changeLanguage, lang: 'en-US' }],
            showSelectLanguage: false
        }
    },
    methods: {
        selectLanguage: function () {
            this.showSelectLanguage = !this.showSelectLanguage
        },
        changeLanguage: function (item) {
            const lang = item.lang
            i18n.locale = lang
            console.log(this.$t('setting.logout'))
        }
    },
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '设置',
            left: {className: 'back'},
            'right': {hide: true}
        })
    }
}
</script>
