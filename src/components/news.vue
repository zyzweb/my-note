<template>
    <div>
        <h2>这是news组件</h2>  {{msg}}
        <div class="one"></div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:666
        }
    }
}
</script>

<style>
    .one {
        width: 200px;
        height: 200px;
        background-color: red;
    }
</style>



