<template lang="html">
  <div id="bPage">
    <div class="content" :style="{height: contentH + 'px'}" ref="wrapper" @scroll="scrollEvent()">
      <Loadmore class="LoadMore" :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
        <div class="item" v-for="(index, elem) in dataArray" @click="itemClick(index, elem)">
          <p class="single">list： {{index}}</p>
        </div>
      </Loadmore>
    </div>

  </div>
</template>

<script>
import { Loadmore } from 'mint-ui';

let isFromC = false;

export default {
  name:"list",
  data() {
    return {
      dataArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      contentH: 0
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name != 'details') {
      isFromC = false;
    } else {
      isFromC = true;
    }

    next();
  },
  components: {
    Loadmore
  },
  mounted() {
    // mint-ui loadmore组件需要包裹，且内容高度要高去包裹才可加载更多，所以给它一个 指定的高度
    this.contentH = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  },
  activated() {
    if (isFromC) { // 来自details页面
      this.$refs.wrapper.scrollTop = this.$store.state.pageYOffset;

    } else { // 滚动到最顶，数据初始化
      this.$refs.wrapper.scrollTop = 0;
      this.dataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  },
  methods: {
    // 下拉刷新
    loadTop() {
      let that = this;
      setTimeout(function() {
        that.dataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        that.$refs.loadmore.onTopLoaded();
      }, 1500);
    },
    // 上拉加载更多
    loadBottom() {
      let that = this;
      setTimeout(function() {
        let tempArray = [];
        let lastItem = that.dataArray[that.dataArray.length - 1];
        for (let i = 0; i < 10; i ++) {
          that.dataArray.push(i + lastItem + 1);
        }
        that.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },
    itemClick(item, index) { // 进入details页面
      // 保存滚动条位置
      this.$store.commit('setPageYOffset', this.$refs.wrapper.scrollTop);
      this.$router.push({
        name: 'details',
        params: {
          item: item,
          index: index
        }
      });
    },
    scrollEvent() {
      console.log('scrollEvent');
    }
  }
}
</script>

<style scoped>
.single {
  height: 1.5rem;
  line-height: .8rem;
  font-size: .14rem;
  background-color: gray;
  color: white;
  padding-left: .12rem;
  margin: .12rem .12rem .12rem .12rem;
}

.content {
  margin-top: .5rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  /* touch-action: none; */
}

</style>
