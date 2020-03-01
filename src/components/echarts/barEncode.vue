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
        dataset: {
          source: [
            ["amount", "team"],
            // [89.3, 58212, 'Matcha Latte'],
            // [57.1, 78254, 'Milk Tea'],
            // [74.4, 41032, 'Cheese Cocoa'],
            // [50.1, 12755, 'Cheese Brownie'],
            // [89.7, 20145, 'Matcha Cocoa'],
            // [68.1, 79146, 'Tea'],
            [500, "母公司团队"],
            [1500, "子公司团队"]
          ]
        },
        grid: {
          containLabel: true
        },
        xAxis: {
          name: "",
          axisLine: {
            lineStyle: {
              color: "yellow",
              width: 2
            }
          }
        },
        yAxis: {
          type: "category",
          //设置坐标轴字体颜色和宽度
          axisLine: {
            lineStyle: {
              color: "yellow",
              width: 2
            }
          }
        },
        // visualMap: {
        //     orient: 'horizontal',
        //     left: 'center',
        //     min: 10,
        //     max: 100,
        //     text: ['High Score', 'Low Score'],
        //     // Map the score column to color
        //     dimension: 0,
        //     inRange: {
        //         color: ['#D7DA8B', '#E15457']
        //     }
        // },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "team" column to Y axis
              y: "team"
            }
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