---
title: vuepress使用wow.js问题总结
---

### 导入问题

```npm
    npm install wowjs
```

>导入依赖后使用，在本地 let wow = new WOW({}),wow.init();看似没什么大问题。  
>但是在run docs:build后会报错，window is not defined; [查阅官网][1]发现一些组件和库导入失败，在网上翻阅了一些答案后，并结合自己的库的使用。使用一下方式来导入wowjs组件

1. wow.js以及animate.css的准备  
    在node_modules中wow.js包中的WOW.js以及css文件下的animate.css文件拷贝到自己的资源目录中。我的做法就是在.vuepress目录下新建wowjs文件夹，把两个文件放入改文件夹中。
2. 把配置写在enhanceApp.js中  
    配置如下：  
```js
import "./wowjs/animate.css";
export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
        import('./wowjs/WOW.js').then((m)=> {
            // m 是一个什么类型？这里自行输出看下，Class继承wow.js。
            const wow = new m.default;
            wow.init();
            
         })
       },
   })
};
```

::: tip
    wow.js使用是可以了，但在移动端查看时发现了一个问题。  
    当wow.js动画生效时，页面会自动回到顶部，这个问题到现在依然存在还没有解决。
:::

[1]: https://vuepress.vuejs.org/zh/guide/using-vue.html