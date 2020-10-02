<!--
 * @Description: 
 * @Author: zhuyuanzheng
 * @Date: 2020-07-29 21:50:40
 * @LastEditors: zhuyuanzheng
 * @LastEditTime: 2020-09-08 22:37:45
-->
<template>
  <div>
    <el-table
      :data="tableData"
      v-loading="loading"
      stripe
      border
      :span-method="arraySpanMethod"
      @sort-change="sortMethod"
      :cellStyle="cellStyle"
      style="width: 100%"
      @row-click="rowClick"
    >
      <el-table-column type="index" label="序号" width="60" align="center" />
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :sortable="item.sort? 'custom' : false"
        v-for="(item, index) in config"
        :key="index"
        header-align="center"
        :align="item.align? item.align: 'right'"
        :width="item.width"
      >
        <!-- <template slot-scope="scope">
          <span>{{indexList.indexOf(index) >=0 ? scope.row[item.prop] : numFormat(scope.row[item.prop] / unit )}}</span>
        </template>-->
        <template slot-scope="scope">
          <span>{{indexList.indexOf(index) >= 0 ? scope.row[item.prop] : numFormat(scope.row[item.prop] / unit) }}</span>
        </template>
      </el-table-column>
      <el-table-column header-align="center" v-if="exportDaily" align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click.native="doExport(scope.$index, tableData)">按日导出</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row justify="end" type="flex">
      <el-pagination 
      v-if="isPagination" 
      style="margin-top: 10px;"
       @size-change="handleSizeChange" 
       @current-change="handleCurrentChange"
       :current-page="pageNum"
       :page-size="pageSize" 
       layout="total, sizes, prev, pager, next, jumper" 
       :page-sizes="[10, 20, 50]"
       :page-size="pageSize"
       :total="totalCount"></el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    config: Array,
    tableData: Array,
    loading: {
      type: Boolean,
      default: false,
    },
    indexList: {
      type: Array,
      default() {
        return [0];
      },
    },
    exportDaily: {
      type: Boolean,
      default: false,
    },
    method: {
      type: Function,
    },
  },
  created() {
    if (this.method) {
      this.arraySpanMethod = this.method;
    }
  },
  methods: {
    doExport() {
      console.log('exportDaily');
    },
    handleSizeChange() { //每页多少条
      this.$emit('update:pageSize', val)
    },
    handleCurrentChange(val) { //当前页
      this.$emit('update:pageNum', val)
    },
    rowClick(row) {
      if(!+row.ifClick) return
      this.$emit('paramsId', row)
    },
    arraySpanMethod({ row, column, columnIndex, rowIndex }) {},
    cellStyle() {},
    rowClick() {},
  },
};
</script>

<style>
</style>