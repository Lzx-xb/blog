---
title: Map() 
---



### 描述

>**Map** 对象是键值对的集合。Map 中的一个键只能出现一次；它在 Map 的集合中是独一无二的。Map 对象按键值对迭代——一个 for...of 循环在每次迭代后会返回一个形式为 [key，value] 的数组。迭代按插入顺序进行，即键值对按 set() 方法首次插入到集合中的顺序（也就是说，当调用 set() 时，map 中没有具有相同值的键）进行迭代。

### 使用

```js
let map = new Map();
```

### 属性以及方法

## Map.prototype.size <Badge text="属性"/>
    返回 Map 对象中的键值数量
    
```js
const map1 = new Map();

map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');

console.log(map1.size);
// expected output: 3
```

## Map.prototype.clear() <Badge text="方法"/>
    clear() 方法会移除 Map 对象中的所有元素。

```js
const map1 = new Map();

map1.set('bar', 'baz');
map1.set(1, 'foo');

console.log(map1.size);
// expected output: 2

map1.clear();

console.log(map1.size);
// expected output: 0
```

## Map.prototype.delete() <Badge text="方法"/>
    delete() 方法用于移除 Map 对象中指定的元素。

```js
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)

console.log(map1.has('bar'));
// expected result: false
```

## Map.prototype.entries() <Badge text="方法"/>
    entries() 方法返回一个新的迭代器对象，其中包含 Map 对象中按插入顺序排列的每个元素的 [key, value] 对。在这种情况下，这个迭代器对象也是一个可迭代对象，因此可以使用 for-of 循环。当使用 [Symbol.iterator] 时，它返回一个函数，该函数在调用时返回迭代器本身。

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Map.prototype.forEach() <Badge text="方法"/>

    forEach() 方法按照插入顺序依次对 Map 中每个键/值对执行一次给定的函数。

```js
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);
// logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## Map.prototype.get() <Badge text="方法"/>

    get() 方法从 Map 对象返回指定的元素。如果与所提供的键相关联的值是一个对象，那么你将获得该对象的引用，对该对象所做的任何更改都会有效地在 Map 对象中修改它。

```js
const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.get('bar')); // 返回 "foo"
console.log(myMap.get('baz')); // 返回 undefined
```

## Map.prototype.has() <Badge text="方法"/>

    has() 方法返回一个布尔值，指示具有指定键的元素是否存在。

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar"));  // true
console.log(myMap.has("baz"));  // false
```
## Map.prototype.keys() <Badge text="方法"/>

    keys() 返回一个引用的迭代器对象。它包含按照顺序插入 Map 对象中每个元素的 key 值。

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```

## Map.prototype.set() <Badge text="方法"/>

    set() 方法为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对。

```js
const myMap = new Map();

// 将一个新元素添加到 Map 对象
myMap.set('bar', 'foo');
myMap.set(1, 'foobar');

// 在 Map 对象中更新某个元素的值
myMap.set('bar', 'baz');

// 链式调用添加元素
myMap.set('bar', 'foo')
  .set(1, 'foobar')
  .set(2, 'baz');

```

## Map.prototype.values() <Badge text="方法"/>

    values() 方法返回一个新的迭代器对象。它包含按顺序插入 Map 对象中每个元素的 value 值。

```js
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```




