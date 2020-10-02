<template>
  <div class="index">
    <!-- <keep-alive :include="['page']" > -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import page from "./page";
export default {
  components: {
    page,
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>
<style>
.index {
  font-size: 30px;
}
</style>

