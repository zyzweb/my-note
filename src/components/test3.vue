<template>
  <div>
    <iframe src="" frameborder="0" ref="iframe"></iframe>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$refs.iframe);
  },
}
</script>

<style>

</style>