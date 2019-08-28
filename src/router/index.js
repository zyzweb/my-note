import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//模块化开发必须要use

//导入组件
import test from '../components/test.vue'
import gaizao from '../components/gaizao.vue'
import page1 from '../components/keep-alive用法/page1'
import element from '../components/element-ui使用/element'
import element2 from '../components/element-ui使用/element2'
import popup from '../components/mint-ui使用/popup.vue'
import easytable from '../components/vue-easytable'
import checked from '../components/绑定checked值'
import editor from '../components/editor'

const router = new VueRouter({
    routes:[
        {path:'/test',component:test},
        {path:'/gaizao',component:gaizao},
        {path:'/easytable',component:easytable},
        {path:'/checked',component:checked},
        {path:'/editor',component:editor},
        {
            path: '/',
            component: test,
            meta: {
              keepAlive: false // 不需要缓存
            }
          },
          {
            path: '/page1',
            component: page1,
            meta: {
              keepAlive: true // 需要被缓存
            }
          },
          {path:'/element',component:element},
          {path:'/element2',component:element2},
          {path:'/popup',component:popup}
        
    ]
})

//导出路由
export default router
