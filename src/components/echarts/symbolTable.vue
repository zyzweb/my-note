<template>
  <el-table :data="tableData" style="width: 100%" height="200" >
    <el-table-column prop="fundCode" label="基金代码" width="130"></el-table-column>
    <el-table-column prop="fundName" label="基金名称" width="130"></el-table-column>
    <el-table-column prop="fundScale" label="规模"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          fundCode: "机构业务部",
          fundName: "203",
          fundScale: "140",
        },
        {
          fundCode: "2016-05-04",
          fundName: "王小虎",
          fundScale: "上海市",
        },
        {
          fundCode: "2016-05-01",
          fundName: "王小虎",
          fundScale: "上海市",
        },
        {
          fundCode: "机构业务部",
          fundName: "203",
          fundScale: "140",
        },
        {
          fundCode: "2016-05-04",
          fundName: "王小虎",
          fundScale: "上海市",
        },
        {
          fundCode: "2016-05-01",
          fundName: "王小虎",
          fundScale: "上海市",
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