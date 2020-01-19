<template>
  <div class="first_box">
    第一页进去：
    <span class="but" @click="goInput">'表单' 缓存</span>

    <span class="but" @click="goList">'列表停留位置' 缓存</span>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      
    };
  },
  methods: {
    goInput() {
      this.$router.push({path:"/test1"});
    },
    goList() {
      this.$router.push({path:"/list"});
    }
  },
  mounted() {

  }
};
</script>

<style lang="less" scoped>
.first_box{
  padding-top:.5rem;
  font-size: .13rem;
}
.but{
  display: block;
  width:3rem;
  height:.6rem;
  line-height:.6rem;
  background: gray;
  font-size:.13rem;
  text-align: center;
  color:white;
  border-radius: .05rem;
  margin:.5rem 0 0 .3rem;
}
</style>