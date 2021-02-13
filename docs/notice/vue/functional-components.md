---
title: 【vue原理解析】Functional Components
date: 2021-2-12  16:10
categories:
 - frontEnd
tags:
 - vue
---
## 简单的例子
```js
<div id="app">
    <big-topic>
       Hiking Boots
    </big-topic>
</div>
<script src="vue.js"></script>
<script>
    Vue.component('big-topic', {
        render(h) {
            return h('h1','Topic:' + this.$slots.default)
        }
    })
    // 定义函数组件时
    Vue.component('big-topic', {
        functional: true,
        render(h, context) {
            return h('h1','Topic:' + context.$slots.default)
        }
    })
    new Vue({
        el: '#app'
    })
   
</script>
```
#### 在某些情况下我们是不需要一个那么复杂的组件来实现对应的功能，这个时候可以用Function Components来替代。
## 函数组件需要注意的点：
#### 1.函数组件没有自己的data，computed，watchers,lifecycle methods,和methods。
#### 2.用Vue.component定义函数组件时添加配置functional: true,render函数中将多一个参数context来访问props,children,data,parent,listeners。
#### 3.在单Vue文件中
```js
    <template functional>  
    </template>    
```
#### 4.使用函数组件可以提升性能是因为函数组件不会生成实例，创建一个实例的成本比较高，函数组件一般用于作为叶子节点类型的组件