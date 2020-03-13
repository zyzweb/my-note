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
  </div>
</template>

<script>
export default {
  name: 'page',
  created () { //keep-alive activated和deactivated 钩子函数
    console.log('Created: PageA')
  },
  activated() {
    console.log('activated: PageA')
  },
  deactivated() {
      console.log('deactivated: PageA')

  },
  methods: {
    tapToPageB () {
      this.$router.push({
        path:'/agree'
      })
    }
  }
}
</script>
<style>
form {
  width: 80%;
  height: 4rem;
  border: 1px solid gray;
  border-radius: 0.1rem;
  padding: 0.2rem;
}
input {
  border: 1px solid gray;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.2rem;
  margin: 0.3rem 0 0.3rem;
}
span {
  font-size: 0.1rem;
}
</style>