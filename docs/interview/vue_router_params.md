---
title: vue 路由参数query 与 params 的区别
---

# query

- query传递过来参数信息会显示在url中，相当于get请求。
- query刷新页面的时候参数不会消失

# params

- params传过来的参数不会显示到地址栏中，相当于post请求
- params在刷新页面的时候参数会消失，可以考虑本地存储解决此问题