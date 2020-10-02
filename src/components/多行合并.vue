<template>
  <div>
    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
    </el-table>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "部门1",
          type: 0,
          amount1: "跟单员1",
          amount2: "成衣工厂1",
          amount3: 10
        },
        {
          name: "部门1",
          type: 0,
          amount1: "跟单员1",
          amount2: "成衣工厂2",
          amount3: 12
        },
        {
          name: "部门1",
          type: 0,
          amount1: "跟单员1",
          amount2: "成衣工厂3",
          amount3: 9
        },
        {
          name: "部门1",
          type: 0,
          amount1: "跟单员2",
          amount2: "成衣工厂1",
          amount3: 17
        },
        {
          name: "部门1",
          type: 0,
          amount1: "跟单员2",
          amount2: "成衣工厂2",
          amount3: 15
        },
        {
          name: "部门1",
          type: 0,
          amount1: "跟单员2",
          amount2: "成衣工厂3",
          amount3: 10
        },
        {
          name: "部门1总计",
          type: 1,
          amount1: "部门1跟单员",
          amount2: "",
          amount3: 12
        },
        {
          name: "部门2",
          type: 0,
          amount1: "跟单员3",
          amount2: "成衣工厂1",
          amount3: 10
        },
        {
          name: "部门2",
          type: 0,
          amount1: "跟单员3",
          amount2: "成衣工厂2",
          amount3: 12
        },
        {
          name: "部门2",
          type: 0,
          amount1: "跟单员3",
          amount2: "成衣工厂3",
          amount3: 9
        },
        {
          name: "部门2",
          type: 0,
          amount1: "跟单员3",
          amount2: "成衣工厂1",
          amount3: 17
        },
        {
          name: "部门2",
          type: 0,
          amount1: "跟单员4",
          amount2: "成衣工厂2",
          amount3: 15
        },
        {
          name: "部门2",
          type: 0,
          amount1: "跟单员4",
          amount2: "成衣工厂3",
          amount3: 10
        },
        {
          name: "部门2总计",
          type: 1,
          amount1: "部门2跟单员",
          amount2: "",
          amount3: 12
        }
      ],
      arr1: [],
      arr2: []
    };
  },
  created() {
    this.setdates(this.tableData);
  },
  methods: {
    setdates(arr) {
      var obj = {},
        k = null
      for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i].name;
        if (obj[k]) obj[k]++;
        else obj[k] = 1;
      }
      //保存结果{el-'元素'，count-出现次数}
      for (var o in obj) {
        for (let i = 0; i < obj[o]; i++) {
          if (i === 0) {
            this.arr1.push(obj[o]);
          } else {
            this.arr1.push(0);
          }
        }
      }
      console.log('this.arr1', this.arr1);
      var obj2 = {},
        j = null
      for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i].amount1;
        if (obj2[k]) obj2[k]++;
        else obj2[k] = 1;
      }

      //保存结果{el-'元素'，count-出现次数}
      for (var o in obj2) {
        for (let i = 0; i < obj2[o]; i++) {
          if (i === 0) {
            this.arr2.push(obj2[o]);
          } else {
            this.arr2.push(0);
          }
        }
      }
      console.log('this.arr2',this.arr2);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 && this.tableData[rowIndex].type == 0) {
        let _row = this.arr1[rowIndex];
        let _col = this.arr1[rowIndex] > 0 ? 1 : 0;
        return [_row, _col];
      } else if (columnIndex === 0 && this.tableData[rowIndex].type == 1) {
        return [1, 3];
      } else if (columnIndex === 1 && this.tableData[rowIndex].type == 1) {
        return [0, 0];
      } else if (columnIndex === 2 && this.tableData[rowIndex].type == 1) {
        return [0, 0];
      } else if (columnIndex === 1 && this.tableData[rowIndex].type == 0) {
        let _row = this.arr2[rowIndex];
        let _col = _row > 0 ? 1 : 0;
        return [_row, _col];
      }
    }
  }
};
</script>
