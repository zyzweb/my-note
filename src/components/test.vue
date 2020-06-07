<template>
  <div>
    <el-radio-group v-model="model" @change="change">
      <el-radio-button label="渠道"></el-radio-button>
      <el-radio-button label="机构"></el-radio-button>
      <el-radio-button label="团队"></el-radio-button>
    </el-radio-group>
    <el-table v-if="type" :data="data" style="width: 100%">
      <el-table-column prop="prop1" label="日期" width="width"></el-table-column>
      <el-table-column prop="prop2" :label="label" width="width"></el-table-column>
      <el-table-column prop="prop3" label="时间" width="width"></el-table-column>
      <el-table-column prop="prop4" label="团队" width="width"></el-table-column>
    </el-table>
    <el-table v-else :data="data" style="width: 100%">
      <el-table-column prop="prop1" label="日期" width="width"></el-table-column>
      <el-table-column prop="prop2" :label="label" width="width"></el-table-column>
      <el-table-column prop="prop3" label="时间" width="width"></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  methods: {
    change() {
      store
      if (this.model === "渠道") {
        this.type = true
      } else {
        this.type = false
      }
    }
  },
  computed: {
    label() {
      return this.model
    }
  },
  data() {
    return {
      model: "渠道",
      componentId: "",
      type: true,
      data: [
        {prop1:1,prop2:2,prop3:3,prop4:4},
        {prop1:1,prop2:2,prop3:3,prop4:4},
        {prop1:1,prop2:2,prop3:3,prop4:4},
      ],
    };
  }
};
</script>

<style lang='scss' scoped>
</style>