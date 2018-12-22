<template>
    <div>
        <p>{{data}}</p>
        <p @click="fn()">子组件向父组件传值</p>
        <p v-for="item in msg" :key="item.id" >
            <span>{{item.id}}</span>
            <span>{{item.text}}</span>
        </p>

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
                value:"这是子组件传递给父组件的值",
                msg: [
                    {id:0,text:'蔬菜'},
                    {id:1,text:'奶酪'},
                    {id:2,text:'随便'}
                ]
            }
        },
        methods:{
            fn(){
                this.$emit('listenEvent',this.value)
            }
        }
    }
</script>