import Vue from 'vue'  //  == import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'
import store from './store'
import '@/styles/normalize.css'
// import './rem'  //rem适配
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss'
Vue.use(ElementUI)

// import {Tabs,TabPane,} from 'element-ui'
// Vue.use(Tabs)
// Vue.use(TabPane)

import './components/directives.js'

import hocElTable from '@hoc-element/table'
Vue.use(hocElTable)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import VueMaterial from 'vue-material' //还要导入样式
// import 'vue-material/dist/vue-material.css'
// import 'vue-material/dist/theme/default.css'
// Vue.use(VueMaterial)

// 配置主题 -- 配置默认主题
// Vue.material.registerTheme('default',{
//   primary: 'blue',
//   accent: 'red',
//   background: 'white',
// })
// Vue.material.setCurrentTheme('default')


// import { Swipeout } from 'vux'
// Vue.use(Swipeout)

import loading from '@/components/loading'
Vue.use(loading)

// // 引入样式
// import 'vue-easytable/libs/themes-base/index.css'
// // 导入 table 和 分页组件
// import {VTable,VPagination} from 'vue-easytable'
// // ?注册全局组件
// Vue.component(VTable.name, VTable)
// Vue.component(VPagination.name, VPagination)

//?注册全局方法 和install use作用相同

import testData from './testData'
Vue.prototype.testData = testData

Vue.prototype.$reverseText = function (propertyName) {
  this[propertyName] = this[propertyName]
    .split('')
    .reverse()
    .join('')
}

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
Vue.config.productionTip = false  //关闭development production提示
Vue.use(ElementUI)
new Vue({
  render: h => h(App), //等于template,但是template需要含compile的版本
  // components: { App },
  // template: '<App/>',
  // el: '#app', //等价于.$mount('#app')
  i18n,
  router,
  store
})
.$mount('#app')


// const ele = document.querySelector('#app')
// console.log('ele', ele);  //class=hhh



// alias: {
//   'vue$': 'vue/dist/vue.esm.js' // ?vue默认是运行时,不包括compile
// }
