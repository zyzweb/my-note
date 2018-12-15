<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js Ap1"/>
    <first :data="value" @listenEvent="one"></first>
    <two :data="good" @haha="im"></two>
    <p>{{ff}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import first from './components/first'
import two from './components/two.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    first,
    two
  },
  data(){
    return {
      value: '这是父组件传递过来的dongxi',
      good:'这是第二个',
      ff:''
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
</style>
