<template>
  <div>
      <h2 class="good">chlid子组件部分</h2>
      <slot :age="first"></slot>
  </div>
</template>

<script>
export default {
    name:'slot-zyy-son',
    props: ["message"],
    data(){
        return {
            first: ["小庄","cc","小张","小林","Leaf","Bob"]
        }
    },
    
}
</script>
