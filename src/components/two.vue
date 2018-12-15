<template>
    <div>
        <p @click="three">{{data}}</p>

    </div>
</template>
<script>
    export default {
        name:'two',
        props:{
            data:String
        },
        data(){
            return{
                value3:"这是第二个子组件给父组件的东西"
            }
        },
        methods:{
            three(){
                this.$emit('haha',this.value3)
            }
        }
    }
</script>
