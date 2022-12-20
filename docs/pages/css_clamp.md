---
title: 文本超出使用省略符号
---


>描述：在制作卡片过程中，title，description 有可能会超出边界，所以需要将超出边界部分做省略处理，这样可以维持设计的美观。 

### 代码演示

<div class="container">
        <div class="card">
            <img class="img" src="../.vuepress/public/logo.png" alt="">
            <span>标题：文本超出边界处理</span>
            <span>作者：lzx</span>
            <span class="clamp">介绍：lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，</span>
        </div>
</div>

<style>
    .container{
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card{
        padding: 10px;
        width: 200px;
        height: 250px;
        background-color: #ddffdd;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        
    }
    .img{
        width: 100px; 
        height: 100px;
        border-radius: 10px;
        margin: auto;
    }
    .clamp{
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>

### 核心代码


```html

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