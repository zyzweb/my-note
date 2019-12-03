<template>
  <div class="tree-menu">
    <ul v-for=" (item,index) in theModel" :key="index">
      <my-tree :model="item"></my-tree>
    </ul>
  </div>
</template>

<script>
  import testData from './testdata';
  import myTree from './treeMenu';

  export default {
    name: "side-bar",
    components: {
      myTree
    },
    data() {
      return {
        theModel: testData
      }
    }
  }
</script>