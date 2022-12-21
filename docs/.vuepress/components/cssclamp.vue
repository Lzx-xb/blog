<template>
    <div class="container">
        <div class="card">
            <img class="img animate__animated animate__zoomIn" src="../public/logo.png" alt="">
            <span class="animate__animated animate__fadeInDown animate__delay-0.1s ">标题：文本超出边界处理</span>
            <span class="animate__animated animate__fadeInDown animate__delay-0.6s ">作者：lzx</span>
            <span class="clamp animate__animated animate__fadeInDown animate__delay-1s ">介绍：lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，</span>
        </div>
    </div>
</template>

<script>
import 'animate.css';
export default{
    data(){
        return{
            
        }
    }
}
</script>


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
