(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{427:function(t,n,s){t.exports=s.p+"assets/img/vue-resource4.261bff6f.png"},508:function(t,n,s){t.exports=s.p+"assets/img/fn-com2.cfbcb163.png"},509:function(t,n,s){t.exports=s.p+"assets/img/fn-com3.55450f75.png"},510:function(t,n,s){t.exports=s.p+"assets/img/fn-com6.000b711d.png"},511:function(t,n,s){t.exports=s.p+"assets/img/fn-com5.e98d7f58.png"},512:function(t,n,s){t.exports=s.p+"assets/img/fn-com4.3de56a63.png"},534:function(t,n,s){"use strict";s.r(n);var a=s(6),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"组件挂载和更新的机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件挂载和更新的机制"}},[t._v("#")]),t._v(" 组件挂载和更新的机制")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'beforeMount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Watcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" noop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如上述代码,mountedComponent这个函数在哪执行?在有template的情况下又如何执行呢？"),a("br"),t._v(" "),a("img",{attrs:{src:s(427),alt:"An image"}}),t._v("\n当vm.$opptions.el存在时将会调用vm.$mount方法。执行过程如下图:"),a("br"),t._v(" "),a("img",{attrs:{src:s(508),alt:"An image"}}),t._v("\n如上图所示此时会进行判断是否存在渲染函数，判断是否存在template将会调用complieToFunctions编译成渲染函数再执行。\n我们的目标mountedComponent就在$mounted中如下图:\n"),a("img",{attrs:{src:s(509),alt:"An image"}}),t._v("\n而在mountedComponent函数则先执行vm._render执行返回Virtual Node再调用vm._update。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(510),alt:"An image"}}),t._v(" "),a("img",{attrs:{src:s(511),alt:"An image"}}),t._v(" "),a("img",{attrs:{src:s(512),alt:"An image"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);