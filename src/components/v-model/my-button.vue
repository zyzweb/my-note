<template>
  <button @click="add">点击按钮自增 1</button>
</template>

<script>
export default {
  model: {
    prop: 'num', // 自定义属性名
    event: 'addNum' // 自定义事件名
  },
  props: {
    num: Number,
  },
  methods: {
    add() {
      this.$emit('addNum', this.num + 1)
    },
  }
}
</script>