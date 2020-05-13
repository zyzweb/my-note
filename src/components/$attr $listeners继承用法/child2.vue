<template>
  <div class="child2">
    <div>这是child2组件</div>
    <p>$attrs: {{$attrs}}</p>
    <p>点击child2组件的按钮触发father组件的reciveRocket方法</p>
    <button type="button" @click="changeFunction">child2组件的按钮</button>
  </div>
</template>
<script>
//child2继承了father传递给child1的$attrs同时也继承了father传递给child1的事件监听器
export default {
  inheritAttrs: false,
  methods: {
    changeFunction() {
      this.$emit('upRocket')
    }
  }
}
</script>
<style scoped>
.child2 {
  width: 200px;
  height: 200px;
  border: 1px solid #00f;
  padding: 10px;
  color: #00f;
}
</style>