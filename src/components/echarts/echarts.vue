<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <div class="header">
            <div class="date">
              <el-date-picker v-model="value2" type="month" placeholder="选择月"></el-date-picker>
            </div>
            <!-- <div class="title">智能月报 - 主页</div> -->
            <div class="tixing">
              <div class="trapezoid"></div>
              <div id="tranFont">智能月报 - 主页</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="left">
        <aside class="scale first">
          <p>渠道规模(不含专户)</p>
          <div class="one">
            <div class="left">
              <div class="good">集团</div>
              <div class="bad">内:xxx</div>
            </div>
            <div class="right">
              <div class="good">集团</div>
              <div class="bad">外:xxx</div>
            </div>
          </div>
          <div class="two">
            <div class="left">
              <div class="good">机构</div>
              <div class="bad">xxx</div>
            </div>
            <div class="right">
              <div class="good">个人</div>
              <div class="bad">xxx</div>
            </div>
          </div>
        </aside>
        <aside class="scale">
          <pie-simple></pie-simple>
        </aside>
        <aside class="scale">
          <div class="total">
            <div class="qudao">渠道</div>
            <div class="tuandui">团队</div>
          </div>
          <div class="zhgm">专户规模</div>
          <bar-encode></bar-encode>
        </aside>
        <aside class="scale">
          <div class="invest-analy">
            <!-- <el-tabs type="border-card">
              <el-tab-pane label="团队">
                <symbol-table></symbol-table>
              </el-tab-pane>
              <el-tab-pane label="业务">
                <symbol-table1></symbol-table1>
              </el-tab-pane>
            </el-tabs>-->
            <div
              class="etf"
              style="height: 30px;
              line-height: 30px;
              text-align: center;"
            >ETF规模</div>
            <symbol-table></symbol-table>
          </div>
        </aside>
      </el-col>
      <el-col :span="6" class="right">
        <div class="top">
          <scale-rank></scale-rank>
        </div>
        <div class="down">
          <invest-rank></invest-rank>
        </div>
      </el-col>
      <el-col :span="12" class="middle">
        <div class="top">
          <div class="left">
            <gauge></gauge>
          </div>
          <div class="right">
            <pie-customized></pie-customized>
          </div>
        </div>
        <div class="down">
          <pie-doughnut></pie-doughnut>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import pieCustomized from "./pieCustomized";
import pieSimple from "./pieSimple";
import barEncode from "./barEncode";
import symbolTable from "./symbolTable";
// import symbolTable1 from "./symbolTable1";
import gauge from "./gauge";
import scaleRank from "./scaleRank";
import investRank from "./investRank";
import pieDoughnut from "./pieDoughnut";
export default {
  components: {
    pieDoughnut,
    pieCustomized,
    pieSimple,
    barEncode,
    symbolTable,
    // symbolTable1,
    gauge,
    scaleRank,
    investRank
  },
  data() {
    return {
      value2: ""
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #262626;
  color: white;
  .grid-content {
    min-height: 72px;
    .header {
      background-color: #595959;
      height: 40px;
      .date {
        float: right;
      }
      .tixing {
        position: relative;
        #tranFont {
          position: absolute;
          top: 50px;
          left: 50%;
          color: white;
          font-size: 14px;
          width: 100px;
          transform: translateX(-50%);
        }
        .trapezoid {
          position: absolute;
          top: 40px;
          left: 50%;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 32px solid #595959;
          height: 0;
          width: 175px;
          transform: translateX(-50%) rotateZ(180deg);
        }
      }
    }
  }
  .left {
    float: left;
    background-color: #262626;
    .first {
      padding: 10px;
    }
    .scale {
      width: 420px;
      height: 210px;
      background-color: #404040;
      margin-top: 10px;
      .zhgm {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
      .total {
        width: 152px;
        height: 30px;
        .qudao {
          margin-right: 2px;
        }
        .qudao,
        .tuandui {
          float: left;
          width: 75px;
          height: 100%;
          background-color: #4d4951;
          text-align: center;
          &:hover {
            background-color: #919e8c;
            cursor: pointer;
            border-bottom: 4px solid #aaa;
          }
        }
      }
      p {
        text-align: center;
      }
      .one {
        width: 180px;
        height: 56px;
        margin: 0 auto 10px;
        .left {
          width: 60%;
          background-color: #fc5c30;
          height: 70px;
          .good,
          .bad {
            text-align: center;
            height: 50%;
          }
        }
        .right {
          width: 40%;
          height: 70px;
          background-color: #c7796c;
          .good,
          .bad {
            text-align: center;
            height: 50%;
          }
        }
      }
      .two {
        width: 180px;
        height: 30px;
        margin: 0 auto;
        margin-top: 20px;
        .left {
          width: 60%;
          height: 70px;
          background-color: #fc5c30;
          .good,
          .bad {
            text-align: center;
            height: 50%;
          }
        }
        .right {
          width: 40%;
          height: 70px;
          background-color: #c7796c;
          .good,
          .bad {
            text-align: center;
            height: 50%;
          }
        }
      }
      .invest-analy {
        position: relative;
        background-color: #404040;
        color: white;
        // /deep/ & .el-table .el-table__row--striped td {
        //   background-color: #404040!important;
        // }
        // /deep/ & .el-table th,
        // .el-table tr {
        //   background-color: #404040;
        // }
        // /deep/ & .el-tabs__content {
        //   background-color: #404040 !important;
        // }
        // /deep/ & .el-tabs .el-tabs__nav-scroll {
        //   background-color: #404040 !important;
        //   .is-active {
        //     background-color: #515151 !important;
        //   }
        //   .el-tabs__item.is-top {
        //     color: white;
        //   }
        // }
      }
    }
  }
  .right {
    float: right;
    .top {
      width: 420px;
      height: 640px;
      margin-top: 10px;
      background-color: #404040;
    }
    .down {
      width: 420px;
      height: 220px;
      margin-top: 10px;
      background-color: #404040;
      color: white;
    }
  }
  .middle {
    margin: 0 auto;
    .top {
      width: 520px;
      height: 180px;
      margin: 40px auto 0;
      .left {
        width: 255px;
        height: 100%;
        margin-right: 10px;
        background-color: #ccc;
      }
      .right {
        width: 255px;
        height: 100%;
        background-color: #ccc;
      }
    }
    .down {
      width: 520px;
      height: 650px;
      background-color: #262626;
      margin: 10px auto 0;
    }
  }
}

/deep/ .invest-analy .el-table .el-table__row--striped td {
  background-color: #404040 !important;
}
/deep/ .invest-analy .el-table th,
.el-table tr {
  background-color: #404040;
}
/deep/ .invest-analy .el-tabs__content {
  background-color: #404040 !important;
}
/deep/ .invest-analy .el-tabs .el-tabs__nav-scroll {
  background-color: #404040 !important;
  .is-active {
    background-color: #515151 !important;
  }
  .el-tabs__item.is-top {
    color: white;
  }
}
</style>