<template>
  <div>
    <el-table
      :data="tableData"
      v-loading="loading"
      stripe
      border
      :span-method="arraySpanMethod"
      :cellStyle="cellStyle"
      style="width: 100%"
      @row-click="rowClick">
      <el-table-column type="index" label="序号" width="60" align="center" > </el-table-column>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in config"
        :key="index"
        header-align="center"
        :align="item.align? item.align: 'right'"
        width="width">
        <!-- <template slot-scope="scope">
          <span>{{indexList.indexOf(index) >=0 ? scope.row[item.prop] : numFormat(scope.row[item.prop] / unit )}}</span>
        </template> -->
      </el-table-column>
      <el-table-column
        header-align="center"
        v-if="exportDaily"
        align="center"
        label="操作" >
        <template slot-scope="scope">
          <el-button size="small" type="text" @click.native="doExport(scope.$index, tableData)">按日导出</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      v-if="isPagination"
      style="float: right; margin-top: 10px;"
      @size-change="handleSizeChange"
      layout="prev, pager, next"
      :total="50">
    </el-pagination> -->
  </div>
</template>

<script>
export default {
  props: {
    config: Array,
    tableData: Array,
    loading: {
      type: Boolean,
      default: false
    },
    indexList: {
      type: Array,
      default() {
        return [0]
      }
    },
    exportDaily: {
      type: Boolean,
      default: false
    },
    method: {
      type: Function
    }
  },
  created () {
    if(this.method) {
      this.arraySpanMethod = this.method
    }
  },
  methods: {
    arraySpanMethod({row, column, columnIndex, rowIndex}) {

    },
    cellStyle() {

    },
    rowClick() {

    }
  }
}
</script>

<style>

</style>