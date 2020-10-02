<template>
  <div>
    <el-table ref="multipleTable" :data="designList" tooltip-effect="dark" height="255" style="width: 100%" @current-change="clickChange">
      <el-table-column label="选择" width="55" >
        <template slot-scope="scope">
          <el-radio v-model="tableRadio" :label="scope.row">
            <i></i>
          </el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="designerCode" :render-header="foo" label="设计顾问" header-align="center" align="center"></el-table-column>
      <el-table-column prop="designerName" label="姓名" header-align="center" align="center"></el-table-column>
      <el-table-column prop="storeCode" label="门店编码" header-align="center" align="center"></el-table-column>
      <el-table-column prop="storeName" label="门店名称" header-align="center" align="center"></el-table-column>
      <el-table-column prop="cityName" label="所属城市" header-align="center" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableRadio: "",
      designList: [
        {
          designerCode: 1,
          designerName: 2,
          storeCode: 3,
          storeName: 4,
          cityName: 5,
        },
        {
          designerCode: 1,
          designerName: 2,
          storeCode: 3,
          storeName: 4,
          cityName: 5,
        },
        {
          designerCode: 1,
          designerName: 2,
          storeCode: 3,
          storeName: 4,
          cityName: 5,
        },
        {
          designerCode: 1,
          designerName: 2,
          storeCode: 3,
          storeName: 4,
          cityName: 5,
        },
        {
          designerCode: 1,
          designerName: 2,
          storeCode: 3,
          storeName: 4,
          cityName: 5,
        },
      ],
    };
  },
  methods: {
    foo(h, { column }) {
      if (column.labelClassName) {
        return (
          <el-tooltip
            class="item"
            effect="dark"
            content={column.lableClassName}
            placement="bottom"
          >
            <span>{column.lable}</span>
          </el-tooltip>
        );
      }
    },
    clickChange(item) {
      this.tableRadio = item;
    },
  },
};
</script>