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
      <keep-alive include="books">
        <component :is="viewFirst"></component>
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