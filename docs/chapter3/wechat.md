# 微信端整体项目介绍
## 说明

这个项目是后端提供api接口，前端采用vue做的单页面应用。但又不是完全独立开的，因为牵扯到调试接口，没有线上开发版接口，只能本地调试。所以设计成单页面部分文件夹放在Api文件夹内的形式，方便本地直接SNV获取后台api项目运行前端直接使用。

## 打开后端部分并运行起来
 打开visual studio2015编辑 最近打开的项目中选择 APIService

或者选择项目文件的形式打开 `E:\ApiService`
## 运行Api部分的项目
点击运行项目就会启动一个端口1293的项目 `http://localhost:1293/`

具体每个接口，可以找后端要一下，他会本地给你生成一个接口文档，直接更新并重新运行项目，然后通过正确的路径就可以访问到了
## 运行前端部分代码
代码目录`E:\ApiService\ApiService\Content\weChat`

-  进入weChat目录下
- 执行npm run start
启动一个端口为:8080的服务(端口也可能是8081)，接口跨域代理配置已经处理过了，直接就可以调用后端的api了，http://localhost:8081/
![图片](./img/wechat01.png)

### 项目体验
- 项目二维码

![二维码](./img/erweima.png)

- 项目链接
`http://wechat.chepass.com:8021/Content/dist/#/home?backDoor`
