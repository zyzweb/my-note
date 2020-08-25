import Vue from 'vue'  //  == import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'
import store from './store'
import '@/styles/normalize.css'
import './rem'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss'
Vue.use(ElementUI)
// import {Tabs,TabPane,} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Tabs)
// Vue.use(TabPane)

import './components/directives.js'
import hocElTable from '@hoc-element/table'

Vue.use(hocElTable)

import VueMaterial from 'vue-material' //还要导入样式
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
// import { Swipeout } from 'vux'
// Vue.use(Swipeout)

import loading from '@/components/loading'
Vue.use(loading)

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

// ?注册全局组件
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

//?注册全局方法 和install use作用相同
// function globalMethod() {
//   console.log(999);
// }
// Vue.prototype.$myMethod = globalMethod  
import testData from './testData'
Vue.prototype.testData = testData  

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

 console.log('----------------------',process.env);

     
//导入路由文件
import router from './router'
Vue.config.productionTip = false  //关闭development production提示
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')



// alias: {
//   'vue$': 'vue/dist/vue.esm.js' // ?vue默认是运行时,不包括compile,需要手动挂载
// }
// new Vue({
// 	el: '#app',
//   router,
//   i18n,
// 	components: { App },
// 	template: '<App/>'
// });


console.log(Vue.version);


