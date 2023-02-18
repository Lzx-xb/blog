---
title: 面试题
---

## 防抖节流

**节流**: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效

::: details 时间戳写法

使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行

``` js
function throttled1(fn, delay = 500) {
    let oldtime = Date.now()
    return function (...args) {
        let newtime = Date.now()
        if (newtime - oldtime >= delay) {
            fn.apply(null, args)
            oldtime = Date.now()
        }
    }
}

```
:::

::: details 定时器写法

使用定时器写法，delay毫秒后第一次执行，第二次事件停止触发后依然会再一次执行

``` js
function throttled2(fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}
```
:::


**防抖**: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

::: details 点击查看代码

```js
function debounce(func, wait) {
    let timeout;

    return function () {
        let context = this; // 保存this指向
        let args = arguments; // 拿到event对象

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
```
:::

## vue data为什么是一个函数

组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象

## 闭包的原理，优缺点

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）  

一个函数A，return其内部的函数B，被return出去的B函数能够在外部访问A函数内部的变量  

闭包形成的原理：作用域链，当前作用域可以访问上级作用域中的变量 闭包解决的问题：能够让函数作用域中的变量在函数执行结束之后不被销毁，同时也能在函数外部可以访问函数内部的局部变量  

闭包带来的问题：由于垃圾回收器不会将闭包中变量销毁，于是就造成了内存泄露，内存泄露积累多了就容易导致内存溢出。

## var let const 



## MVVM 双向绑定原理

Vue响应式指的是：组件的data发生变化，立刻触发试图的更新   

原理： Vue 采用数据劫持结合发布者-订阅者模式的方式来实现数据的响应式，通过Object.defineProperty来劫持数据的setter，getter，在数据变动时发布消息给订阅者，订阅者收到消息后进行相应的处理。 通过原生js提供的监听数据的API，当数据发生变化的时候，在回调函数中修改dom 核心API：Object.defineProperty Object.defineProperty API的使用   

作用: 用来定义对象属性  

特点： 默认情况下定义的数据的属性不能修改 描述属性和存取属性不能同时使用，使用会报错  

响应式原理： 获取属性值会触发getter方法 设置属性值会触发setter方法 在setter方法中调用修改dom的方法    

Object.defineProperty的缺点 
1. 一次性递归到底开销很大，如果数据很大，大量的递归导致调用栈溢出 
2. 不能监听对象的新增属性和删除属性 
3. 无法正确的监听数组的方法，当监听的下标对应的数据发生改变时

## 输出结果1

```js
let p = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
})
p.then(()=>{
    console.log(3);
})
console.log(4);

// 1 2 4 3
```

结果 ： 1 2 4 3

## 输出结果2

```js
let a = {};
let b = a;
a.age = 1;
b.name = "tom";
console.log(a, b);

// {age: 1, name: 'tom'}  {age: 1, name: 'tom'}
```

## 输出结果3

```js
let a = 1;
let b = a;
b = 3
console.log(a, b);

// 1 3 
```

## 本地缓存的几种方式，区别

cookie是由服务器端写入的，而SessionStorage、 LocalStorage都是由前端写入的，cookie的生命周期是由服务器端在写入的时候就设置好的，LocalStorage是写入就一直存在，除非手动清除，SessionStorage是页面关闭的时候就会自动清除。  

cookie的存储空间比较小大概4KB，SessionStorage、 LocalStorage存储空间比较大，大概5M。  

Cookie、SessionStorage、 LocalStorage数据共享都遵循同源原则，SessionStorage还限制必须是同一个页面。在前端给后端发送请求的时候会自动携带Cookie中的数据，但是SessionStorage、 LocalStorage不会 加分回答 由于它们的以上区别，所以它们的应用场景也不同，Cookie一般用于存储登录验证信息SessionID或者token，LocalStorage常用于存储不易变动的数据，减轻服务器的压力，SessionStorage可以用来检测用户是否是刷新进入页面，如音乐播放器恢复播放进度条的功能。

## 事件委托及优缺点

事件代理，俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素   

事件流的都会经过三个阶段： 捕获阶段 -> 目标阶段 -> 冒泡阶段，而事件委托就是在冒泡阶段完成  

事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素  

当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数  

适合事件委托的事件有：click，mousedown，mouseup，keydown，keyup，keypress  

### 事件委托存在两大优点：

减少整个页面所需的内存，提升整体性能
动态绑定，减少重复工作

### 事件委托也是存在局限性：

focus、blur这些事件没有事件冒泡机制，所以无法进行委托绑定事件  

mousemove、mouseout这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的  

如果把所有事件都用事件代理，可能会出现事件误判，即本不该被触发的事件被绑定上了事件  

## es6 快速去重

利用`Set()`类型数据无重复项：new 一个 Set()，参数为需要去重的数组，Set 会自动删除重复的元素，再将 Set 转为数组返回  






