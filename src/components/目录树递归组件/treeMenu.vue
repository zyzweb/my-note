<template>
  <li>
    <span @click="toggle">
      <i v-if="hasChild" class="icon" :class="[open ? 'folder-open': 'folder' ]"></i>
      <i v-if="!hasChild" class="icon file-text"></i>
      {{model.menuName}}
    </span>
    <ul v-show="open" v-if="hasChild">
      <tree-menu v-for="(item,index) in model.children"  :model="item" :key="index"></tree-menu>
    </ul>
  </li>
</template>

<script>
//child的个数加1为菜单个数
  export default {
    name: "treeMenu",
    props: ['model'],
    data(){
      return {
        open:false
      }
    },
    computed:{
      //如果没有子菜单child:[] hasChild的值为0 hasChild为false,有子菜单child:[]中有值,this.model.children.length得到子菜单个数
      hasChild(){
        return this.model.children && this.model.children.length //得到菜单个数  
      }
    },
    methods:{
      toggle(){
        if(this.hasChild){
          this.open = !this.open
        }
      }
    }
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 10px 0;
  }

  li {
    padding: 3px 0;
  }

  li > span {
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
  }

  i.icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }

  .icon.folder {
    background-image: url('./tangel.svg');
  }

  .icon.folder-open {
    background-image: url(/src/assets/folder-open.png);
  }

  .icon.file-text {
    background-image: url(/src/assets/file-text.png);
  }

  .tree-menu li {
    line-height: 1.5;
  }
</style>
