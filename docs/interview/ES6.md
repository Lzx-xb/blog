---
title: let与const
---
## 概述

    ES6新增加了两个重要的 JavaScript 关键字: let 和 const。
    let 声明的变量只在 let 命令所在的代码块内有效.
    const 声明一个只读的常量，一旦声明，常量的值就不能改变.

## let命令

### 代码块内有效

>let 是在代码块内有效，var 是在全局范围内有效:  
::: details 点击查看示例
```js
{
  let a = 0;
  var b = 1;
}
a  // ReferenceError: a is not defined
b  // 1
```
:::

### 不能重复声明

>let 只能声明一次,否则报错, var 可以声明多次:  
::: details 点击查看示例
```js
let a = 1;
let a = 2;
var b = 3;
var b = 4;
a  // Identifier 'a' has already been declared
b  // 4
```
:::

### 不存在变量提升
>let 不存在变量提升，var 会变量提升:  

::: details 点击查看示例
```js
console.log(a);  //ReferenceError: a is not defined
let a = "apple";
 
console.log(b);  //undefined
var b = "banana";
```
:::

## const命令

const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。

### 基本用法

```js
const PI = "3.1415926";
PI  // 3.1415926

const MY_AGE;  // SyntaxError: Missing initializer in const declaration 赋初始值
```
### 暂时性死区:
```js
var PI = "a";
if(true){
  console.log(PI);  // Cannot access 'PI' before initialization
  const PI = "3.1415926";
}
```

::: tip  
ES6 明确规定，代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。代码块内，在声明变量 PI 之前使用它会报错。
:::

::: warning   
const 如何做到变量在声明初始化之后不允许改变的？其实 const 其实保证的不是变量的值不变，而是保证变量指向的内存地址所保存的数据不允许改动。此时，你可能已经想到，简单类型和复合类型保存值的方式是不同的。是的，对于简单类型（数值 number、字符串 string 、布尔值 boolean）,值就保存在变量指向的那个内存地址，因此 const 声明的简单类型变量等同于常量。而复杂类型（对象 object，数组 array，函数 function），变量指向的内存地址其实是保存了一个指向实际数据的指针，所以 const 只能保证指针是固定的，至于指针指向的数据结构变不变就无法控制了，所以使用 const 声明复杂类型对象时要慎重。
:::
