<template>
  <div>
    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="num1" label="部门"></el-table-column>
      <el-table-column prop="num2" label="团队"></el-table-column>
      <el-table-column prop="num3" label="ABS"></el-table-column>
      <el-table-column prop="num4" label="非标专户"></el-table-column>
      <el-table-column prop="num5" label="资本专户"></el-table-column>
      <el-table-column prop="num6" label="货基"></el-table-column>
      <el-table-column prop="num7" label="非货"></el-table-column>
      <el-table-column prop="num8" label="其他"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {num1:'南区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'南区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'南区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'南区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'北区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'北区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'北区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'东区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'东区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'东区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'东区事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'综合金融一部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'资本市场专户部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'创新事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
        {num1:'创新事业部',num2:1,num3:1,num4:1,num5:1,num6:1,num7:1,num8:1},
      ],
      spanArr: []
    };
  },
  mounted(){
      let contactDot = 0;
        this.tableData.forEach( (item,index) => {
            if(index===0){
                this.spanArr.push(1)
            }else{
                if(item.num1 === this.tableData[index-1].num1){
                    this.spanArr[contactDot] += 1;
                    this.spanArr.push(0)
                }else{
                    contactDot = index
                    this.spanArr.push(1)
                }
            }
        })
},
methods:{
      objectSpanMethod({row, column, rowIndex, columnIndex}){
          if(columnIndex ===1){
              if(this.spanArr[rowIndex]){
                  return {
                      rowspan:this.spanArr[rowIndex],
                      colspan:1
                  }
              }else{
                  return {
                      rowspan: 0,
                      colspan: 0
                  }
              }
          }
      }
  }
};
</script>