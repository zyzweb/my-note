<template>
  <div>
    我是一个子组件，我在红色的海洋里！
    <input type="button" value="点我隐身" @click="upIsShow" />
  </div>
</template>
<script>
export default {
  methods: {
    upIsShow() {
      this.$emit("update:isShow", false);
    }
  }
};
</script>