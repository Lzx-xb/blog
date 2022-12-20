<template>
    <div class="container">
        <img class="animate__animated animate__jackInTheBox" style="width: 200px;height:200;" src="../public/logo.png">
        <button class="myBtn animate__animated animate__bounceInLeft" @click="goto">
            <span>宝剑锋从磨砺出</span>
        </button>
    </div>
</template>

<script>
    import 'animate.css';
    export default{
        data() {
            return {
                content: 'hello world!',
            }
        },
        methods: {
            goto(){
                window.location.href = '/blog/pages/vuepress'
            }
        }
    }
</script>
<style > 
@import '../styles/common.css';

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
