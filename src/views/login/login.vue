<template>
  <div class="container padding_t_122 login">
    <div class="tips" v-if="showTips">{{tipsMessage}}</div>
    <ul class="form">
      <li class="bg_white flex">
          <input type="text" placeholder="手机号/邮箱/账号" class="text" id="account" v-model="account" @input="accountInput">
      </li>
      <li class="bg_white flex">
        <input type="password" placeholder="密码" class="text" id="password" v-model="password" @input="passwordInput">
      </li>
    </ul>
    <div class="flex link">
      <a href="findPassword.html">忘记密码？</a>
    </div>
    <button @click="loginSubmit" :disabled="submitDisabled">登录</button>
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
    data () {
        return {
            submitDisabled: true,
            account: 'luchanan  ',
            password: '123456',
            showTips: false,
            tipsMessage: ''
        }
    },
    created: function () {
        this.$store.dispatch('setPageInfo', {
            headerTitle: '登录',
            left: {className: 'back'},
            'right': {hide: true}
        })
    },
    mounted: function () {
        if (this.account !== '' && this.password !== '') {
            this.submitDisabled = false
        } else {
            this.submitDisabled = true
        }
    },
    methods: {
        loginSubmit: function () {
            this.submitDisabled = true
            this.$store.dispatch('goLogin', {'accout': this.account, 'password': this.password}).then((res) => {
                this.$set(this.$data, 'showTips', true)
                if (this.$store.getters.getLoginSuccess) {
                    if (window.localStorage) {
                        this.tipsMessage = '登录成功，正在跳转...'
                        window.localStorage.setItem('userInfo', JSON.stringify(res.data))
                        setTimeout(() => {
                            window.history.go(-1)
                        }, 3000)
                    }
                } else {
                    this.tipsMessage = this.$store.getters.getLoginMessage
                    this.submitDisabled = false
                }
            })
        },
        accountInput: function () {
            if (this.account !== '' && this.password !== '') {
                this.submitDisabled = false
            } else {
                this.submitDisabled = true
            }
        },
        passwordInput: function () {
            if (this.account !== '' && this.password !== '') {
                this.submitDisabled = false
            } else {
                this.submitDisabled = true
            }
        }
    }
}
</script>
