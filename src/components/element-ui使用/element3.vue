<template>
  <div class="wrap">
    <div class="header">月报稽核校验表</div>
    <div class="middle">
      <input type="button" value="数据导入" @click="dataImport" />
      <input type="file" ref="one" style="display: none;" v-on:change="dataFill" />
      <span ref="two"></span>
      <a href="/a.xlsx" download>导入模板下载</a>
      <div class="sort">
        <div>
          <span>时间:</span>
          <el-date-picker v-model="value1" type="month" placeholder="选择月" size="mini"></el-date-picker>
        </div>
        <div>
          <span>差异类型:</span>
          <el-select v-model="value2" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span>数据类型:</span>
          <el-select v-model="value3" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <button>重新计算</button>
      </div>
    </div>
    <div class="bottom">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :span-method="objectSpanMethod"
        :header-cell-style="getRowClass"
      >
        <el-table-column align="center" prop="compareType" label="对比项" width="180"></el-table-column>
        <el-table-column align="center" prop="compareValue" label="对比值" width="180"></el-table-column>
        <el-table-column align="center" prop="account" label="会计提供"></el-table-column>
        <el-table-column align="center" prop="linzongMonth" label="林总月报"></el-table-column>
        <el-table-column align="center" prop="associationMonth" label="协会月报"></el-table-column>
        <el-table-column align="center" prop="CISPMonth" label="CISP月报"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textArr: [
        { compareType: "产品数量", compareValue: "FISP" },
        { compareType: "产品数量", compareValue: "人行" },
        { compareType: "资产净值总值", compareValue: "FISP" },
        { compareType: "资产净值总值", compareValue: "人行" },
        { compareType: "资产份额总值", compareValue: "FISP" },
        { compareType: "资产份额总值", compareValue: "人行" },
        { compareType: "总资产总值", compareValue: "FISP" },
        { compareType: "总资产总值", compareValue: "人行" }
      ],
      tableData: [],
      tableData1: [
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        },
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        },
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        },
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        },
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        },
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        },
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        },
        {
          account: "上海市普陀区金沙江路 1518 弄",
          linzongMonth: "2016-05-02",
          associationMonth: "王小虎",
          CISPMonth: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "比例"
        },
        {
          value: "选项2",
          label: "数量"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "公募+专户"
        },
        {
          value: "选项2",
          label: "专户"
        },
        {
          value: "选项3",
          label: "母公司专户"
        },
        {
          value: "选项4",
          label: "子公司专户"
        }
      ],
      value1: "",
      value2: "",
      value3: ""
    };
  },
  mounted() {
    const that = this;
    this.tableData1.forEach((item, index) => {
      item.compareType = that.textArr[index].compareType;
      item.compareValue = that.textArr[index].compareValue;
    });
    this.tableData = this.tableData1;
  },
  methods: {
    //上传文件
    upload() {
      $("#file").click();
      $("#file").change(function(e) {
        var fileName = e.target.files[0]; //js 获取文件对象
        if (fileName !== undefined) {
          var file_typename = fileName.name.substring(
            fileName.name.lastIndexOf(".")
          );
          if (file_typename === ".xlsx" || file_typename === ".xls") {
            $("#filename").css("display", "block");
            $("#filename").val(fileName.name);
            UpladFile(fileName);
          } else {
            console.log("请选择正确的文件类型！");
          }
        } else {
          console.log("请选择正确的文件！");
        }
      });
    },
    dataImport() {
      this.$refs.one.click();
    },
    dataFill() {
      debugger
      this.$refs.two.innerHTML = this.$refs.one.files[0].name;
      const content = this.$refs.one.files[0];
      const file_name = content.name.substring(content.name.lastIndexOf("."));
      if (file_name === ".xlsx" || file_name === ".xls") {
        const form = new FormData();
        form.append("file", content);
        let config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        // axios
        //   .post(Url, form, config)
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(res => {
        //     console.log(res);
        //   });
      } else {
        alert("请选择正确格式");
      }
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == 0) {
        return "background:#7d97a4";
      } else {
        return "";
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px;
  .header {
    text-align: center;
  }
  .middle {
    padding-top: 20px;
    a {
      color: black;
      text-decoration: none;
    }
    .sort {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
    }
  }
  .bottom {
    /deep/ .el-table th > .cell {
      font-weight: normal;
      color: black;
    }
  }
}
</style>