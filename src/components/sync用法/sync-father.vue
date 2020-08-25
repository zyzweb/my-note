<template>
  <div>
    <input type="button" value="我是父组件中的按钮" @click="show" />
    <child :isShow="isShow" @update:isShow="val => isShow = val" v-show="isShow" />
    <!-- <child :isShow.sync="isShow" v-show="isShow" /> 下面是上面的语法糖 -->
  </div>
</template>
<script>
/* sync相当于props的双向绑定,相当于子组件传值给父组件的语法糖 和v-model原理一样 都是绑定属性和事件*/
import child from "./sync-child";
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    child
  },
  methods: {
    show() {
      this.isShow = true;
    },
    good(val) {
      this.isShow = val
    }
  }
};
</script>