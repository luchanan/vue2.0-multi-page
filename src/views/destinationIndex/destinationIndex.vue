<template>
  <div class="container destination_index">
    <section class="scroll_wrap flex">
      <iscroll-view ref="scrollViewLeft" id="scroll_left" :options="{preventDefault: false,disableMouse: true,disablePointer: true,disableTouch:false}">
        <ul>
          <li :data-id="countries.id" :class="index===0?'on':''" v-for="(countries, index) in country" @click="selectOn">{{countries.country_name}}</li>
        </ul>
      </iscroll-view>
      <iscroll-view ref="scrollViewRight" id="scroll_right" class="flex_item" :options="{preventDefault: false,disableMouse: true,disablePointer: true,disableTouch:false}">
        <ul>
          <li class="clearfix" v-for="(countries, index) in country" :data-id="countries.id" :pindex="index">
            <a href="" v-for="(city, index) in countries.city_list" :data-pindex="pindex" :cindex="index" :index="index">
              <div class="img_wrap" :data-cindex="cindex">
                <div class="bg"></div>
                <img v-lazy="city.app_image" src="" class="img_lazyload" lazy="loading">
                <div class="font">
                  <h3 class="ellipsis">{{city.city_name}}</h3>
                  <h4 class="ellipsis">{{city.title}}</h4>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </iscroll-view>
    </section>
    <common-footer footerIndex="1"></common-footer>
  </div>
</template>
<script>
import {Vue, $} from 'js/base'
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
    methods: {
        selectOn: function (e) {
            const leftScroll = this.$refs.scrollViewLeft
            const righScroll = this.$refs.scrollViewRight
            const ele = e.target
            $(ele).addClass('on').siblings().removeClass('on')
            leftScroll.scrollToElement(ele, 500)
            const index = $(ele).data('id')
            $('#scroll_right li[data-id=\'' + index + '\']').show().siblings().hide();
            righScroll.scrollTo(0, 0, 300, IScroll.utils.ease.quadratic)
            righScroll.refresh()
        }
    },
    updated: function () {
        const headerHeight = document.querySelector('header').clientHeight
        const footerHeight = document.querySelector('.footer').clientHeight
        document.querySelector('.destination_index').style.height = (window.lib.flexible.dpr * window.screen.height) - (headerHeight + footerHeight) + 'px'
        this.$refs.scrollViewLeft.refresh()
        this.$refs.scrollViewRight.refresh()
    }
}
</script>
