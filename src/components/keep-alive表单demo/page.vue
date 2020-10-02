  <template>
  <div>
    <form>
      <input type="text" placeholder="请输入用户昵称" />
      <br />
      <input type="text" placeholder="请输入用户手机" />
      <br />
      <span>
        点击跳转到
        <a href="javascript:void(0)" @click="tapToPageB">阅读并同意活动协议</a>
      </span>
    </form>
    <br/>
    <button
        @click="buttonClick(item.name)"
        v-for="(item) in buttons"
        :key="item.name"
      >{{item.value}}</button>

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
import book from "./book.vue";
import book1 from "./book1.vue";
export default {
  name: 'page',
  components: {
    book,
    book1
  },
  data () {
    return {
      buttons: [ { name: "book", value: "book" }, { name: "book1", value: "book1" } ],
      viewFirst: "book"
    }
  },
  created () { //keep-alive activated和deactivated 钩子函数
    console.log('Created: page')
  },
  activated() {
    console.log('activated: page')
  },
  deactivated() {
      console.log('deactivated: page')

  },
  methods: {
    buttonClick(name) {
      this.viewFirst = name;
    },
    tapToPageB() {
      this.$router.push({
        path:'/middle/agree'
      })
    }
  }
}
</script>
<style>
form {
  width: 80%;
  height: 400px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
}
input {
  border: 1px solid gray;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  margin: 30px 0 30px;
}
span {
  font-size: 10px;
}
</style>
