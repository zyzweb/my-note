
<template>
  <div>
    <icon-svg icon-class="dashboard" />
  </div>
</template>

<script>
//引入svg组件
import IconSvg from "./font-picture" ;

//全局注册icon-svg
// Vue.component("icon-svg", IconSvg);

export default {
  components: {
    IconSvg
  }
};
</script>

<style>
</style>