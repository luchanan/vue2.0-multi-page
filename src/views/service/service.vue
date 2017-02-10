<template>
  <div class="container padding_t_122 service">
    <ul>
      <li class="bg_white">
        <h1><span class="font">国内客服</span><span class="work">周一至周日</span><span class="time">09:00-18:00</span></h1>
        <div class="tel"><a href="tel:400-000-0000"><span class="tel_num">400-000-0000</span></a></div>
      </li>
      <li class="bg_white">
        <h1><span class="font">泰国当地客服</span><span class="work">周一至周日</span><span class="time">09:00-18:00</span></h1>
        <div class="tel"><a href="tel:+86-10-00000000"><span class="tel_num font12">+86-10-00000000</span></a></div>
      </li>
    </ul>
    <div class="remark">关于商品、订单和售后，请联系国内客服；如果您在行程中遇到任何问题，请优先联系当地客服</div>
  </div>
</template>
<script>
export default{
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '客服电话',
            left: {className: 'back'},
            'right': {hide: true}
        })
    }
}
</script>
