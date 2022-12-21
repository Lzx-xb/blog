---
title: 文本超出使用省略符号
tags:
    - 配置
    - clamp
    - css
---


>描述：在制作卡片过程中，title，description 有可能会超出边界，所以需要将超出边界部分做省略处理，这样可以维持设计的美观.
>

### 代码演示

<cssclamp/>

### 核心代码


```vue
<span class="clamp">介绍：lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，</span>

<style>
    .clamp{
        overflow: hidden;
        -webkit-line-clamp: 2;//设置行数;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>

```