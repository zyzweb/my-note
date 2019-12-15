import Vue from 'vue'  //  == import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'
import store from './store'
import './rem'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
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

import VueI18n from 'vue-i18n'        //引入vue-i18n
Vue.use(VueI18n);    //通过插件的形式挂载
import enLocale from 'element-ui/lib/locale/lang/en'        //引入Element UI的英文包
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'     //引入Element UI的中文包

const i18n = new VueI18n({
  locale: 'zh',    // 语言标识
  messages : {
    zh: Object.assign(require('@/common/lang/zh'), zhLocale),  //这里需要注意一下，是如何导入多个语言包的
    en: Object.assign(require('@/common/lang/en'), enLocale)
  }
 })


     
//导入路由文件
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
var cc = new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')

console.log('vue',Vue)//为构造函数
console.log('cc',cc); //vue实例


//全局导入样式


