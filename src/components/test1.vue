<template>
  <div>
    <el-button type="primary" size="mini" @click="triggerEmail">触发邮件</el-button>
    <el-dialog align="center" title="编辑" :visible.sync="dialogVisible" width="40%">
      <el-form>
        <el-form-item label="邮箱:" label-width="70px">
          <el-input type="textarea" v-model="email" size="mini"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="tableData" border>
      <el-table-column prop="a" label="AUM" width="200"></el-table-column>
      <el-table-column prop="b" label="母公司" width="100"></el-table-column>
      <el-table-column prop="c" label="子公司" width="100"></el-table-column>
      <el-table-column prop="d" label="合计" width="100"></el-table-column>
    </el-table>

    <div ref="pie" style="width:500px;height:300px;"></div>
    <div ref="mixParent" style="width:800px;height:500px;"></div>
    <div ref="mixSon" style="width:800px;height:500px;"></div>
    <el-table :data="specialIncrease">
      <el-table-column prop label="产品类别"></el-table-column>
      <el-table-column prop label="产品代码"></el-table-column>
      <el-table-column prop label="产品名称"></el-table-column>
      <el-table-column prop label="产品规模"></el-table-column>
      <el-table-column prop label="合同期限"></el-table-column>
      <el-table-column prop label="管理费率"></el-table-column>
    </el-table>
    <el-table :data="liquidate">
      <el-table-column prop label="类别"></el-table-column>
      <el-table-column prop label="清算数量(只)"></el-table-column>
      <el-table-column prop label="清算规模(亿元)"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      email:'',
      dialogVisible: false,
      specialIncrease: [],
      liquidate: [],
      constArr1: ["母公司单一", "母公司集合", "子公司单一", "子公司集合"],
      constArr2: ["母公司", "集合", "单一", "子公司", "集合", "单一"],
      tableData: [{ a: "20年3月管理规模(亿元)", b: 1, c: 2, d: 3 }],
      pieChart: null,
      mixChart: null,
      picBase64Info: null
    };
  },
  mounted() {
    this.initPie();
    this.initMixParent();
    this.initMixSon();
  },
  beforeDestroy() {
    if (!this.mixChart || !this.mixChart) {
      return;
    }
    this.mixChart.dispose();
    this.pieChart.dispose();
    this.mixChart = null;
    this.pieChart = null;
  },
  methods: {
    triggerEmail() {
      this.dialogVisible = true
    },
    confirm() {
      
      //校验然后发送邮件
      var r = /^((([a-z0-9_\.-]+)@pingan\.com\.cn\;)*(([a-z0-9_\.-]+)@pingan\.com\.cn))$/
      if(r.test(this.email)) {
        //发送邮件
        this.dialogVisible = false
      } else {
        this.$message.error({
          message:'请输入正确的邮箱格式'
        })
      }
    },
    initPie() {
      this.pieChart = echarts.init(this.$refs.pie);
      this.pieChart.setOption({
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
          y: "80px",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
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
      this.picBase64Info = this.pieChart.getDataURL();
    },
    initMixParent() {
      this.mixChart = echarts.init(this.$refs.mixParent);
      const xData = (function() {
        const data = [];
        for (let i = 1; i < 4; i++) {
          data.push("2020年" + i + "月");
        }
        return data;
      })();
      this.mixChart.setOption({
        // backgroundColor: "#fff",
        toolbox: {
          feature: {
            saveAsImage: {
              type: "png",
              name: "你好",
              title: "保存为图片"
            }
          }
        },
        title: {
          text: "母公司专户",
          x: "10",
          top: "10",
          textStyle: {
            color: "#000",
            fontSize: "22"
            // textAlign: center
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          // left: "30%",
          // right: "30%",
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
            color: "#000"
          },
          data: ["当月清算规模", "存续规模", "清算中规模", "管理规模"]
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
              show: true
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
            // barMaxWidth: 35,
            barWidth: 30,
            // barCategoryGap: "10%",
            itemStyle: {
              normal: {
                color: "#c0504d",
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
            data: [709, 1917, 2455, 100]
          },
          {
            name: "存续规模",
            type: "bar",
            stack: "total",
            itemStyle: {
              normal: {
                color: "#4f81bd",
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
            data: [-327, -1776, -507, 100]
          },
          {
            name: "清算中规模",
            type: "bar",
            stack: "total",
            itemStyle: {
              normal: {
                color: "#9bbb59",
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
            data: [327, 1776, 507, 100]
          },
          {
            name: "管理规模",
            type: "line",
            stack: "total",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#7d60a0",
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
    },
    initMixSon() {
      this.mixChart = echarts.init(this.$refs.mixSon);
      const xData = (function() {
        const data = [];
        for (let i = 1; i < 4; i++) {
          data.push("2020年" + i + "月");
        }
        return data;
      })();
      this.mixChart.setOption({
        // backgroundColor: "#fff",
        toolbox: {
          feature: {
            saveAsImage: {
              type: "png",
              name: "你好",
              title: "保存为图片"
            }
          }
        },
        title: {
          text: "子公司专户",
          x: "10",
          top: "10",
          textStyle: {
            color: "#000",
            fontSize: "22"
            // textAlign: center
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          // left: "30%",
          // right: "30%",
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
            color: "#000"
          },
          data: ["当月清算规模", "存续规模", "清算中规模", "管理规模"]
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
              show: true
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
            // barMaxWidth: 35,
            barWidth: 30,
            // barCategoryGap: "10%",
            itemStyle: {
              normal: {
                color: "#c0504d",
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
            data: [709, 1917, 2455, 100]
          },
          {
            name: "存续规模",
            type: "bar",
            stack: "total",
            itemStyle: {
              normal: {
                color: "#4f81bd",
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
            data: [-327, -1776, -507, 100]
          },
          {
            name: "清算中规模",
            type: "bar",
            stack: "total",
            itemStyle: {
              normal: {
                color: "#9bbb59",
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
            data: [327, 1776, 507, 100]
          },
          {
            name: "管理规模",
            type: "line",
            stack: "total",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#7d60a0",
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

<style>
</style>