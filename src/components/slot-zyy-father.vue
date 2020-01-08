<template>
  <div class="father">
    <h3>这是父组件</h3>
    <child>
      <!-- 第一次使用:用列表展示数据 --> <!-- user为自定义变量 -->
      <!-- <template slot-scope="user">
               <ul>
                   <li v-for="(item,index) in user.age" :key="index">{{item}}</li>
               </ul>
      </template>-->
      <!-- 第二次使用:直接展示数据 -->
      <!-- <template slot-scope="user">{{user.age}}</template> -->
      <!-- 直接使用v-slot指令 现在具名插槽也是用v-slot-->
      <template v-slot:default="user">
        {{user.age}}
      </template>
    </child>
  </div>
</template>

<script>
import Child from "./slot-zyy-son.vue";
export default {
  name: "slot-zyy-father",
  components: {
    child: Child
  },
  mounted() {
    console.log("this.$slots", this.$slots);
  }
};
</script>

<style scoped>
.tmp1 span {
  width: 50px;
  height: 50px;
  border: 1px solid #000;
}
</style>

