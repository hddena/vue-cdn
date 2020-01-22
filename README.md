# 说明
本案例 没有取用 webpack 打包方式开发，而取用CDN直接引入库的方式开发HTML页面，可以直接打开根目录的 index.html 查看

## 框架
主要使用的框架是 Vue 、iview 、mock.js

## 技术栈

vue2 + vuex + vue-router +  less

## 项目目的

建立一个不使用webpack的模板，不使用前端开发环境就可以直接打开

## 项目功能
``` bash
- [x] 头部组件化引入 -- 完成
- [x] 脚部组件化引入 -- 完成
- [x] Breadcrumb 面包屑组件化引入 -- 完成
- [x] 人口信息管理排版 -- 完成
- [x] 直班管理排版 -- 完成
- [x] 房屋管理排版 -- 完成
- [x] 添加系统代码页面排版 -- 完成
- [x] 人员权限维护页面排版 -- 完成
```


``` bash
# 指定平台的开发时构建(微信、百度、头条、支付宝)


git clone https://github.com/hddena/vue-cdn

访问: 直接打开根目录 文件 index.html ，在登录页面随便输入字符就可登录


```

## 项目布局

``` bash

.
├── components                       组件文件夹
│   ├── asideBox.js                  左栏菜单
│   ├── breadcrumb.js                Breadcrumb 面包屑
│   ├── footerShow.js                页脚内容
│   └── headerShow.js                页头内容
├── images                           图片文件夹
│
├── pages                            页面文件夹
│   ├── addSystemCode.js             添加系统代码
│   ├── adminPower.js                人员权限维护
│   ├── alarmRegistration.js         接警登记表
│   ├── caseRegistration.js          治安案件登记
│   ├── criminalRegistration.js      刑事案件登记
│   ├── houseBuildInfo.js            商业建筑管理
│   ├── houseInfo.js                 商品房管理
│   ├── login.js                     系统登录页面
│   ├── populationInfo.js            人口信息管理
│   └── populationReg.js             人口基本信息录入
│
├── utils                            公共库文件夹
│   ├── main.js                      主javascript
│   ├── routeConfig.js               路由配置文件，暂未启用
│   ├── style.css                    系统样式文件
│   ├── styles.less                  系统less样式文件
│   └── util.js                      共公方法文件
│
└── index.html                       项目入口文件





```
