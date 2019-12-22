<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    mounted() {
    console.log('this.$slots', this.$slots);//{default:[VNode,_rendered: true]}
    },
}
</script>

<style>

</style>