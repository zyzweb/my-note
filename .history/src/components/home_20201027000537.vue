<!--
 * @Description:
 * @Author: zhuyuanzheng
 * @Date: 2020-06-07 15:17:02
 * @LastEditors: zhuyuanzheng
 * @LastEditTime: 2020-10-27 00:05:31
-->
<template>
  <div class="home">
    <h3 class="nav">导航</h3>
    <el-scrollbar>
      <ul>
        <li class="list" v-for="(item,index) in dataList" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
import navigation from "@/navigation";
export default {
  data() {
    return {
      dataList: navigation
    };
  },
  mounted() {
      console.log('this.$route', this.$route.matched);

  },
};
</script>

<style  scoped>


.home {
  font-si
}
</style>
