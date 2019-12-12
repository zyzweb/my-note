<template>
  <div class="divB">
    <div>这是child1组件</div>
    <p>props: {{foo}}</p>
    <p>$attrs: {{$attrs}}</p>
    <!-- 通过v-bind 绑定$attrs属性，
         child2组件可以直接获取到father组件中传递下来的props（child1组件中声明的props没法通过$attr传递） -->
    <child2 v-bind="$attrs" v-on="$listeners"></child2>
  </div>
</template>
<script>
import child2 from './child2.vue'
export default {
  components: {
    child2
  },
  props: ['foo'],
  inheritAttrs: false,//$attrs继承父组件除props以外的属性
}
</script>
<style scoped>
.divB{
  width: 350px;
  height: 350px;
  border:1px solid #0f0;
  padding: 10px;
  color: #0f0;
}
</style>