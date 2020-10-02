<template>
  <el-table-column :prop="config.prop"
    :label="config.label"
    header-align="center"
    align="right">
    <template v-if="config.children">
      <my-column v-for="(item, index) in config.children"
        :key="index"
        :config="item"></my-column>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'MyColumn',
  props: {
    config: {
      type: Object
    }
  }
}
</script>

<style scoped>
</style>

