<template>
  <div ref="mix" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      mixChart: null,
      width: "800px",
      height: "800px"
    };
  },
  mounted() {
    this.initMix();
  },
  beforeDestroy() {
    if (!this.mixChart) {
      return;
    }
    this.mixChart.dispose();
    this.mixChart = null;
  },
  methods: {
    initMix() {
      this.mixChart = echarts.init(this.$refs.mix);
      const xData = (function() {
        const data = [];
        for (let i = 1; i < 4; i++) {
          data.push('2020年' + i + "月");
        }
        return data;
      })();
      this.mixChart.setOption({
        backgroundColor: "#344b58",
        toolbox: {
          feature: {
            saveAsImage: {
              type: 'png',
              name: '你好',
              title: '保存为图片'
            }
          }
        },
        title: {
          text: "statistics",
          x: "20",
          top: "20",
          textStyle: {
            color: "#fff",
            fontSize: "22"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        grid: {
          left: "5%",
          right: "5%",
          borderWidth: 0,
          top: 150,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          x: "5%",
          top: "10%",
          textStyle: {
            color: "#90979c"
          },
          data: ["当月清算规模", "存续规模", "清算中规模","管理规模"]
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }
        ],
        // dataZoom: [{
        //   show: false,
        //   height: 30,
        //   xAxisIndex: [
        //     0
        //   ],
        //   bottom: 30,
        //   start: 10,
        //   end: 80,
        //   handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        //   handleSize: '110%',
        //   handleStyle: {
        //     color: '#d3dee5'
        //   },
        //   textStyle: {
        //     color: '#fff' },
        //   borderColor: '#90979c'
        // }, {
        //   type: 'inside',
        //   show: true,
        //   height: 15,
        //   start: 1,
        //   end: 35
        // }],
        series: [
          {
            name: "当月清算规模",
            type: "bar",
            stack: "total",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(255,144,128,1)",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  },
                  position: "insideTop",
                  formatter(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [709, 1917, 2455]
          },
          {
            name: "存续规模",
            type: "bar",
            stack: "total",
            itemStyle: {
              normal: {
                color: "rgba(0,191,183,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "insideTop",
                  formatter(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [-327, -1776, -507]
          },
          {
            name: "清算中规模",
            type: "bar",
            stack: "total",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "insideTop",
                  formatter(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [327, 1776, 507]
          },
          {
            name: "管理规模",
            type: "line",
            stack: "total",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "rgba(252,230,48,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [1111, 2222, 3333]
          }
        ]
      });
    }
  }
};
</script>