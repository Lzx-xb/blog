---
title: ES6 Map 与 Set
---

## Map 对象

Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

### Map 和 Objects 的区别

+ 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
+ Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
+ Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
+ Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

### Map 中的 key

Map 中的key 可以是**字符串，对象，函数，NaN**，虽然 NaN 和任何值甚至和自己都不相等(NaN !== NaN 返回true)，NaN作为Map的键来说是没有区别的。

::: details 点击查看示例
```js
//字符串
var myMap = new Map();
var keyString = "a string"; 
myMap.set(keyString, "和键'a string'关联的值");
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get("a string");   // "和键'a string'关联的值"
                         // 因为 keyString === 'a string'

//对象
var myMap = new Map();
var keyObj = {};
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.get(keyObj); // "和键 keyObj 关联的值"
myMap.get({}); // undefined, 因为 keyObj !== {}

//函数
var myMap = new Map();
var keyFunc = function () {};// 函数
myMap.set(keyFunc, "和键 keyFunc 关联的值")；
myMap.get(keyFunc); // "和键 keyFunc 关联的值"
myMap.get(function() {}) // undefined, 因为 keyFunc !== function () {}

//NaN
var myMap = new Map();
myMap.set(NaN, "not a number");
myMap.get(NaN); // "not a number"
var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"

```

## Set 对象

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

### Set 中的特殊值

- +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；
- undefined 与 undefined 是恒等的，所以不重复；
- NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。

