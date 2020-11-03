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
  font-size: 12px;
}
</style>src\components\keep-alive表单demo\book.vue
