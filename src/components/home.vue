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
  }
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 18px;
  .nav {
    text-align: center;
  }
  .list {
    text-align: center;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color:blueviolet;
  }
  a:hover {
      color:green;
  }
}
</style>