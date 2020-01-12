/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 16:56:22
 * @LastEditTime: 2019-11-30 17:00:19
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'

// 按模块管理引用路由
import demo from './demo'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'nofind',
      component: () => import('@/views/common/Login'),
      meta: {
        title: '找不到页面'
      }
    },
    {
      path: '/index',
      component: () => import('@/views/Demo'),
      meta: {
        title: 'demo页面'
      },
      children: [...demo]
    },
    {
      path: '/login',
      component: () => import('@/views/common/Login'),
      meta: {
        title: 'login'
      }
    },
    {
      path: '/synthesize',
      component: () => import('@/components/synthesize/synthesize.vue'),
      meta: {
        title: '综合展示'
      }
    }
  ]
})
