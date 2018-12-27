<template>
  <div>
    <h2>这是news组件</h2> {{msg}}
    <!-- <div class="one"></div> -->
    <router-link to="/quanping">跳到全屏组件</router-link>
    <child>
      <template slot-scope="a">
        <p v-text="a.item"></p>
      </template>
    </child>
    <md-button class="md-primary">主要</md-button>
    <md-button class="md-raised md-warn">暖色</md-button>
    <!-- <md-button class="md-raised md-primary" disabled v-md-theme="'brown'">棕色</md-button> -->
  </div>
</template>

<script>
import child from "./child";
export default {
  data() {
    return {
      msg: ""
    };
  },
  components: {
    child
  }
};
</script>

<style>
/* .one {
  width: 200px;
  height: 200px;
  background-color: red;
} */
</style>



