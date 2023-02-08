---
title: 盒模型
---

# 标准盒模型

标准盒模型的组成： content  + padding + border + margin;  
content是指设置的width/height;  
盒子的实际大小为： width + 左右padding + 左右border + 左右margin;

# 怪异盒模型

怪异盒模型的组成： content(width/height + padding + border) + margin;  
这里的content是指设置的width/height;
盒子的实际大小为： width + margin;

# 模型的转换

box-sizing: border-box (怪异盒模型) 或 content-box (标准盒模型)