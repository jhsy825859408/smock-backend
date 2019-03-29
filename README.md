#react 后台管理项目
##项目说明
>个人线上项目[smocks-backend](http://www.smocks.cn) 

> 包括 组价UI，地图，富文本，echarts, 表格，表单，人员管理，授权管理多个模块

> 使用react全家桶+es6+webpack前端热门技术

> 采用模块化，组件化，工程化的模式开发

##技术选型
####组件化
> React Redux React-redux React-router AntD
####数据交互
> 在线mock平台[easy-mock](https://www.easy-mock.com/)
####模块化
> babel es6
####项目构建
> webpack React脚手架 eslint react-app-rewired
####第三方库
> 百度地图API echart表格 
##项目演示
1) 编码测试
> npm run start
访问: http://localhost:3000
编码, 自动编译打包(HMR), 查看效果
2) 打包发布
>npm run build
npm install -g serve
serve build
访问: http://localhost:5000
##项目目录

```
public/ 项目静态文件
src/ 主源码目录
    │  admin.js 后台主页面组件
    │  App.js  应用全局app组件
    │  index.js 入口文件
    │  router.js 路由导航配置页面
    ├─axios 封装jsonp和axios,为项目提供请求接口 （接口数据由模拟产生）
    ├─components 非路由组件
    │  ├─BaseForm 封装通用表单组件
    │  ├─ETable  封装通用表格组件
    │  ├─Footer  底部组件
    │  ├─Header  头部组件
    │  └─NavLeft  主页面左侧Nav组件
    ├─config
    │      menuConfig.js 左侧Nav组件导入配置
    ├─pages
    │  ├─city 城市组件
    │  ├─echarts
    │  │  │  echartTheme.js echarts主题文件
    │  │  │  themeLight.js
    │  │  ├─bar 柱形图
    │  │  ├─line  折线图
    │  │  └─pie 饼图
    │  ├─form
    │  │      login.js 登录表单演示
    │  │      register.js 注册表单演示
    │  ├─home 主页
    │  ├─map 地图展示
    │  ├─nomatch 无匹配展示组件
    │  ├─order  订单管理组件
    │  ├─permission 授权组件
    │  ├─rich 富文本组件
    │  ├─table
    │  │      basicTable.js 基本表格组件
    │  │      highTable.js  高级表格组件
    │  ├─ui  antd组件展示
    │  │      buttons.js 按钮组件
    │  │      carousel.js 轮播图组件
    │  │      gallery.js 画廊演示
    │  │      loadings.js 缓冲效果演示
    │  │      messages.js 信息框
    │  │      modals.js 对话框
    │  │      notice.js 提醒框
    │  │      tabs.js tab演示
    │  └─user 人员管理
    ├─redux redux相关文件
    │  ├─action
    │  ├─reducer
    │  └─store
    ├─resource 资源相关文件
    │          
    ├─style 样式相关文件
    └─utils  封装的一些工具模块
            
```
