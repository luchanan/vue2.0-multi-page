<template>
  <div class="container padding_b_120">
    <!--<swipe class="swipe" :auto="50000">
      <swipe-item class="slide cover" v-for="banner in indexData.banner_list"
                  v-bind:style="{ 'background-image': 'url(' + banner.image + ')' }">
        <a href=""></a>
      </swipe-item>
    </swipe>-->
    <swiper :options="swiperOption" id="cal">
      <swiper-slide class="slide bg_lazyload" lazy="loading" v-for="banner in indexData.banner_list"
                    v-bind:data-image="banner.image"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="item boutique">
      <h1 class="title">精选频道</h1>
      <div class="scroll">
        <ul>
          <li v-for="line in indexData.line_list">
            <a href="">
              <div class="bg bg_lazyload" v-lazy:background-image="line.image"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-bind:class="{'item': list.data_type==2,
                        'item surprise':list.data_type==1&&list.display_type==3,
                        'item surprise activity':list.data_type==0&&list.display_type==3,
                        'item surprise list':list.data_type==1&&list.display_type==2}"
         v-for="list in indexData.data_list">
      <h1 class="title">{{list.title}}</h1>
      <div class="scroll">
        <ul>
          <li v-for="item in list.data">
            <a href="">
              <div class="bg bg_lazyload" v-lazy:background-image="item.image"></div>
              <!--目的地-->
              <div class="text flex flex_v_center" v-if="list.display_type==3&&list.data_type==2">
                <div class="flex_item">{{item.title}}</div>
              </div>
              <!--图文-->
              <div class="bottom_title"
                   v-if="list.display_type==3&&list.data_type==1||list.data_type==1&&list.display_type==2">
                <h2>{{item.title}}</h2>
                <div class="flex">
                  <div class="left flex_item">已售{{item.sale_amount}}份</div>
                  <div class="right flex_item">{{item.price}}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
    data () {
        return {
            swiperOption: {
                autoplay: 5000,
                pagination: '.swiper-pagination',
                onInit: function (swiper) {
                    console.log(swiper.bullets);
                },
                onSlideNextEnd: function (swiper) {
                    console.log(swiper.bullets);
                }
            },
            indexData: []
        }
    },
    mounted: function () {
        this.$http.get('../../../static/api/Home/homepageV3.json').then((response) => {
            // indexData，然后html就可以遍历
            console.log(response.data)
            this.indexData = response.data
        }, (response) => {
            console.log(response)
        })
    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
  // @import '../../assets/scss/home/home.scss'
</style>"
