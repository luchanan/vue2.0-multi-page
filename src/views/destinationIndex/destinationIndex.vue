<template>
  <div class="container destination_index">
    <section class="scroll_wrap flex">
      <iscroll-view ref="scrollView" id="scroll_left" class="scroll-view">
        <ul>
          <li :data-id="countries.id" :class="index===0?'on':''" v-for="(countries, index) in country">{{countries.country_name}}</li>
        </ul>
      </iscroll-view>
      <div id="scroll_right" class="flex_item">
        <ul>
          <li class="clearfix" v-for="countries in country">
            <a href="" v-for="city in countries.city_list">
              <div class="img_wrap">
                <div class="bg"></div>
                <img data-original="" src="" class="img_lazyload" lazy="loading">
                <div class="font">
                  <h3 class="ellipsis">{{city.city_name}}</h3>
                  <h4 class="ellipsis">{{city.title}}</h4>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <common-footer footerIndex="1"></common-footer>
  </div>
</template>
<script>
import {Vue} from 'js/base'
import {mapGetters} from 'vuex'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import CommonFooter from '../../components/common/footer.vue'
Vue.use(IScrollView, IScroll)
export default{
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '',
            type: 'destinationIndex',
            left: {className: 'back'},
            'right': {hide: true}
        })
        this.$store.dispatch('getDestinationIndex')
    },
    components: {
        'common-footer': CommonFooter
    },
    computed: {
        ...mapGetters({
            country: 'getDestinationIndex'
        })
    },
    mounted: function () {
        // this.$refs.scrollView.refresh()
    },
    updated: function () {
        const headerHeight = document.querySelector('header').clientHeight
        const footerHeight = document.querySelector('.footer').clientHeight
        document.querySelector('.destination_index').style.height = (window.lib.flexible.dpr * window.screen.height) - (headerHeight + footerHeight) + 'px'
    }
}
</script>
<style>
  .scroll-view {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 600px;
  }
</style>
