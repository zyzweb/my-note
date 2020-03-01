<template>
  <div class="good"></div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart: null
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
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
          //   show: false,
        },
        //右上角图标
        // toolbox: {
        //   feature: {
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },

        series: [
          {
            radius: "100%",
            name: "业务指标",
            type: "gauge",
            axisLine: {
              show: false,
              lineStyle: {
                width: 10
              }
            },
            title: {
            //   show: false,
              offsetCenter:[0,0], //标题位置相对中心位置
                color:'white'
            },
            detail: { formatter: "{value}%", fontSize: 10, color: "white" },
            data: [{ value: 60, name: "公司KPI得分" }]
          }
        ]
      });
    }
  }
};
</script>

<style>
.good {
  height: 100%;
  background-color: #2c333b;
}
</style>