<template>
  <ul ref="box">
    <li v-for="(item, index) in arr" :key="index"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.arr = [1, 2, 3];
      this.$nextTick(() => { //?需要加一层 因为我们获取 DOM 元素 li 的时候其还未被渲染
        this.$refs.box.getElementsByTagName("li")[0].innerHTML = "hello";
      });
    }
  }
};
</script>