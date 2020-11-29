<template>
  <div class="father">
    <div>这是father组件</div>
    <child1 :foo="foo" :coo="coo" @upRocket="reciveRocket"></child1>
  </div>
</template>
<script>
import child1 from './child1.vue'
export default {
  data() {
    return {
      foo: "father组件",
      coo: "Hello,father"
    }
  },
  components: {
    child1
  },
  methods: {
    reciveRocket() {
      console.log("father组件")
      
    }
  }
}
</script>
<style scoped>
.father {
  width: 500px;
  height: 500px;
  padding: 10px;
  color: #f00;
  border: 1px solid #f00;
  display: inline-block;
  text-align: center;
  background-color: #999;
}
</style>