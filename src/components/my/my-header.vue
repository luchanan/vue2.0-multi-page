<template>
  <header class="center_header">
    <a :href="setLeftHeaderUrl" :class="setLeftHeader" @click="leftHeader"></a>
    <h1>{{title}}</h1>
    <a href="messageList.html" :class="setRightHeader" data-count="0"></a>
  </header>
</template>

<script>
  export default {
      data () {
          return {
              title: '我的',
              headerInfo: []
          }
      },
      mounted: function () {
          this.$bus.on('getMessageCount', this.setMessageCount);
          this.$bus.on('setCenterHeader', this.setCenterHeader);
          console.log(this.$store.getters)
      },
      computed: {
          setLeftHeader: function () {
              return {
                  'header_left my_setting': this.headerInfo.length === 0,
                  'header_left back': this.headerInfo.length !== 0
              }
          },
          setRightHeader: function () {
              return {
                  'header_right my_message': this.headerInfo.length === 0,
                  'header_right hide': this.headerInfo.length !== 0 && this.headerInfo.right.hide === true
              }
          },
          setLeftHeaderUrl: function () {
              if (this.headerInfo.length === 0) {
                  return 'setting.html'
              } else if (this.headerInfo.length !== 0 && this.headerInfo.left.href === undefined) {
                  return 'javascript:void(0)'
              }
          }
      },
      methods: {
          leftHeader: function (e) {
              if (e.target.getAttribute('href') === 'javascript:void(0)') {
                  window.history.go(-1)
              }
          },
          setMessageCount: function (params) {
              document.querySelector('.my_message').setAttribute('data-count', params.num)
          },
          setCenterHeader: function (params) {
              this.$set(this.$data, 'title', params.title)// 改变数据并且更新视图
              this.$set(this.$data, 'headerInfo', params)
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
