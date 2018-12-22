<template>
    <div class="father">
        <h3>这是父组件</h3>
        <child>
            <div class="tmpl">
                <span>菜单1</span>
                <span>菜单2</span>
                <span>菜单3</span>
                <span>菜单4</span>
                <span>菜单5</span>
                <span>菜单6</span>
            </div>
        </child>
    </div>
</template>

<script>
    import Child from './slot-son.vue'
    export default {
        name: 'slotFather',
        data: function(){
            return {
                msg: ''
            }
        },
        components: {
            Child
        }
    }
</script>

