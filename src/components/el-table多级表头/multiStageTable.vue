<template>
  <div>
    <my-table :config="config" :data="data"></my-table>
  </div>
</template>

<script>
import MyTable from "./MyTable";
export default {
  components: {
    MyTable
  },
  data() {
    return {
      config: [
        { prop: "date", label: "日期" },
        {
          label: "配送信息",
          children: [
            { prop: "name", label: "姓名" },
            {
              label: "地址",
              children: [
                { prop: "province", label: "省份" },
                { prop: "city", label: "市区" },
                { prop: "address", label: "地址" }
              ]
            }
          ]
        },
        {label: '数量',
        children: [
          {prop: 'num1', label: '数量1'},
          {prop: 'num2', label: '数量2'},
        ]}
      ],
      data: [
        {date:'2020-01-01', name:'zs',province:'hubei',city:'wuhan',address:'jx',num1:1,num2:2},
        {date:'2020-01-01', name:'zs',province:'hubei',city:'wuhan',address:'jx',num1:1,num2:2},
        {date:'2020-01-01', name:'zs',province:'hubei',city:'wuhan',address:'jx',num1:1,num2:2},
      ]
    };
  }
};
</script>
<style>
</style>
