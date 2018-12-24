<template>
  <div id="app">
    <child :lists="nameList">
      <template slot-scope="a">
        {{a}}
      </template>
    </child>
  </div>
</template>

<script>
Vue.component("child", {
  props: ["lists"],
  template: `
            <div>
                <ul>
                    <li v-for="list in lists">
                        <slot :bbbbb="list"></slot>
                    </li>
                </ul>
            </div>
        `
});

let vm = new Vue({
  el: "#app",
  data: {
    nameList: [
      { id: 1, name: "孙悟空" },
      { id: 2, name: "猪八戒" },
      { id: 3, name: "沙和尚" },
      { id: 4, name: "唐僧" },
      { id: 5, name: "小白龙" }
    ]
  }
});
</script>