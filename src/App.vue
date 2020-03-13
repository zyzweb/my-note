<template>
  <div id="app">
    <!-- <h1>这是根组件</h1> -->

    <!-- <router-link to="/gaizao">跳转改造</router-link> <br>
    <router-link to="/news">跳转news</router-link><br>
    <router-link to="/material">跳转material</router-link> -->

     <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>  这样的话只有keepAlive属性为true才能展示
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> 当keepAlive属性为false时时这个路由  -->

    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs> -->
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane class="temp" label="VUE" name="first">
    </el-tab-pane>
    <el-tab-pane class="temp"  label="SF" name="second">
       <iframe v-if="ifArr.second"   class="ifa" scrolling=auto src="https://segmentfault.com/" frameborder="0"></iframe>
    </el-tab-pane>
    <el-tab-pane class="temp"  label="百度" name="third">
       <iframe v-if="ifArr.third"  class="ifa" scrolling=auto src="https://www.baidu.com/" frameborder="0"></iframe>
    </el-tab-pane>
  </el-tabs> -->
    <!-- 中间路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
// import Particle from 'zhihu-particle'
export default {
  name: "app",
  components: {},
  data() {
    return {
      activeName: 'first',
        ifArr:{
          first:true,
          second:false,
          third:false
        }
    }
  },
  methods: {
      handleClick(tab, event) {
       let flagName=tab.name
       this.ifArr[flagName]=true
      }
  },
  mounted() {
    // new Particle(document.getElementById('app'),{interactive:true, density: 'low'})
    // axios.get('/data.json').then(res => console.log(res))
    // this.$nextTick(function() {
    //   console.log(this);//vuecomponent实例
    //   console.log(this.$data);
    //哈哈
    //
    // })
    //test
    //test
  }
};
</script>
<style>

</style>
