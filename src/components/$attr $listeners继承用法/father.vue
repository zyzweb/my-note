<template>
  <div class="divA">
    <div>这是father组件</div>
    <child1 :foo="foo" :coo="coo" @upRocket="reciveRocket"></child1>
  </div>
</template>
<script>
import child1 from './child1.vue'
export default {
  data() {
    return {
      foo: "A组件",
      coo: "Hello,A"
    }
  },
  components: {
    child1
  },
  methods: {
    reciveRocket() {
      console.log("A组件")
    }
  }
}
</script>
<style scoped>
.divA{
  width: 500px;
  height: 500px;
  padding: 10px;
  color: #f00;
  border:1px solid #f00;
}
</style>