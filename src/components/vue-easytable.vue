<template>
  <div>
    <v-table
      is-horizontal-resize
      style="width:100%"
      :height="300"
      even-bg-color="#f2f2f2"
      :title-rows="titleRows"
      :columns="columns"
      :table-data="tableData"
      row-hover-color="#eee"
      row-click-color="#edf7ff"
    ></v-table>
  </div>
</template>
<style>
.title-cell-class-name-test1 {
  background-color: #2db7f5;
}
.title-cell-class-name-test2 {
  background-color: #f60;
}
</style>
<script>
export default {
  data() {
    return {
      multipleSort: false,
      tableData: [
        {
          name: "赵伟",
          gender: "男",
          height: "183",
          email: "zhao@gmail.com",
          tel: "156*****1987",
          address: "上海市黄浦区金陵东路569号17楼"
        },
        {
          name: "李伟",
          gender: "男",
          height: "166",
          email: "li@gmail.com",
          tel: "182*****1538",
          address: "上海市奉贤区南桥镇立新路12号2楼"
        },
        {
          name: "孙伟",
          gender: "女",
          height: "186",
          email: "sun@gmail.com",
          tel: "161*****0097",
          address: "上海市崇明县城桥镇八一路739号"
        },
        {
          name: "周伟",
          gender: "女",
          height: "188",
          email: "zhou@gmail.com",
          tel: "197*****1123",
          address: "上海市青浦区青浦镇章浜路24号"
        },
        {
          name: "吴伟",
          gender: "男",
          height: "160",
          email: "wu@gmail.com",
          tel: "183*****6678",
          address: "上海市松江区乐都西路867-871号"
        },
        {
          name: "冯伟",
          gender: "女",
          height: "168",
          email: "feng@gmail.com",
          tel: "133*****3793",
          address: "上海市金山区龙胜路143号一层"
        }
      ],
      columns: [
        { field: "name", width: 100, columnAlign: "center" },
        { field: "gender", width: 150, columnAlign: "center" },
        { field: "height", width: 150, columnAlign: "center" },
        { field: "tel", width: 150, columnAlign: "center" },
        { field: "email", width: 200, columnAlign: "center" }
      ],
      titleRows: [
        [
          { fields: ["name"], title: "姓名", titleAlign: "center", width: 100 },
          {
            fields: ["gender"],
            title: "性别",
            titleAlign: "center",
            orderBy: "asc",
            width: 150
          },
          {
            fields: ["height"],
            title: "身高",
            titleAlign: "center",
            orderBy: "desc",
            width: 150
          },
          {
            fields: ["tel"],
            title: "手机号码",
            titleAlign: "center",
            width: 150
          },
          { fields: ["email"], title: "邮箱", titleAlign: "center", width: 200 }
        ]
      ]
    };
  }
};
</script>