import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routeConfig from './router-config' // 引入router-config.js文件

//注册
Vue.use(VueRouter)
Vue.use(ElementUI)

//实例化
const router = new VueRouter({
    routes: routeConfig
})

new Vue({
    router,
    // store,
    el: '#app',
    render: h => h(App)
})