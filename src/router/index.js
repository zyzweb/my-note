import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//模块化开发必须要use

//导入组件
import luyou from '../components/luyou.vue'
import gaizao from '../components/gaizao.vue'

const router = new VueRouter({
    routes:[
        {path:'/luyou',component:luyou},
        {path:'/gaizao',component:gaizao}
    ]
})

//导出路由
export default router
