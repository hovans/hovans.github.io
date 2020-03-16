
---
title: vue躺坑之常用操作
tags: 前端
---

vue 各种常见问题

<!--more--> 
####  一.支持ie11：

```
import 'babel-polyfill'
```

####  二.组件切换返回最顶层

```
router.afterEach(() => {
    window.scrollTo(0, 0)
})
```

####  三.页面缓存

```
<keep-alive><router-view/></keep-alive>
```

#### 四.路由跳转

```
methods:{
  getCommon2:function(e,cancer){
      this.$router.push({path:'/search'});
  }
}
```

```
handleDelete(index, row) {
    this.$router.push({
        //path:'/detail/'+cancer+'/'+peakid,
        name:'analysis',
        params:{
            cancer: this.$route.params.cancer,
            peakid: row.peakid
        }
    });
}
```
参数接收：
```
data(){
    return{
        mycancer:this.$route.params.cancer,
        peakid:this.$route.params.peakid,
    }
}
```


#### 五.[Vue warn]: Error in mounted hook: "TypeError: Cannot read property 'getAttribute' of null"
出现该错误的原因是Echarts的图形容器还未生成就对其进行了初始化所造成的

#### 六.多环境配置

#####  生产环境
```
module.exports = {
  NODE_ENV: '"production"',
  hosturl:'主机ip:后端端口/',
  igvurl:'主机ip/igvurl'
}
```

##### 本地环境
```
const hosturl= 'http://127.0.0.1:8090/';
module.exports = {
  NODE_ENV: '"development"',
  hosturl:hosturl,
  igvurl:'http://127.0.0.1:8080/igvurl'
}
```

##### vue.config.js 文件配置

```
var path = require('path');
const devProxy = ['/api/*']; // 代理
var proEnv = require('./config/pro.env'); // 生产环境
var uatEnv = require('./config/uat.env'); // 测试环境
var devEnv = require('./config/dev.env'); // 本地环境
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if(env==='production'){ // 生产环境
  target = proEnv.hosturl;
}else if(env==='test'){ // 测试环境
  target = uatEnv.hosturl;
}else{ // 本地环境
  target = devEnv.hosturl;
}
// 生成代理配置对象
let proxyObj = {};
  devProxy.forEach((value, index) => {
    proxyObj[value] = {
    target: target,
    changeOrigin: true,
    pathRewrite: {
    '^/api':'/'
  }
  };
});
```


#### 七.图片延迟加载

##### vue-lazyload


#### 八.加载顶部条

##### nprogress

```
router.beforeEach((to, from , next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done()
})
```

#### 九.移动端适配
##### 折叠
```
import 'lib-flexible'
  require("postcss-px2rem")({
  remUnit: 75,
})
      
require("postcss-pxtorem")({
  rootValue : 75,
  "propList": ["*"]
})
```

##### 直接缩小
```
import 'amfe-flexible'

require("postcss-px2rem")({
  remUnit: 180,
})

require("postcss-pxtorem")({
  rootValue : 180,
  "propList": ["*"]
})
```

#### 十.父组件调用子组件

##### 父组件：
```
<detailgeneCard ref="detailgene" :wername="this.$route.params.wername" :targetgene="this.$route.params.targetgene"></detailgeneCard>

getdatagene(){
  this.$refs.detailgene.getdatagene(this.$route.params.species,this.$route.params.wername,this.$route.params.targetgene)
}
```

##### 子组件：
```
getdatagene(species,wername,targetgene){}
```



#### 十一.首页优化

##### cdn打包优化

##### 1.html页面

```
<!-- cdn 引入需要加cdn链接 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/combine/npm/axios@0.17.1/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.6/dist/vue-router.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.css">
<script src="https://cdn.jsdelivr.net/npm/vue-lazyload@1.3.1/vue-lazyload.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@2.10.0/lib/theme-chalk/index.min.css">
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.10.0/lib/index.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.10.0/lib/umd/locale/en.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts@4.1.0/dist/echarts.min.js"></script>
```

##### 2.main.js文件
//cdn 引入需要减的
```
//加
// import ELEMENT from 'element-ui'
// Vue.use(ELEMENT)

```

##### 3.App.ue文件

```
//Vue.use(VueLazyload) //cdn 引入加
```


##### 4.Router index.js文件:
```
//cdn 引入减
import Vue from 'vue'
Vue.use(Router)
```

##### 5.vue.config.js文件

```
// 'vue': 'Vue', //cdn 引入加
// 'axios':'axios',
// 'vue-router': 'VueRouter',
// 'nprogress':'nprogress',
// 'vue-lazyload':'vue-lazyload',
// 'element-ui': 'ELEMENT',
//'echarts':'echarts'

//可能需要加
import echarts from "echarts"

this.$echarts
改为了
window.echarts
```

##### 生产环境是否生成 sourceMap 文件
```
productionSourceMap: false,
```

##### zip 压缩：

##### vue.config.js 文件

```
const CompressionWebpackPlugin = require('compression-webpack-plugin')
  const productionGzipExtensions = ['js', 'css']
  config.plugins.push(new CompressionWebpackPlugin({
  algorithm: 'gzip',
  test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  threshold: 10240,
  minRatio: 0.8
})
```



