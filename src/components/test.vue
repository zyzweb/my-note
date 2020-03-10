<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "Tue Mar 03 2020 00:00:00 GMT+0800 (中国标准时间)",
      // value1: "2020-1-21",
    };
  }
};
</script>