<template>
  <kde-panel class="container" :showFooter="false">
    <div class="content">
      <img src="../../image/home/playBill/playbill1.jpg" data-src="../../image/home/playBill/playbill1.jpg" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
  </kde-panel>
</template>

<script>
export default {
  components: {
    kdePanel: () => import('@/components/kde-panel.vue'),
  },
  data() {
    return {
      img1: [
        require('../../image/home/playBill/playbill1.jpg'),
        require('../../image/home/playBill/playbill2.jpg'),
        require('../../image/home/playBill/playbill3.jpg'),
        require('../../image/home/playBill/playbill4.jpg'),
        require('../../image/home/playBill/playbill5.jpg'),
        require('../../image/home/playBill/playbill6.jpg'),
        require('../../image/home/playBill/playbill7.jpg'),
        require('../../image/home/playBill/playbill8.jpg'),
        require('../../image/home/playBill/playbill9.jpg'),
      ],
    };
  },
  created() {
    // window.hidePlaceholder();
    this.initHeader();
  },
  mounted() {
    // 首先加载第一张图片
    // 定时器确保dom加载完毕
    const that = this;
    setTimeout(() => {
      const num = document.querySelectorAll('.content img').length;
      const img = document.querySelectorAll('.content img');
      let n = 0; // 存储图片加载到的位置，避免每次都从第一张图片开始遍历
      function lazyLoad() { // 监听页面滚动事件
        const seeHeight = document.documentElement.clientHeight; // 可见区域高度
        for (let i = n; i < num; i++) {
          // 第2张图片可能比可视区域加滚动条滚动高度还高,所以加5确保条件成立
          if (img[i].getBoundingClientRect().top < seeHeight) {
            if (img[i].getAttribute('src') === '') {
              img[i].src = that.img1[i];
            }
            n = i + 1;
          }
        }
      }
      // 滚动的元素注册scroll事件
      document.querySelector('.main-section').onscroll = lazyLoad;
    }, 1000);
  },
  activated() {
    // 配置导航栏的Title
    this.initHeader();
  },
  methods: {
    // 初始化头部,,,
    initHeader() {
      // 配置导航栏回退
      window.PALifeOpen.setGoBack({
        goBack: () => {
          window.history.back();
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~asset/css/common/mixin.scss";
.container {
  /deep/ .main-section {
    height: 100vh !important;
  }
  .content {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      vertical-align: bottom;
    }
  }
}
</style>
