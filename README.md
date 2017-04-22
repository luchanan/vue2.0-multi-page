# 预览地址：

[https://luchanan.github.io/vue2.0-multi-page-dist/views/index.html](https://luchanan.github.io/vue2.0-multi-page-dist/views/index.html)

# Vue-cli(2.0) 多页面开发实战（逐步开发中...）

> 由于之前主要使用jquery方式开发，现在想换一种方式，使用MVVM开发(感觉vue跟我之前用的angular1.X差不多类似)，所以在开发中会遇到很多问题，借此来记录一下；或者有很多不足，又或者里面可能存在些错误，anyway，请多多指教，共勉。

## 现在的开发环境  ##

1. nodejs v5.1.1 ，npm 3.3.1.12
2. 使用vue-cli（包含vue2.0，webpack，sass，es6等环境）

## 如何运行项目 ##

``` bash
# 下载项目后，首先安装需要的包
npm install

# 开发运行环境;运行命令后，浏览器自动打开http://localhost:8080/views/index.html
npm run dev

# 开发完成后打包命令，会生成dist文件夹，不要在本地打开，请安装类似http-server来运行(dist后js/css／api路径会指向我的github，可以在config／index.js下修改assetsPublicPath)
npm run build

```

## 前期准备 ##

1. 选择一个多页面开发案例参考，结合自己的实际情况修改一下，这里主要参考了以下一些案例
	- [https://github.com/bluefox1688/vue-cli-multi-page](https://github.com/bluefox1688/vue-cli-multi-page)（参考多页面配置整体思想）
	- [https://github.com/jiananle/vue-multi-page](https://github.com/jiananle/vue-multi-page)（参考整个文件命名架构，比较适合我这种情况）
	- [https://github.com/jarvan4dev/vue-multi-page](https://github.com/jarvan4dev/vue-multi-page)（参考以模块名作为名字输出，避免以模块名里面的文件名作为名字输出导致覆盖）
	
2. 熟悉相关语法（基本了解就好，毕竟做项目的时候才会发现更多的问题）
	- [es6基本使用方法](http://es6.ruanyifeng.com/)
	- [vue2.0官网](https://cn.vuejs.org/v2/guide/)，[vue2 api](https://cn.vuejs.org/v2/api/)
	- [sass基本语法](http://www.w3cplus.com/sassguide/)

## 遇到的问题 ##

- 试用网站多语言支持(R5)

- 刚开始装上vue-cli，发现eslint语法太过严格（定义未使用，要多少个空格，结尾要空行等），所以进行适当调整（M4）

- eslint会对assets下面的第三方插件（自己下载引入的）也进行语法检测，有三种方法解决（A11）

- .vue如何使用组件（A4）

- .vue使用sass,注意是lang='scss'不是lang='sass'（A5）

- 如何npm一个带版本号的插件（A8）

- 如何请求后台数据（vue-resource方式），并且渲染到html上（A12）

- 微信jssdk如何设置全局，并且使用

- 使用v:bind:style设置background（A13）

- class使用多条件进行判断（A15）

- 如何生成一个tree目录（额外内容）（A18）

- html-loader部分代替服务器SSI（.html文件使用SSI来include类似JS或CSS资源目前没有找到很好的解决方法）(M1)

- 子传父，父传子，非父子组件（BUS方式）之间传值问题（M8/M9/M10/M11）

- set使用导致html{{}}无法输出2层 以上的object(M15）

- img:src绑定assets下图片404问题(M9）

- 使用filters(M12）

- .js或.vue中script使用import（或require）文件引入.scss文件没有自动添加浏览器前缀问题，npm run dev 和npm run build 编译后浏览器前缀解析（丢失部分）不一样问题(M17)

- ~~加入vuex逐步取代之前bus组件通讯方式，axios代替之前的vue-resource方案~~ 已全部代替(M18/M22)

- 使用async/await来处理多个异步action且有依赖关系(M23）

- dev模式下插入到html文件的script标签顺序没问题（例如，先是vendor.js里面包含vue,vuex集合，然后再是index.js），但是build后，顺序是反过来的，导致Cannot read property 'call' of undefined报错(M25）

- iscroll5.2 在谷歌V56模拟器或者真机不能滑动的解决方案(M28）
 
> 以上括号数字代表note/byluchanan.docx（没有特殊说明都是这个文件）里面的问题序号（蓝色下划线部分），R*代表.md文件名序号，更多详情看note文件下

> 由于docx在git对比的不方便性，于2017/3/3 21:27结束编写，之后的问题以.md方式记录，放在note下

## 目前完成的模块 ##

- 首页
 
- 登录、客服页

- 我的主页

- 消息列表、我的收藏

- 目的地选择、购物车列表 
