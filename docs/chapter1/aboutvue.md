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
- 2. 页面的右侧部分提供一个占位符节点，这个节点用 Vue 渲染，实际上就是执行一段 JS 代码。 （这里拿 Vue 举例，其它框架类似）。
- 3. 执行的 JS 代码放到单独的仓库中维护 ，这样可以拥有最先进的开发方式和体验（TS/ES6、Webpack、模块化、组件化、任意MVVM 框架）。
- 4. 上线只需要去构建执行 JS 的仓库，打包后的 JS、CSS 等代码可以独立发布到静态资源服务器，同时更新配置文件 。
- 5. 主框架对应的模板会通过配置文件读取它应该加载的静态资源