
 <template>
  <el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">
    <el-table-column prop="date" label="日期" :sortable="true" :sort-method="sortMethod" :sort-orders="['ascending','descending']" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" :sort-by="['name', 'address']" :sortable="true" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  mounted() {
    console.log(111);
  },
  methods: {
    sortMethod(a, b, type) {
      debugger;
      if (type === "asc") {
        return a > b ? 1 : -1;
      }
    },
  },
};
</script>