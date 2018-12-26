import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueMaterial from 'vue-material' //还要导入样式
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
// 配置主题 -- 配置默认主题
// Vue.material.registerTheme('default',{
//   primary: 'blue',
//   accent: 'red',
//   background: 'white',
// })
// Vue.material.setCurrentTheme('default')


     
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

