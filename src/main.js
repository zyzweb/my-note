import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import VueRouter from 'vue-router'
//导入路由文件
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

//全局导入样式
import 'element-ui/lib/theme-chalk/index.css';