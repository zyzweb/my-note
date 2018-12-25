<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js Ap1"/>
    <first :data="value" @listenEvent="one"></first>
    <two :data="good" @haha="im"></two>
    <p>{{ff}}</p>
    <slot-father></slot-father>
    <slot-zyy></slot-zyy>
    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="666" ></el-input-number>
    <check></check>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import first from './first.vue'
import two from './two.vue'
import slotFather from './slot-father.vue'
import slotZyy from './slot-zyy-father.vue'
import check from './绑定checked值.vue'
// helloWorld first two 都是子组件

export default {
  components: {
    HelloWorld,
    first,
    two,
    slotFather,
    slotZyy,
    check
  },
  data(){
    return {
      // value: '这是父组件传给第一个子组件的值', 
      good:'这是父组件传给第二个子组件的值',
      ff:'这是父组件自己的值',
       num1: 1,
    }
  },
  methods:{
    one(val){
      alert(val)
    },
    im(i){
      // alert(i)
      this.ff=i
    },
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
