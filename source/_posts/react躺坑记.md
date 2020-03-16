
---
title: react学习笔记
tags: 前端
---

react躺坑记
react是目前最火的框架了，之前用了VUE，感觉比较简单；这次新做的web server交给我做，于是就想使用下新框架，练手
项目很急，基础够稳，又老是遇到各种问题；面向谷歌和StackOverFlow编程；

<!--more--> 


## 常见错误

#### Uncaught TypeError: Cannot read property 'setState' of undefined

没有绑定
```
this.handleSubmit=this.handleSubmit.bind(this)
```
[https://blog.csdn.net/huanghanqian/article/details/80548100](https://blog.csdn.net/huanghanqian/article/details/80548100)

#### 路由组件切换回到顶部
```
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
class ScrollToTop extends Component {
componentDidUpdate(prevProps) {
if (this.props.location !== prevProps.location) {
		window.scrollTo(0, 0)
		}
}
render() {
	return this.props.children
	}
}
export default withRouter(ScrollToTop);
```

#### 监听鼠标

上下：onWheel
```

handleWheel (event) {
let deta = event.deltaY;
if(deta > 0){
	console.log("向下")
	//window.scrollTo(0,3200)
}
if (deta<0){
	console.log("向上")
	//window.scrollTo(500,0)
}
}
```

addEventListener
```
//离开组件前移除
componentWillUnmount(){
	window.removeEventListener('scroll', this.handleScroll);
}

//挂载
componentDidMount(){
	window.addEventListener('scroll', this.handleScroll);
}
```

#### 上线打包空白：

这个react和vue都有，
"homepage":"."

[https://blog.csdn.net/Sophie_U/article/details/80006723](https://blog.csdn.net/Sophie_U/article/details/80006723)




#### Warning: Hash history cannot PUSH the same path; a new entry will not be add

Link 增加replace
```
<Link to='/Citation' replace>Citation</Link>
```


####  使用axios post 提交数据，后台获取不到提交的数据解决方案原因：前端提交的数据格式与后台解析的格式不一样
如：application/x-www-form-urlencoded 
application/json

https://blog.csdn.net/wopelo/article/details/78783442

看服务器介绍数据格式，如果是application/x-www-form-urlencoded，可以使用qs，制作对应的格式；
application/json就是对象形式了；

https://www.cnblogs.com/loveyaxin/p/8385694.html?tdsourcetag=s_pctim_aiomsg


#### Import in body of module; reorder to top import/first

import 必须在其它所有业务代码前面（eslint 暴出）

#### Warning: Encountered two children with the same key

table的值key 一样了


####  dispatch is not a function

使用react-redux,把null加上
```
export default connect(null,mapDispathToProps)(WrappedWebserver)
```

####  echarts空白不报错 
必须在div 中把长宽写上!!!百分比也行
```
<div id="gopie" style={{ width: 400, height: 400 }}>Sample proteins matchs no GO annotations</div>
```

使用document.getElementById.innerHTML 替换之后再重新渲染不出图。

#### ant design  anchor锚点和hisory router 冲突
如果路由更改为使用browserrouter 后需要后端跟着改配置；
使用react-router-hash-lin


## 常用插件


####  react-loadable 异步组件

[https://github.com/jamiebuilds/react-loadable](https://github.com/jamiebuilds/react-loadable)

####  Warning: Invalid DOM property `class`. Did you mean `className`?

react 自带了className
class属性改为className

#### iE支持

npm install --save-dev babel-polyfill

在src目录下的index.js 第一行加入：
```
import "babel-polyfill";
```

#### 全屏幻灯片插件

https://github.com/alvarotrigo/fullPage.js#license

#### 点击图片放大插件
https://github.com/Caldis/react-zmage


## 警告

#### Using target="_blank" without rel="noopener noreferrer" is a security risk:

在超链接上增加 ，否则有危险
```
rel="nofollow me noopener noreferrer"
```

#### No duplicate props allowed  react/jsx-no-duplicate-props

同一个class设置两个一样的名字

####  Unexpected string concatenation of literals no-useless-concat
字符串拼接没有按照Eslint规则

(YES)
```
const value = `; ${document.cookie}`;
const parts = value.split(`; ${name}=`);
```

vs
(NO)
```
onst value = '; ' + document.cookie;
const parts = value.split('; ' + name + '=');
```






## fetch使用:

据说比axio还好，但是我不成熟，包装不好

https://www.jianshu.com/p/d0d21baf41b1

https://segmentfault.com/a/1190000011433064

坑：

[https://ymbo.github.io/2018/01/09/http-proxy-middleware%E9%85%8D%E5%90%88gulp%E4%BD%BF%E7%94%A8%E6%97%B6%E7%9A%84%E4%B8%80%E4%BA%9B%E5%9D%91/](https://ymbo.github.io/2018/01/09/http-proxy-middleware%E9%85%8D%E5%90%88gulp%E4%BD%BF%E7%94%A8%E6%97%B6%E7%9A%84%E4%B8%80%E4%BA%9B%E5%9D%91/)

npm install whatwg-fetch --save

为了兼容老版本浏览器，还需要安装

npm install es6-promise --save。

```
import 'whatwg-fetch';
import 'es6-promise';
```
访问：
http://www.lysinetcga.renlab.org/webserver/get_username/


**  更改设置过后需要重启项目！！！ **

```
app.use(proxy('/api',
{
	target: 'http://www.lysinetcga.renlab.org/',
	changeOrigin: true,
	pathRewrite:{
	'^/api':'',
},
}
)
```

```
'/api/webserver/get_username/'
```
获取数据：

index.html 所在文件夹的api文件夹下的diaoyongR.php

/api/diaoyongR.php

```
app.use(proxy('/api',
{
	target: 'http://localhost:8088/',
	changeOrigin: true,
	pathRewrite:{
	'^/api':'api',
},
}
));
```
```
var result = fetch('/api/diaoyongR.php', {
method: 'POST',
body: "cancer=1&gene=2",
credentials: 'include',
headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/x-www-form-urlencoded' }
});
```
```
var result2 = fetch('/api/headerList.json', {
credentials: 'include',
headers: { 'Accept': 'application/json, text/plain, */*' }
});
```

```
result.then(res => {
	return res.text() // 将请求来的数据转化成 文本形式
	//return res.json() // 将数据转换成json格式
}).then(text => {
	console.log(text)
}).catch(function (e) {
	console.log("fetch fail");
});
```


axios

主页下方的headerList.json文件；
pathRewrite更改需要重启

如果是在主页目的 api2 文件夹下方的headerList.json,
改为：/api/api2/headerList.json

```
app.use(proxy('/api',
{
	target: 'http://localhost:8088/',
	changeOrigin: true,
	pathRewrite:{
	'^/api':'',
},
}
));
```
```
axios.get('/api/headerList.json',{
	// cancer:'cancer1',
	// gene:"gene1"
}).then((res)=>{
	console.log(res.data)
})
.catch(function (error) {
console.log(error)
})

```


