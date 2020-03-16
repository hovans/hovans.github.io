---
title: redux学习笔记
tags: 前端
---

redux是数据管理框架,使用它主要是因为react组件化之后，组件间值的传递比较麻烦，于是使用一个顶层的组件来储存和分发；这样就不用传来传去了；但是react用起来不太方便；于是有了react-redux，使用provide和connect连接起来就可以mapStateToprops来接收参数和改参数；原来action只能是对象,redux-thunk 是一个中间件，使用了它就可以派发函数了；
虽然很多新的东西，前端日新月异，比如又出了hooks,vue2才刚了解，vue3就有消息了；所以有人抱怨学不动了,其实都是为了更方便的需求；

<!--more--> 

详细：

 Flux 官方推出的原始辅助数据层框架，用于管理react的数据，因为react 组件传递值要一层层传，很麻烦，所以就专门给了个管理层，放在顶层，都可以穿给其它组件；
升级的了是Redux：Redux=reducer+Flux

<div align=center>![avatar](/uploads/react/1.png)

## 原理：

Components：借书的人
Action creatotrs：要借什么书这句话
Store:图书馆管理员
Reducers:记录本

流程：
首先需要一个store,页面从store 中取数据；
如果页面想改变store中的数据，需要派发action给store;
store把action 和之前的数据一起给redux,redux结合之前的数据；
返回新的数据给store,store更新自己的数据，再告诉页面；页面联动；


<div align=center>![avatar](/uploads/react/2.png)





View 派发action,action 通过dispatch派发给store,store连同之前的state一起传给reducer;reducer返回新的数据给store，store改变state 

中间件：
redux-thunk ：以前action可以 函数，原来只能是对象；






下面分别是Redux和React-redux用法：

#### 一、redux

//先创建store
//创建reducer,传给store

<div align=center>![avatar](/uploads/react/3.png)

加入调试工具同时：https://github.com/zalmoxisus/redux-devtools-extension

//函数，返回默认state,并设定初始值,并让state是初始的defaultState

<div align=center>![avatar](/uploads/react/4.png)

<div align=center>![avatar](/uploads/react/5.png)



** 记得dispatch!!! **
store.dispatch(action)

this.state.currentpage

之前拿数据要这样拿：
引入就可以使用：

<div align=center>![avatar](/uploads/react/6.png)


#### 二、react-redux

但是有了react-redux之后，可以方便点，直接使用provide和connect；就可以用mapStateToprops和mapDispathToProps，方便操作了；

store和reducer一样：


在APP.js ，组件外层加一个Provider
<div align=center>![avatar](/uploads/react/7.png)

1.需要使用Provider，让组件可以使用store，stote提供给内部组件；
2.需要connect 连接store和组件

 连接并且提供两个方法

```
import {connect} from 'react-redux';
export default connect(mapStateToProps,mapDispathToProps)(WrappedWebserver) /
```
两个方法：
mapStateToprops：把store中的store数据给组件props;
mapDispatchToProps:调用dispatch 改变state中的数据

这里直接绑定一个事件changeInputValue，然后直接创建一个action,然后dispatch给了reducer，

<div align=center>![avatar](/uploads/react/8.png)



reducer判断action type，然后把获取到数据，新创建一个数据返回给store
<div align=center>![avatar](/uploads/react/9.png)


**  拿数据请记得使用： **
this.props！！！而不是this.state

包括函数：
```
<Button onClick={()=>this.props.ResultClick(record)} type="primary">
```