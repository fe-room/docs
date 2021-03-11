---
title: 【vue】vue3 core reactivity   implement code
date: 2021-3-10  19:02
categories:
 - Vue
tags:
 - vue
---
```js
// vue3 reactivity   implement code
let productInfo = reactivity({ price: 10, num: 5 });
let total = 0;
let activeEffect = null;
//执行阶段 触发依赖收集
function useEffect(effect) {
  activeEffect = effect;
  activeEffect();
  activeEffect = null;
}

const targetMap = new WeakMap();
useEffect(() => {
  total = productInfo.price * productInfo.num;
});


function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    dep.add(activeEffect);
  }
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);

  if (!depsMap) return;

  let dep = depsMap.get(key);

  if (dep) {
    dep.forEach((eff) => {
      eff();
    });
  }
}

function reactivity(target) {
  const handler = {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, val, receiver) {
      let oldVal = target[key];
      let result = Reflect.set(target, key, val, receiver);
      if (val !== oldVal) {
        trigger(target, key);
      }
      return result;
    },
  };

  return new Proxy(target, handler);
}

productInfo.price = 6;

console.log(total);

```