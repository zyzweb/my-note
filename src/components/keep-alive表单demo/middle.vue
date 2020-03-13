<template>
  <div class="index">
    <!-- <keep-alive :include="['page']" > -->
    <keep-alive include="page" >
      <router-view />
    </keep-alive>
  
  </div>
</template>

<style>
.index{
  font-size: .12rem;
}
</style>

