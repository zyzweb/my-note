<template>
<div>

<h1 @click="good">111</h1>
</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      good() {
        this.$emit('hh',111,222)
      }
    },
  }
</script>

<style lang='scss' scoped>

</style>