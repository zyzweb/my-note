<template>
  <div class="father">
    <h3>这是父组件</h3>
    <child>
      <!-- 第一次使用:用flex展示数据 -->
      <template slot-scope="user"> <!-- user自己设的一个 -->
        <div class="tmp1">
          <span
            v-for="(item,index) in user.data"
            :key="index"
          >{{item}}</span>
        </div>
      </template>
      <!-- 第二次使用:用列表展示数据 -->
      <!-- <template slot-scope="user">
               <ul>
                   <li v-for="(item,index) in user.data" :key="index">{{item}}</li>
               </ul>
            </template> -->
      <!-- 第三次使用:直接展示数据 -->
      <!-- <template slot-scope="user">
                {{user.data}}
            </template> -->
    </child>
  </div>
</template>

<script>
import Child from "./slot-zyy-son.vue";
export default {
  name:'slot-zyy-father',
  components: {
    child: Child
  }
};
</script>

<style>
.tmp1 span {
  width: 50px;
  height: 50px;
  border: 1px solid #000;
}
</style>

