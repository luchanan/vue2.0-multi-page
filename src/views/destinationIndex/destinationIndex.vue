<template>
  <div class="container destination_index">
    <section class="scroll_wrap flex">
      <div id="scroll_left">
        <ul>
          <li data-id="1" :class="index===0?'on':''" v-for="(countries, index) in country">{{countries.country_name}}</li>
        </ul>
      </div>
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
import {mapGetters} from 'vuex'
import CommonFooter from '../../components/common/footer.vue'
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
    }
}
</script>
