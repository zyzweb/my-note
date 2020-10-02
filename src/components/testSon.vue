<template>
<div>
  <h1 @click="click">son</h1>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    click() {
      this.$emit('good', 111)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
