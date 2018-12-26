<template>
  <div>
    <h2>这是news组件</h2> {{msg}}
    <!-- <div class="one"></div> -->
    <child>
      <template slot-scope="a">
        <p v-text="a.item"></p>
      </template>
    </child>
  </div>
</template>

<script>

import child from './child';
export default {
  data() {
    return {
      msg: ''
    };
  },
  components:{
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



