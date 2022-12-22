<template>
    <div>
        <div class="animate__animated animate__bounceInRight">
            <span >处理前</span>
        </div>
        <div class="container1 ">
            <div class="card animate__animated animate__zoomIn" v-for="item in list">
                <span>{{ item }}</span>
            </div>
        </div>
        <div class="animate__animated animate__bounceInRight animate__delay-1s">
            <span >处理后</span>
        </div>
        <div class="main" >
            <div class="card animate__animated animate__zoomIn animate__delay-2s" v-for="item in list">
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import 'animate.css';
export default{
    data() {
        return {
            list: ['1','2','3','4','5']
        }
    }
}
</script>

<style>
.container1, .main{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}
.container::after{
    width: 30%;
    content: '';
}
.card{
    width: 30%;
    height: 200px;
    background-color: #ddffdd;
    margin-bottom: 20px;
}
</style>