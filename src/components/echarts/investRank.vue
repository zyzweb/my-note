<template>
  <div>
    <div class="header">
      <p class="title">投资业绩排名</p>
    </div>
    <div class="fund">
      <p class="title">年初以来业绩</p>
      <div class="firstList">
        <div class="total">
          <span>整体:</span>
          <span>33%</span>
        </div>
        <div class="fixedIncome">
          <span>固收类:</span>
          <span>29%</span>
        </div>
        <div class="equity">
          <span>权益类:</span>
          <span>36%</span>
        </div>
      </div>
    </div>
    <div class="fund three">
      <p class="title">三年加权业绩</p>
      <div class="firstList">
        <div class="total">
          <span>整体:</span>
          <span>33%</span>
        </div>
        <div class="fixedIncome">
          <span>固收类:</span>
          <span>29%</span>
        </div>
        <div class="equity">
          <span>权益类:</span>
          <span>40%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          total: "33%",
          fixedIncome: "15%",
          equity: "20%"
        }
      ],
      tableData2: [
        {
          total: "33%",
          fixedIncome: "15%",
          equity: "20%"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}
.fund {
    background-color: #50535c;
    margin: 0 10px;
  &.three {
    margin-top: 50px;
  }
  .title {
    margin: 0;
    text-align: center;
  }
  .firstList {
      display: flex;
      height: 30px;
      background-color: #57585a;
      .total,.fixedIncome,.equity {
          flex: 1;
          height: 100%;
          line-height: 30px;
          text-align: center;
      }
  }
}
</style>