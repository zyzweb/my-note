<template>
  <div class="index">
    <!-- include值为vue组件中name属性值与vue-router中name不一样,后者是用来路由传值 -->
    <!-- <keep-alive :include="['page']"> -->
    <keep-alive include="page">
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
.index{
  font-size: .12rem;
}
</style>

