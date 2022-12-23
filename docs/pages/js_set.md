---
title: Set()
---

### 描述

    Set对象是值的集合，你可以按照插入的顺序迭代它的元素。  Set 中的元素只会出现一次，即 Set 中的元素是唯一的。
    另外，NaN 和 undefined 都可以被存储在 Set 中，  
    NaN 之间被视为相同的值（NaN 被认为是相同的，尽管 NaN !== NaN）。

## Set.prototype.size <Badge text="属性"/>
    size 属性将会返回 Set 对象中（唯一的）元素的个数。

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3

```

## Set.prototype.add() <Badge text="方法"/>

    如果 Set 对象中没有具有相同值的元素，则 add() 方法将插入一个具有指定值的新元素到 Set 对象中。

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add('some text'); // 可以链式调用

console.log(mySet);
// Set [1, 5, "some text"]
```

## Set.prototype.clear() <Badge text="方法"/>

    clear() 方法移除 Set 对象中所有元素。

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size);       // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size);       // 0
console.log(mySet.has("foo")); // false
```

## Set.prototype.delete() <Badge text="方法"/>

    delete() 方法从 Set 对象中删除指定的值（如果该值在 Set 中）。

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // 返回 false，不包含 "bar" 这个元素
console.log(mySet.delete("foo")); // 返回 true，删除成功

console.log(mySet.has("foo"));    // 返回 false，"foo" 已经成功删除

//对象的删除
const setObj = new Set(); // 创建一个新 set

setObj.add({ x: 10, y: 20 }); // 在 set 中添加对象

setObj.add({ x: 20, y: 30 }); // 在 set 中添加对象

// 删除任何 'x > 10' 的点
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## Set.prototype.entries() <Badge text="方法"/>

    entries() 方法返回一个新的迭代器对象，这个对象包含的元素是类似 [value, value] 形式的数组，value 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序。由于集合对象不像 Map 对象那样拥有 key，然而，为了与 Map 对象的 API 形式保持一致，故使得每一个条目的 key 和 value 都拥有相同的值，因而最终返回一个 [value, value] 形式的数组。

```js
const mySet = new Set();
mySet.add('foobar');
mySet.add(1);
mySet.add('baz');

const setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```
## Set.prototype.forEach() <Badge text="方法"/>

    forEach() 方法对 Set 对象中的每个值按插入顺序执行一次提供的函数。

```js

function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);

// expected output: "s[foo] = foo"
// expected output: "s[bar] = bar"
// expected output: "s[undefined] = undefined"
```

## Set.prototype.has() <Badge text="方法"/>

    has() 方法返回一个布尔值来指示对应的值是否存在于 Set 对象中。

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo"));  // true
console.log(mySet.has("bar"));  // false

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1));        // true
console.log(set1.has({ key1: 1 })); // false, 因为它们是不同的对象引用
console.log(set1.add({ key1: 1 })); // 现在 set1 包含 2 个条目

```

## Set.prototype.keys() <Badge text="方法"/>

::: tip
备注： keys() 方法是该方法的别名（与 Map 对象相似）。因此这里重定向 keys() 页。  
它的行为完全相同，并返回 Set 元素的值。
:::

## Set.prototype.values() <Badge text="方法"/>

    values() 方法返回一个新的迭代器对象，该对象按插入顺序包含 Set 对象中每个元素的值。

```js
const mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

const setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```
