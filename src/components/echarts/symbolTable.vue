<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="team" label="团队" width="90"></el-table-column>
    <el-table-column prop="income" label="收入" width="90"></el-table-column>
    <el-table-column prop="payOff" label="支出"></el-table-column>
    <el-table-column prop="profit" label="利润"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          team: "机构业务部",
          income: "203",
          payOff: "140",
          profit: "63"
        },
        {
          team: "2016-05-04",
          income: "王小虎",
          payOff: "上海市",
          profit: "10"
        },
        {
          team: "2016-05-01",
          income: "王小虎",
          payOff: "上海市",
          profit: "10"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
/deep/.el-table {
    color: white;
  font-size: 10px;
  .cell {
    line-height: 1;
  }
}
/deep/.el-table tr,
.el-table th,
.cell {
  background-color: #404040 !important;
}
/deep/.el-table__row--striped {
    background-color: #404040;
}
/deep/.invest-analy .el-tabs .el-tabs__nav-scroll {
    background-color: #404040!important;
}
</style>