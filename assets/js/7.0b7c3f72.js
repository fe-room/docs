(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{427:function(t,s,a){t.exports=a.p+"assets/img/vue-resource4.261bff6f.png"},503:function(t,s,a){t.exports=a.p+"assets/img/vue-resource1.5c82e090.jpeg"},504:function(t,s,a){t.exports=a.p+"assets/img/vue-resource3.a5c6fc4f.jpeg"},505:function(t,s,a){t.exports=a.p+"assets/img/vue-resource5.eab540ca.png"},506:function(t,s,a){t.exports=a.p+"assets/img/vue-resource6.b6f1b4bd.jpeg"},507:function(t,s,a){t.exports=a.p+"assets/img/vue-resource2.b3b09295.png"},532:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"简单的例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单的例子"}},[t._v("#")]),t._v(" 简单的例子")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" product "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue.js"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        product"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Socks"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("在Vue中如何将上述代码里data中的product变成响应式的呢？ 我们可以在vue的源码中找到如下部分\n"),n("img",{attrs:{src:a(503),alt:"vue-resource1"}}),n("br"),t._v("\n如图所示当我们new一个Vue的实例时，它将调用initMinxin方法,并在其中执行_init方法来初始化生命周期（lifecycle）、事件（events）、渲染（render）。"),n("br"),t._v("\n在Vue官方文档中"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命周期的图示"),n("OutboundLink")],1),t._v("与代码对应的关系如下图\n"),n("img",{attrs:{src:a(427),alt:"vue-resource4"}}),n("br"),t._v("\n在此处我们只来研究数据的响应式所以我们要关注的是"),n("strong",[t._v("initState")]),t._v("方法\n"),n("img",{attrs:{src:a(504),alt:"vue-resource4"}}),n("br"),t._v("\n如上图当data存在的时候我们调用"),n("strong",[t._v("initData")]),t._v("方法\n"),n("img",{attrs:{src:a(505),alt:"vue-resource4"}}),n("br")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observeArry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("walk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observeArray")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("items"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("walk")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keys "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineReactive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(506),alt:"vue-resource2"}}),n("br"),t._v("\n创建一个响应式数据代码的调用栈如下图所示：\n"),n("img",{attrs:{src:a(507),alt:"vue-resource2"}}),n("br")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[t._v("在Vue2响应式系统中需要注意的事项。")])]),n("h3",{attrs:{id:"_1-数组方法的变异"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-数组方法的变异"}},[t._v("#")]),t._v(" 1.数组方法的变异")]),t._v(" "),n("p",[t._v("在Vue中已经对push(),pop(),shift(),unshift(),splice(),sort(),reverse()等数组的方法进行了重新以保证调用时能触发更新。")]),t._v(" "),n("h3",{attrs:{id:"_2-响应式数据的设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应式数据的设置"}},[t._v("#")]),t._v(" 2.响应式数据的设置")]),t._v(" "),n("p",[t._v("在设置数组和对象为响应式时，使用常规的xxx['xxx'] = newValue 这种类似的方法无法将新添加的数据变成响应式，需要使用Vue提供的方法Vue.set()来设置以保证属性的响应性。"),n("br"),t._v("\n对于对象的多个属性 可以使用 obj = Object.assign({},obj,{xx:'xxx'})来设置。")])])}),[],!1,null,null,null);s.default=e.exports}}]);