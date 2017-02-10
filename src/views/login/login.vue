<template>
  <div class="container padding_t_122 login">
    <ul class="form">
      <li class="bg_white flex">
          <input type="text" placeholder="手机号/邮箱/账号" class="text" id="account">
      </li>
      <li class="bg_white flex">
        <input type="password" placeholder="密码" class="text" id="password">
      </li>
    </ul>
    <div class="flex link">
      <a href="findPassword.html">忘记密码？</a>
    </div>
    <button disabled>登录</button>
    <div class="thirdLogin">
      <h1><hr><div class="line"><span>第三方账号登录</span></div></h1>
      <ul class="loginIcon">
        <li><a href="" class="icon wechat"></a></li>
        <li><a href="" class="icon sina"></a></li>
        <li><a href="" class="icon qq"></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '登录',
            left: {className: 'back'},
            'right': {hide: true}
        })
    }
}
</script>
