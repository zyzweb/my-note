<template>
  <div>
    <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
    <el-table :data="tableData" border>
      <el-table-column prop="" label="基金代码"></el-table-column>
      <el-table-column prop="" label="基金名称"></el-table-column>
      <el-table-column prop="" label="股票市值"></el-table-column>
      <el-table-column prop="" label="买入股票金额"></el-table-column>
      <el-table-column prop="" label="卖出股票金额"></el-table-column>
      <el-table-column prop="" label="股票净买卖"></el-table-column>
      <el-table-column prop="" label="股票投资占基金资产净值的比例(%)"></el-table-column>
      <el-table-column prop="" label="股票投资占基金资产总值的比例(%)"></el-table-column>
      <el-table-column prop="" label="买入债券金额(万元)"></el-table-column>
      <el-table-column prop="" label="卖出债券金额(万元)"></el-table-column>
      <el-table-column prop="" label="债券净买卖(万元)"></el-table-column>
      <el-table-column prop="" label="债券投资占基金资产净值的比例"></el-table-column>
      <el-table-column prop="" label="债券投资占基金资产总值的比例"></el-table-column>
      <el-table-column prop="" label="当日市场传闻、当日市场走势简要分析"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      tableData: []
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() { //获取表格数据
      //
      console.log(666);
    }
  },
}
</script>

<style>

</style>