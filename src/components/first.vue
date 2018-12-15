<template>
    <div>
        <p>{{data}}</p>
        <p @click="fn()">子组件向父组件传值</p>
    </div>
</template>
<script>
    export default {
        name:'first',
        props:{
            data:String
        },
        data(){
            return{
                value:"这是子组件传递给父组件的值"
            }
        },
        methods:{
            fn(){
                this.$emit('listenEvent',this.value)
            }
        }
    }
</script>