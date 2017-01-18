<template>
  <div class="container padding_b_120">
    <swiper :options="swiperOption" id="carrousel" ref="mySwiperA">
      <swiper-slide class="slide bg_lazyload" lazy="loading" v-for="banner in indexData.banner_list"
                    v-bind:data-image="banner.image"><a href=""></a></swiper-slide>
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
    <common-footer footerIndex="0"></common-footer>
    </div>
</template>
<script>
import CommonFooter from '../../components/common/footer.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
    data () {
        return {
            swiperOption: {
                swiperSlides: 0,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                notNextTick: true,
                pagination: '.swiper-pagination',
                onSlideNextEnd: () => {
                    this.swiperSlideEnd()
                }
            },
            indexData: []
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiperA.swiper
        }
    },
    mounted: function () {
        this.$http.get('../../../static/api/home/homepageV3.json').then((response) => {
            // indexData，然后html就可以遍历
            console.log(response.data)
            this.indexData = response.data
            // 使用$nextTick来对更新后的mounted节点进行操作
            this.$nextTick(function () {
                this.swiperSlideEnd()
            })
        }, (response) => {
            console.log(response)
        })
    },
    components: {
        swiper,
        swiperSlide,
        'common-footer': CommonFooter
    },
    methods: {
        swiperSlideEnd: function () {
            // 这个this.swiper为computed的swiper
            const ele = this.swiper.slides[this.swiper.activeIndex];
            const imgSrc = ele.getAttribute('data-image')
            // console.log(imgSrc)// ../static/api/Home/images/banner1.jpg
            if (imgSrc !== null) {
                // 直接使用new Image()eslint会报错
                const img = new window.Image()
                img.src = imgSrc;
                img.onload = function () {
                    // 图片加载完毕
                    ele.removeAttribute('data-image')
                    ele.setAttribute('lazy', 'loaded')
                    ele.style.cssText = 'background-image:url(' + imgSrc + ')'
                }
            }
        }
    }
}
</script>
