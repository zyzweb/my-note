<template>
  <div>
    <el-select v-model="model" placeholder clearable filterable :filter-method="filterMethod" @blur="blur" @focus="focus">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: "",
      options: [
        { value: '1', label: "朱" },
        { value: '2', label: "原" },
        { value: '3', label: "正" },
      ],
      arr: [
        { value: '1', label: "朱" },
        { value: '2', label: "原" },
        { value: '3', label: "正" },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    filterMethod(val) {
      this.options = this.arr.filter((item) => {
        if(item.value.includes(val) ||
        item.value.toUpperCase().includes(val.toUpperCase())) {
          return true
        } else {
          this.options = JSON.parse(JSON.stringify(this.arr))
        }
      });
    },
    blur(e) {
      if (this.options.length > 0) return
      this.model = e.target.value
    },
    focus(e) {
      this.options = JSON.parse(JSON.stringify(this.arr));
    },
  },
};
</script>

<style lang='scss' scoped>
</style>