<template>
  <footer class="footer">
    <ul class="clearfix">
      <li><a href="index.html" data-font="首页"></a> </li>
      <li><a href="" data-font="目的地" class="destination"></a> </li>
      <li><a href="" data-font="购物车" class="cart"></a></li>
      <li><a href="my.html" data-font="我的" class="my"></a></li>
    </ul>
  </footer>
</template>
<script>
import { Vue, $ } from 'js/base'
export default {
    props: ['say'],
    mounted: function () {
        /* const footerIcon = document.getElementById('footerIcon').value
        $('.footer ul li').eq(footerIcon).children('a').addClass('on') */
    }
}
</script>
