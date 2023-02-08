<template>
    <div class="container animate__animated animate__headShake">
        <span>当前页面展示效果</span>
    </div>
</template>

<script>
    import { removeWatermark, setWaterMark } from '../js/watermark';
    export default{
        data() {
            return {
                content: 'hello world!',
            }
        },
        mounted(){
            setWaterMark("lzx","梅花香自苦寒来")
        },
        destroyed(){
            removeWatermark();
        },
        methods: {
            
        }
    }
</script>
<style > 
@import '../styles/common.css';

    .container{
        margin: 20px;
    }
</style>
