<template>
  <div id="app">
    <h1>这是根组件</h1>

    <!-- <router-link to="/gaizao">跳转改造</router-link> <br>
    <router-link to="/news">跳转news</router-link><br>
    <router-link to="/material">跳转material</router-link> -->

     <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>  <!-- 这样的话只有keepAlive属性为true才能展示 -->
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> <!-- 当keepAlive属性为false时时这个路由 -->

    
    <!-- 中间路由 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      age: 16
    }
  },
  mounted() {
    this.$nextTick(function() {
      console.log(this);
      console.log(this.$data);
    })
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
.good {
  line-height: 20px;
}
</style>
