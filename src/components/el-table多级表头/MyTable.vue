<template>
  <div class="my-table">
    <el-table 
    :data="data"
    >
      <my-column v-for="(item,index) in config" :key="index" :config="item"></my-column>
    </el-table>
  </div>
</template>

<script>
import MyColumn from './MyColumn'
export default {
  components: {
    MyColumn
  },
  props: {
    config: {
      type: Array
    },
    data: {
      type: Array
    }
  }
}
</script>
<style scoped>
</style>
