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
        title: {
          text: "公募规模(不包含专户)",
          left: "center",
        //   backgroundColor: 'yellow',
          textStyle: {
              color: 'white'
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "团队规模",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            //修改字体颜色
            itemStyle: {
                  normal: {
                      label: {
                          textStyle: {
                            color:'white',
                              fontSize: 14,
                              fontWeight:'bolder'
                          }
                      },
                    labelLine : {
                          lineStyle:{
                            color:'black'
                          }
                      }
                  }
              },
            data: [
              { value: 2000, name: "货币型"},
              { value: 310, name: "债券型" },
              { value: 234, name: "股票型" },
            ],
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
}
</style>