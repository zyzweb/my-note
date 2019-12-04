<template>
  <div class="home">
    <div>
      <button
        @click="buttonClick(item.name)"
        v-for="(item) in buttons"
        :key="item.name"
      >{{item.value}}</button>
    </div>
    <div>
      <keep-alive include="books"> <!-- include匹配到的才会被缓存-->
        <component :is="viewFirst"></component> <!-- component为动态组件通过is属性切换 通过keep-alive解决切换组件过程中的缓存问题-->
      </keep-alive>
    </div>
  </div>
</template>
<script>
import books from "./books.vue";
export default {
  name: "home",
  data() {
    return {
      buttons: [
        {
          name: "books",
          value: "books"
        }
      ],
      componentArray: [
        {
          books: "books"
        }
      ],
      viewFirst: "books"
    };
  },
  components: {
    books
  },
  methods: {
    // tab选项
    buttonClick(name) {
      this.viewFirst = name;
    }
  }
};
</script>




