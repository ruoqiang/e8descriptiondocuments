# 微信代码相关介绍
## 目录介绍
项目是基于vue-cli2初始化创建的
```
weChat
  |- build
  | |- vue-loader.conf.js
  | |- dev-server.js //如何有需要自己模拟的数据，请在该文件下配置
  | |- webpack.base.conf.js //配置路径别名在这个文件中修改alias: {'@': resolve('src'),'common': resolve('src/common'),。。。。}
  | |- webpack.prod.conf.js //配置打包后是否开启sourceMap在这个文件里修改sourceMap: false
  | |- ...
  |- config
  | |- index.js //修改了打包时静态文件输出路径 assetsPublicPath: '/', 以及proxyTable调试时代理接口
  | |- ...
  |- dist
  | |- ...
  | |- ...
  |- src
  | |- api
  | | |-- config.js //全局静态变量配置
  | | |-- ...
  | |- assets   
  | |- base   //基础组件，复用率比较高的一些组件
  | | |------ loading //loading组件
  | | |------ toast //toast组件
  | | |------ ...
  | |- common //通用资源,整个站点都会使用到的资源
  | | |------ fonts //自定义字体图标
  | | |------ images //通用小图片
  | | |------ js //通用js
  | | |------ stylus //通用stylus
  | |- components //页面基本的组件
  | | |------ home
  | | |------ login
  | | |------ register
  | | |------ fotrget
  | | |------ ...
  | |- router //路由
  | |- store //全局状态
  | |- App.vue
  | |- http.js //请求的登录拦截设置
  | |- main.js //入口文件
  |- static
  | |- ...
  | |- ...
  |- index.html
  |- .eslintrc.js //eslint配置,如果不想对每一个规则进行校验，可以直接配置改校验规则为0即可跳过校验
```