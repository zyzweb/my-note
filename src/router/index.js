import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//模块化开发必须要use

//导入组件
import luyou from '../components/luyou.vue'
import gaizao from '../components/gaizao.vue'
import news from '../components/news'
import material from '../components/vue-material'

const router = new VueRouter({
    routes:[
        {path:'/luyou',component:luyou},
        {path:'/gaizao',component:gaizao},
        {path:'/news',component:news},
        {path:'/material',component:material}
    ]
})

//导出路由
export default router
