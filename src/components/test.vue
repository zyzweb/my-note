<template>
  <div>
    <button @click="click">点击切换</button>
    <transition>
      <p v-if="isHidden">使用默认前缀的过渡</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true
    };
  },
  methods: {
    click() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>

<style>
  /* 在此处声明过渡样式类，从一个状态过渡到另一个状态 */
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition-property: opacity; /* 过渡属性 */
    transition-delay: 100ms;  /* 延迟 */
    transition-duration: 900ms; /* 过渡时长 */
    transition-timing-function: linear; /* 贝塞尔曲线（动画速度曲线） */
  }
  .rotate-enter,
  .rotate-leave-to {
    transform: rotateY(90deg);
  }
  .rotate-enter-active,
  .rotate-leave-active {
    transform-origin: left;
    transition: transform 1s linear;
  }
</style>