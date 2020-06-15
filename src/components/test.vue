<template>
  <div>
    <input type="text" v-model="data" v-focus />
  </div>
</template>

<script>
import vue from "vue";
vue.directive("focus", {
  bind() {}, // 当绑定元素插入到 DOM 中。
  inserted(el, binding, vnode, oldVnode) {
    // 聚焦元素
    el.focus();
  },
  update() {},
  componentUpdated() {},
  unbind() {}
});
export default {
  data() {
    return {
      data: 666
    };
  }
};
</script>

<style lang='scss' scoped>
</style>  