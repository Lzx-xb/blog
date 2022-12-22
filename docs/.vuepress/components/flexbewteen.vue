<template>
    <div>
        <div class="wow bounceInDown" style="margin: 10px;" >
            <span>处理前</span>
        </div>
        <div class="container1">
            <div class="flex-card wow bounceInRight"  v-for="item in list">
                <span style="padding: 10px;">{{ item }}</span>
            </div>
        </div>
        <div class="wow bounceInDown" style="margin: 10px;" >
            <span>处理后</span>
        </div>
        <div class="main">
            <div class="flex-card wow bounceInRight"  v-for="item in list">
                <span style="padding: 10px;">{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script>
// import 'animate.css';
//  import '../wowjs/animate.css';
//import "wowjs/css/libs/animate.css";
//  import  WOW  from '../wowjs/WOW.js';
//import { WOW } from "wowjs";
export default {
    data() {
        return {
            list: ['1', '2', '3', '4', '5']
        }
    },
    mounted() {
       
    }
}
</script>

<style>
.container1,.main {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

.main::after {
    width: 30%;
    content: '';
}

.flex-card {
    border-radius: 10px;
    width: 30%;
    height: 150px;
    background-color: #ddffdd;
    margin-bottom: 20px;
}
</style>
