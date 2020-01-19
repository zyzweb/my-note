<template>
  <div class="index">
    666
    <!-- <keep-alive :include="['PageA']" > -->
    <keep-alive include="PageA" >
      <router-view />
    </keep-alive>
  
  </div>
</template>

<style>
.index{
  font-size: .12rem;
}
</style>

