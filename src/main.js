import Vue from 'vue'  //  == import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)
// import {Tabs,TabPane,} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Tabs)
// Vue.use(TabPane)

import VueMaterial from 'vue-material' //还要导入样式
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
// import { Swipeout } from 'vux'
// Vue.use(Swipeout)


// 配置主题 -- 配置默认主题
// Vue.material.registerTheme('default',{
//   primary: 'blue',
//   accent: 'red',
//   background: 'white',
// })
// Vue.material.setCurrentTheme('default')

// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)


     
//导入路由文件
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

//全局导入样式


