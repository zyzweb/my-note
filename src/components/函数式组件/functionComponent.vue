<template>
  <div>
    <functional-button @click="log">click me</functional-button>
  </div>
</template>

<script>
import FunctionalButton from "./functionalButton";
export default {
  components: {
    FunctionalButton
  },
  methods: {
    log() {
      console.log("click");
    }
  }
};
</script>

<style>
</style>