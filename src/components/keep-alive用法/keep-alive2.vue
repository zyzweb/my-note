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
      <!-- include匹配到的才会被缓存 和vue组件中的name属性匹配和vue-router的name不一样,后者是用作传递参数-->
      <!-- include="book" -->
      <keep-alive :include="['book1','book']">
        <component :is="viewFirst"></component>   <!-- component为动态组件通过is属性切换 通过keep-alive解决切换组件过程中的缓存问题-->
      </keep-alive>
    </div>
  </div>
</template>
<script>
//
import book from "./book.vue";
import book1 from "./book1.vue";
export default {
  name: "keep-alive2",
  components: {
    book,
    book1
  },
  data() {
    return {
      buttons: [
        {
          name: "book",
          value: "book"
        },
        {
          name: "book1",
          value: "book1"
        }
      ],
      componentArray: [
        {
          book: "book"
        }
      ],
      viewFirst: "book"
    };
  },
  methods: {
    // tab选项
    buttonClick(name) {
      this.viewFirst = name;
    }
  }
};
</script>




