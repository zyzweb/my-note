<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    };
  },
  mounted() {
    this.$loading.show();
    setTimeout(() => {
      this.$loading.close();
      this.msg = "加载完辽！";
    }, 3000);
  },
};
</script>

<style lang='scss' scoped>
</style>