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
export default {
    props: ['footerIndex'],
    mounted: function () {
        let self = this
        document.querySelector('footer').children[0].children[self.footerIndex].children[0].classList.add('on')
    }
}
</script>
