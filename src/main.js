/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 16:56:22
 * @LastEditTime: 2019-11-11 18:30:14
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design' // 引入iview依赖
import 'view-design/dist/styles/iview.css' // 引入iview css样式
import axios from 'axios'
// base样式
import '@/assets/less/base.less'
import '@/assets/iconfont/iconfont.css'
// ztree
import '@/assets/zTree/js/jquery.min.js'
// import '@/assets/zTree/js/jquery.ztree.core.js'
// import '@/assets/zTree/js/jquery.ztree.excheck.js'
// import '@/assets/zTree/css/zTreeStyle.css'

// import 'jquery'
import 'ztree'
import 'ztree/css/metroStyle/metroStyle.css'
// import VueRouter from 'vue-router'
// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
import 'babel-polyfill'
Vue.config.productionTip = false

Vue.use(ViewUI)

Vue.prototype.$axios = axios
// 设置title
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })
// const RouterConfig = {
//   routes: Routers
// };
// const router = new VueRouter(RouterConfig);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
