# Vue-cli(2.0) 多页面开发实战

> 由于是从jquery操作dom时代转过来mvc的，所以在开发中会遇到很多问题，借此来记录一下

## 现在的开发环境  ##

1. nodejs v5.1.1 
2. npm 3.3.1.12
3. 使用vue-cli（包含vue2.0，webpack，sass，es6等环境）

## 前期准备 ##

1. 选择一个多页面开发案例参考，结合自己的实际情况修改一下，这里主要参考了以下一些案例
	1. [https://github.com/bluefox1688/vue-cli-multi-page](https://github.com/bluefox1688/vue-cli-multi-page)（参考多页面配置整体思想）
	2. [https://github.com/jiananle/vue-multi-page](https://github.com/jiananle/vue-multi-page)（参考整个文件命名架构，比较适合我这种情况）
	3. [https://github.com/jarvan4dev/vue-multi-page](https://github.com/jarvan4dev/vue-multi-page)（参考以文件作为模块名输出，这样就不会造成覆盖）
	
2. 熟悉相关语法（基本了解就好，毕竟做项目的时候才会发现更多的问题）
	1. [es6基本使用方法](http://es6.ruanyifeng.com/)
	2. [vue2.0官网](https://cn.vuejs.org/v2/guide/)
	3. [sass基本语法](http://www.w3cplus.com/sassguide/)

## 遇到的问题 ##

1. 刚开始装上vue-cli，发现eslint语法太过严格（定义未使用，要多少个空格，结尾要空行等），所以进行适当调整，在.eslintrc.js添加
	```
	rules: {
	    'indent': ['warn', 4],
	    'semi': 0,  // off semi
	    'eol-last': 0,
	    'no-unused-vars': 0,
	    // allow paren-less arrow functions
	    'arrow-parens': 0,
	    // allow async-await
	    'generator-star-spacing': 0,
	    // allow debugger during development
	    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
	```
更多查看：[http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring)

2.  eslint会对assets下面的第三方插件（自己下载引入的）也进行语法检测，有三种方法解决

	-  注释掉webpack.base.conf.js中的preLoaders（极端，排除）
	-  放到static(不想这样做)
	-  .eslintignore追加
	
		```
		build/*.js
		config/*.js
		src/assets/js/lib/**/*.js
		```
	-  webpack.base.conf.js中preLoaders使用exclude排除
		
		```
		...省略
		var libs=path.resolve(__dirname, '../src/assets/js/lib/')
		...省略
		preLoaders: [
		  {
		    test: /\.js$/,
		    loader: 'eslint',
		    include: projectRoot,
		    exclude: [/node_modules/,libs]//多个的话
		  }
		]
		```

3.	.vue如何使用组件
	- 定义组件，格式包括<template>,<script>,<style>
	- 引入组件 import
	- 注册组件 components
	- 使用组件 <firstcomponent></firstcomponent>
	
	```
	<template>
	  <div id="app">
	    <home-header></home-header>
	  </div>
	</template>
	<script>
	import homeHeader from './components/FirstComponent'
	export default {
	  name: 'app',
	  components: {
	    'home-header': homeHeader // 或者简写homeHeader
	  }
	}
	```

4. .vue使用sass,注意是lang='scss'不是lang='sass'

	```
	<style lang='scss'>
	</style>

	```
5. 如何npm一个带版本号的插件

	```
	npm install jquery@2.2.4 –save-dev

	```

6. 如何请求后台数据，并且渲染到html上

   	- 使用vue-resource

	```
	var vueResource = require('vue-resource')
	Vue.use(vueResource)
	
	```

	- 请求.json文件作为模拟数据，注意只能是get，不能post
	
		```
		export default{
		  data () {
		    return {
		      bannerList: []
		    }
		  },
		  mounted: function () {
		    this.$http.post('static/api/Home/homepageV3.json
		').then((response) => {
		      // 为bannerList赋值数据，然后html就可以遍历
		      this.bannerList = response.data.banner_list
		    }, (response) => {
		      console.log(response)
		    })
		  }
		}
		
		```
	- 当前.vue文件写上
	
		```
		<swipe-item class="slide" v-for="banner in bannerList"><img v-bind:src=banner.image /></swipe-item>
		```