<template>
  <header class="center_header">
    <a :href="setLeftHeaderUrl" :class="setLeftHeader" @click="leftHeader"></a>
    <h1>{{pageInfo.headerTitle}}</h1>
    <a :href="setRightHeaderUrl" :class="setRightHeader" :data-count="messageCount" @click="rightHeader">{{pageInfo.right.font}}</a>
  </header>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  export default {
      computed: {
          setLeftHeader: function () {
              return {
                  'header_left my_setting': this.$store.getters.getPageInfo.left === '',
                  'header_left back': this.$store.getters.getPageInfo.left.className === 'back'
              }
          },
          setRightHeader: function () {
              return {
                  'header_right my_message': this.$store.getters.getPageInfo.right === '',
                  'header_right hide': this.$store.getters.getPageInfo.right.hide === true && this.$store.getters.getPageInfo.right.userFont === undefined,
                  'header_right font': this.$store.getters.getPageInfo.right.userFont === true
              }
          },
          setLeftHeaderUrl: function () {
              if (this.$store.getters.getPageInfo.left === '') {
                  return 'setting.html'
              } else {
                  return 'javascript:void(0)'
              }
          },
          setRightHeaderUrl: function () {
              if (this.$store.getters.getPageInfo.right.userFont === undefined) {
                  return 'messageList.html'
              } else {
                  return 'javascript:void(0)'
              }
          },
          ...mapGetters({
              pageInfo: 'getPageInfo',
              messageCount: 'getMessageCount'
          })
      },
      methods: {
          leftHeader (e) {
              if (e.target.getAttribute('href') === 'javascript:void(0)') {
                  window.history.go(-1)
              }
          },
          rightHeader (e) {
              if (this.$store.getters.getPageInfo.right.userFont === undefined) {
                  return
              }
              this.$store.commit('COLLECT_SHOW_CHECKBOX')
          }
      }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/scss/base/necessary.scss";
  header{
    position: fixed;
    width: 100%;
    left:0;
    z-index: 3;
    height: px2rem(102);
    padding:px2rem(24) 0;
    background:$white;
    h1{
      text-align: center;
      @include px2px(font-size,34);
      line-height:px2rem(54);
    }
    a{
      &.font{
         @include px2px(font-size,30);
         line-height:px2rem(102);
         color:$color_55C1DD;
         width:auto;
         &:before{
            @extend .none;
         }
      }
      position:absolute;
      padding:0 px2rem(24);
      width:px2rem(102);
      height:px2rem(102);
      top:0;
      &:before{
         position:absolute;
         left:50%;
         top:50%;
         margin-top:px2rem(-17);
         margin-left:px2rem(-17);
         display: inline-block;
         width:px2rem(34);
         height:px2rem(34);
       }
    }
    .header_left{
      left:0;
      &:before{
        content: '';
        background:url(images/setting.png) scroll no-repeat center center;
        @extend .contain;
      }
      &.back{
         &:before{
            background:url(images/back.png) scroll no-repeat center center;
            @extend .contain;
         }
      }
    }
    .header_right{
      left:auto;
      right:0;
      &.hide{
        @extend .none;
      }
      &:before{
        content: '';
        background:url(images/message.png) scroll no-repeat center center;
        @extend .contain;
      }
      &[data-count]:after{
         content: attr(data-count);
         position: absolute;
         left:50%;
         top: 50%;
         width: px2rem(14);
         height: px2rem(14);
         margin-left: px2rem(4);
         margin-top: px2rem(-20);
         border-radius:50%;
         background:$color_FC5D7B;
         text-indent:-9999em;
         font-size:0;
       }
      &[data-count='0']:after{
         display: none;
      }
    }
  }
</style>
