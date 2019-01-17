import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//模块化开发必须要use

//导入组件
import luyou from '../components/luyou.vue'
import gaizao from '../components/gaizao.vue'
import news from '../components/news'
import material from '../components/vue-material'
import quanping from '../components/全屏组件'
import page1 from '../components/keep-alive用法/page1'
import hello from '../components/keep-alive用法/hello'
import element from '../components/element-ui使用/element'
import element2 from '../components/element-ui使用/element2'


const router = new VueRouter({
    routes:[
        {path:'/luyou',component:luyou},
        {path:'/gaizao',component:gaizao},
        {path:'/news',component:news},
        {path:'/material',component:material},
        {path:'/quanping',component:quanping},
        {
            path: '/',
            component: hello,
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
          {path:'/element2',component:element2}
        
    ]
})

//导出路由
export default router
