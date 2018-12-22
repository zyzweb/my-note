<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js Ap1"/>
    <first :data="value" @listenEvent="one"></first>
    <two :data="good" @haha="im"></two>
    <p>{{ff}}</p>
    <slot-father></slot-father>
    <slot-zyy></slot-zyy>
    
  </div>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import first from './components/first.vue'
import two from './components/two.vue'
import slotFather from './components/slot-father.vue'
import slotZyy from './components/slot-zyy-father'
// helloWorld first two 都是子组件

export default {
  name: 'app',
  components: {
    HelloWorld,
    first,
    two,
    slotFather,
    slotZyy
  },
  data(){
    return {
      value: '这是父组件传给第一个子组件的值',
      good:'这是父组件传给第二个子组件的值',
      ff:'这是父组件自己的值'
    }
  },
  methods:{
    one(val){
      alert(val)
    },
    im(i){
      // alert(i)
      this.ff=i
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
