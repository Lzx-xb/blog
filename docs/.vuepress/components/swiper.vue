<template>
    <div class="container">
        <span>{{ content }}</span>
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