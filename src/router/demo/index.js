/*
 * @Author: your name
 * @Date: 2019-09-03 10:19:47
 * @LastEditTime: 2019-12-02 14:27:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /d:\element UI\vue-xf\src\router\demo\index.js
 */
// import docManage from './docManage.js'
export default [
  {
    path: '/',
    // component: () => import('@/components/securityAssessment/indicatorSetting')
    redirect: '/firealarm'
  },
  {
    path: '/indicatorSetting',
    name: '指标设置',
    component: () => import('@/components/securityAssessment/indicatorSetting')
  },
  {
    path: '/assessmentTask',
    name: '评估任务',
    component: () => import('@/components/securityAssessment/assessmentTask')
  },
  {
    path: '/selfAssessment',
    name: '自主评估',
    component: () => import('@/components/securityAssessment/selfAssessment')
  },
  {
    path: '/alarmEvent',
    name: '报警记录',
    component: () => import('@/components/alarmRecord/alarmEvent')
  },
  {
    path: '/dataBrowse',
    name: '数据浏览',
    component: () => import('@/components/alarmRecord/dataBrowse')
  },
  {
    path: '/doc',
    name: '文档管理',
    component: () => import('@/components/docManage/docManage.vue')
  },
  {
    path: '/draw',
    name: '图纸管理',
    component: () => import('@/components/docManage/drawManage.vue')
  },
  {
    path: '/fire',
    name: '消防安全',

    component: () => import('@/components/firewarden/fire.vue')
  },
  {
    path: '/maint',
    name: '维保巡检',

    component: () => import('@/components/maintenance/maintenance.vue')
  },
  {
    path: '/maindian',
    name: '维保点位',

    component: () => import('@/components/maintenance/maindian.vue')
  },
  {
    path: '/mainrouter',
    name: '维保路由',

    component: () => import('@/components/maintenance/mainrouter.vue')
  },
  {
    path: '/mainjilu',
    name: '巡检记录',
    component: () => import('@/components/maintenance/mainjilu.vue')
  },
  {
    path: '/plan',
    name: '巡检计划',
    component: () => import('@/components/maintenance/plan.vue')
  },
  {
    path: '/hiddenDanger',
    name: '隐患处理',
    component: () => import('@/components/maintenance/hiddenDanger.vue')
  },
  {
    path: '/user',
    name: '用户管理',

    component: () => import('@/components/user/user.vue')
  },
  {
    path: '/menu',
    name: '菜单管理',

    component: () => import('@/components/user/menus.vue')
  },
  {
    path: '/role',
    name: '角色管理',

    component: () => import('@/components/user/role.vue')
  },
  {
    path: '/firealarm',
    name: '火灾报警',

    component: () => import('@/components/firealarm/firealarm.vue')
  },
  {
    path: '/power',
    name: '智慧用电',

    component: () => import('@/components/power/power.vue')
  },
  {
    path: '/baojingEvent',
    name: '报警事件',

    component: () => import('@/components/dataAnalysis/baojingEvent.vue')
  },
  {
    path: '/baojingTrend',
    name: '报警趋势',

    component: () => import('@/components/dataAnalysis/baojingTrend.vue')
  },
  {
    path: '/patrol',
    name: '维保',

    component: () => import('@/components/dataAnalysis/patrol.vue')
  },
  {
    path: '/runstatus',
    name: '运行状态',

    component: () => import('@/components/dataAnalysis/runstatus.vue')
  },
  {
    path: '/fireDoor',
    name: '防火门监控',

    component: () => import('@/components/fireDoor/fireDoor.vue')
  },
  {
    path: '/video',
    name: '视频监控',

    component: () => import('@/components/video/video.vue')
  },
  {
    path: '/firewater',
    name: '消防供水设施',

    component: () => import('@/components/firewater/firewater.vue')
  }

]
