<template>
  <div class="books">
    <button @click="clickOne">{{clickOneDate}}</button>
  </div>
</template>
<script>
export default {
  name: "books",
  data() {
    return {
      clickOneDate: 1
    };
  },
  methods: {
    clickOne() {
      this.clickOneDate = 2;
    }
  }
};
</script>