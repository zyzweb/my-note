<template>
  <div>
      <h2>chlid子组件部分</h2>
      <slot :data="data"></slot>
  </div>
</template>

<script>
export default {
    naem:'slot-zyy-son',
    props: ["message"],
    data(){
        return {
            data: ["小庄","cc","小张","小林","Leaf","Bob"]
        }
    }
}
</script>
