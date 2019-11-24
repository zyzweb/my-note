import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); //模块化开发必须要use

//导入组件
import test from "../components/test.vue";
import gaizao from "../components/gaizao.vue";
import page1 from "../components/keep-alive用法/page1";
import hello from "../components/keep-alive用法/hello";
import home from "../components/keep-alive用法/home";
import element from "../components/element-ui使用/element";
import element2 from "../components/element-ui使用/element2";
import popup from "../components/mint-ui使用/popup.vue";
import easytable from "../components/vue-easytable";
import checked from "@/components/绑定checked值";
import editor from "../components/editor";

const router = new VueRouter({
  routes: [
    { path: "/test", component: test },
    { path: "/gaizao", component: gaizao },
    { path: "/easytable", component: easytable },
    { path: "/checked", component: checked },
    { path: "/editor", component: editor },
    { path: "/page1", component: page1, meta: { keepAlive: true} },// 需要被缓存
    { path: "/hello", component: hello, meta: {keepAlive: false} },
    { path: "/home", component: home },
    { path: "/element", component: element },
    { path: "/element2", component: element2 },
    { path: "/popup", component: popup },
    { path: "/", component: test, meta: { keepAlive: false } }, // 自定义的一个属性,可以自己赋予一个值 
  ]
});

//导出路由
export default router;
