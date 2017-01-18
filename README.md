# Vue-cli(2.0) 多页面开发实战

> 由于是从jquery操作dom时代转过来mvc的，所以在开发中会遇到很多问题，借此来记录一下

## 现在的开发环境  ##

1. nodejs v5.1.1 ，npm 3.3.1.12
2. 使用vue-cli（包含vue2.0，webpack，sass，es6等环境）

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

1. 刚开始装上vue-cli，发现eslint语法太过严格（定义未使用，要多少个空格，结尾要空行等），所以进行适当调整

2.  eslint会对assets下面的第三方插件（自己下载引入的）也进行语法检测，有三种方法解决

3.	.vue如何使用组件

4. .vue使用sass,注意是lang='scss'不是lang='sass'

5. 如何npm一个带版本号的插件

6. 如何请求后台数据，并且渲染到html上

7. 微信jssdk如何设置全局，并且使用

8. 使用v:bind:style设置background

9. class使用多条件进行判断

10. 如何生成一个tree目录

11. html-loader代替服务器SSI

12. 子传父，父传子，非父子组件之间传值问题

13. set使用导致html{{}}无法输出三层 以上的object

14. img:src绑定assets下图片404问题

15. 使用filters

> 更多详情看note文件下