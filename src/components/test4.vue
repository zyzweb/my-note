<template>
  <div class="good" style="width:500px;height:500px;"></div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart: null,
      picBase64Info: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.chart.setOption({
        // title: {
        //   text: "某站点用户访问来源",
        //   subtext: "纯属虚构",
        //   left: "center"
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        animation: false,
        legend: {
          orient: "vertical",
          left: "right",
          y: "200px",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["40%", "30%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            label: {
              normal: {
                show: true,
                position: "inner"
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
      this.picBase64Info = this.chart.getDataURL();
    }
  }
};
</script>

<style>
.good {
  height: 100%;
}
</style>