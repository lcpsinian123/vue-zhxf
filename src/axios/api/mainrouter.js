/*
 * @Author: your name
 * @Date: 2019-11-19 10:50:19
 * @LastEditTime: 2019-11-21 19:20:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\axios\api\mainrouter.js
 */
import axiosApi from '@/axios/config'

/**
 * 路由分页
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const routerlist = params => {
  return axiosApi(
    {
      url: '/firePtlpP/getList',
      method: 'post'
    },
    params
  )
}
/**
 * 路由新增
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const routersave = params => {
  return axiosApi(
    {
      url: '/firePtlpP/save',
      method: 'post'
    },
    params
  )
}
/**
 * 路由删除
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const routerdel = params => {
  return axiosApi(
    {
      url: '/firePtlpP/delete',
      method: 'post'
    },
    params
  )
}
/**
 * 路由修改
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const routerupdate = params => {
  return axiosApi(
    {
      url: '/firePtlpP/update',
      method: 'post'
    },
    params
  )
}
/**
 * 路由修改
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const routedetail = params => {
  return axiosApi(
    {
      url: '/firePtlpP/getDetails',
      method: 'post'
    },
    params
  )
}
/**
 * 点位修改
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const diansave = params => {
  return axiosApi(
    {
      url: '/relPjPps/save',
      method: 'post'
    },
    params
  )
}
/**
 * 点位修改
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const dianupdate = params => {
  return axiosApi(
    {
      url: '/relPjPps/update',
      method: 'post'
    },
    params
  )
}
/**
 * 点位修改
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const diandetails = params => {
  return axiosApi(
    {
      url: '/relPjPps/findDetails',
      method: 'post'
    },
    params
  )
}
