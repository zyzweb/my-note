<template>
  <div>
    <my-button v-model="number"></my-button> <!-- 与下面等价 -->
    <!-- <my-button :value="number" @input="number=$event.target.value"></my-button> --> 

  </div>
</template>
<script>
import myButton from "./my-button";
export default {
  data() {
    return {
      number: 1
    };
  },
  components: {
    myButton
  }
};
</script>