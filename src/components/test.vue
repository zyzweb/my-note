<template>
  <div>
    11
    {{b}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: {b:'ss'},
      b:null
    }
  },
  mounted() {
    this.b = this.a.b
  }
}
</script>

<style>

</style>