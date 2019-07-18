# 如何在项目中使用vue

## vue script标签形式开发
参考` 系统管理-->邮件配置`对应的页面 `/System/EmailConfig/EmailConfigList`


注意该页面是使用jQuery与vue混合的，其中翻页部分是使用jQuery插件渲染的，其他部分是使用vue+jQuery的

### 思路
直接当前页面中引入vue.js script标签，通过对右侧节点`#myMenu`创建一个 Vue 实例，直接把当前页面当做template

- 方案1.非组件化

直接页面内使用

```js
var vm = new Vue({
            el: '#myMenu',
            data: {
                IsShow: true,
                }
            })
```

- 方案2.组件化

新建一个test.js文件，然后当前页面引入这个test.js文件，当做组件注册到页面中去使用
```js
Vue.component('my-test', {
    template: '<div> test HTML 代码 {{mgs}}{{title}}</div>',
    props: {
        title: { default: 'xxx' }
    },
    data: function () {
        return {
            mgs: 'testttt'
        }
    },
    created: function () {
        console.log(this.mgs);
    },
    methods: {}
    // ...
})
```
## vue 单文件形式开发
### 思路
网上找的思路
- 1. 页面的右侧部分提供一个占位符节点，这个节点用 Vue 渲染，实际上就是执行一段 JS 代码。 （这里拿 Vue 举例，其它框架类似）。
- 2. 执行的 JS 代码放到单独的仓库中维护 ，这样可以拥有最先进的开发方式和体验（TS/ES6、Webpack、模块化、组件化、任意MVVM 框架）。
- 3. 上线只需要去构建执行 JS 的仓库，打包后的 JS、CSS 等代码可以独立发布到静态资源服务器，同时更新配置文件 。
- 4. 主框架对应的模板会通过配置文件读取它应该加载的静态资源

### 具体实践
- 文件目录 
`E:\myWork\Allpro\trunk\E8Management\E8Management\vueDevInstanceModule\webpack-project`
#### 说明
这里是使用webpack配置的一个vue项目，webpack相关配置已经配置好了，目前能够做到编写vue文件保存后就会自动编译为js，然后在对应的aspx页面引入这个js就行了。
#### 运行项目与配置
- 1.运行后台项目，以新增代理商页面为例 打开地址`http://localhost:31545/riskManage/Agent/AgentAdd/#/`后
- 2.进入项目的`vueDevInstanceModule\webpack-project`目录下执行npm run watch,会自动打包出出vendors.js,main.js到`dist/agent`目录下，
- 3.AgentAdd.aspx页面底部引入vendors.js,main.js
AgentAdd.aspx
```aspx
<script src="~/vueDevInstanceModule/webpack-project/dist/agent/vendors.js"></script>
<script src="~/vueDevInstanceModule/webpack-project/dist/agent/main.js"></script>
```
- 4.配置不同模块输出
多人协作每个人写不同的模块时，例如A写代理商模块，B写用户基本信息模块，分别只打包自己写的代码
 ##### 以新增一个用户信息模块为例
 1.修改webpack的输出地址 
 webpack.config.js
 ```js
 const outputSrc = './dist/baseInfo';
 ```
 2.复制一份路由router.js文件做好页面文件引入
```js
// import Vue from 'vue'
import Router from 'vue-router'
import BaseInfo from 'components/baseInfo/addInfo'
import InfotList from 'components/baseInfo/InfoList'
Vue.use(Router)
```
 3.main.js中引入刚刚那个路由
 ```js
 import router from "./router/baseInfoRoute" //路由文件，
 ```
4.useInfo.aspx页面引入
```js
<script src="~/vueDevInstanceModule/webpack-project/dist/baseInfo/vendors.js"></script>
<script src="~/vueDevInstanceModule/webpack-project/dist/baseInfo/main.js"></script>
```

### 特别说明
该方式目前只实现了把.vue文件中的html,js打包出js文件，css，img资源暂未做处理。因此css还是去以前的地方(`E:\myWork\Allpro\trunk\E8Management\E8Management\Content\asset\css`)写吧

对了，watch的时候打包出的js想时时看效果需要强制刷新一下(ctrl+f5)，由于没有做文件hash生成动态注入script标签到aspx中，我也想做呀，但是不好做。
