<template>
  <div id="app">
  </div>
</template>

<script>
import Vue from 'vue'
// 定义初始选项
var Hello = Vue.extend({
  template: `
    <div>
      <p v-if="flag">hello, {{name}}</p>
      <button @click="welcome">欢迎标语</button>
    </div>`,
  data () {
    return {
      name: 'zhangsan',
      flag: false
    }
  }
})
// 使用setTimeout是解决报#app元素找不到的警告
setTimeout(() => {
// 扩展选项
  new Hello({
    methods: {
      welcome () {
        this.flag = !this.flag
      }
    }
  }).$mount('#app')
}, 1000)
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
