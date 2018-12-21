<template>
    <div class="child">
        <h3>这是子组件</h3>
        <slot></slot>
    </div>
</template>

<script>
export default {
    // name: 'child',
    data: function(){
        return {
            msg: ''
        }
    }
}
</script>