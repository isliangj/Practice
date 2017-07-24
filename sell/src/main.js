// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// 引用路由组件
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

// 全局引用公用样式
import './common/stylus/index.styl'

// 注册路由
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 定义路由组件
const routes = [
  { path: '/', component: goods },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

// 创建router实例
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

// 创建和挂载根实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

