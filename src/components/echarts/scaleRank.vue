<template>
  <div>
    <div class="header">
      <p class="title">规模排名比年初变动情况</p>
    </div>
    <div class="fund">
      <!-- <el-table :data="tableData" style="width: 100%" :show-header="false">
        <el-table-column align="center" type="index" width="80"></el-table-column>
        <el-table-column align="center" prop="foundName" label="基金名称" width="90"></el-table-column>
        <el-table-column align="center" prop="rankChanged" label="排名变动" width="90"></el-table-column>
      </el-table>-->
      <el-scrollbar style="height:610px;">
        <ul class="rank">
          <!-- <li v-for="(item,index) in listData" :key="index">
              <div class="num">{{index}}</div>
          </li>-->
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>

          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
          <li>
            <div class="num">
              <div class="quare"></div>
              <span>1</span>
            </div>
            <div class="second">
              <div class="name">天弘基金</div>
              <div class="scale">12.16亿元</div>
            </div>
            <div class="rank-change">
              <div class="change">
                <span>排名变动:</span>
                <span>1</span>
              </div>
              <div class="fenshu">12.16亿份</div>
            </div>
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          foundName: "天虹基金",
          rankChanged: "2"
        },
        {
          date: "2016-05-04",
          name: "王小虎"
        },
        {
          date: "2016-05-01",
          name: "王小虎"
        },
        {
          date: "2016-05-03",
          name: "王小虎"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  .title {
    height: 30px;
    line-height: 30px;
    padding: 0;
    margin: 0;
    text-align: center;
    color: white;
  }
}
.el-table {
  font-size: 10px;
}
.fund {
  .rank {
    margin: 0;
    padding: 5px;
    li {
      display: flex;
      width: 90%;
      height: 40px;
      list-style: none;
      text-align: center;
      margin-bottom: 10px;
      background-color: #606060;
      color: white;
      .num {
        position: relative;
        width: 10%;
        // background-color: yellow;
        line-height: 40px;
        span {
          position: absolute;
          top: 0px;
          left: 15px;
        }
        .quare {
          transform: rotateZ(45deg);
          background-color: #af4427;
          width: 20px;
          height: 20px;
          position: absolute;
          top: 10px;
          left: 10px;
        }
      }
      .second {
        width: 45%;
        // background-color: green;
        .name,
        .scale {
          height: 50%;
          line-height: 20px;
        }
      }
      .rank-change {
        width: 45%;
        // background-color: yellow;
        .change,
        .fenshu {
          height: 50%;
          line-height: 20px;
        }
      }
    }
  }
}
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden!important;
}
</style>