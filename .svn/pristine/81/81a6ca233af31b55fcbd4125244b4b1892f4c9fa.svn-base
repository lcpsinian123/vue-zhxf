/*
 * @Author: your name
 * @Date: 2019-10-24 16:17:24
 * @LastEditTime: 2019-11-09 11:57:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\axios\api\user.js
 */
import axiosApi from '@/axios/config'

/**
 * 用户登录
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const login = params => {
  return axiosApi(
    {
      url: '/user/login',
      method: 'post'
    },
    params
  )
}

/**
 * 分页查询用户列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const getuserlist = params => {
  return axiosApi(
    {
      url: '/user/getList',
      method: 'post'
    },
    params
  )
}
/**
 * 添加用户列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const adduser = params => {
  return axiosApi(
    {
      url: '/user/save',
      method: 'post'
    },
    params
  )
}
/**
 * 添加用户列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const deluser = params => {
  return axiosApi(
    {
      url: '/user/delete',
      method: 'post'
    },
    params
  )
}
/**
 * 修改用户列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const upduser = params => {
  return axiosApi(
    {
      url: '/user/update',
      method: 'post'
    },
    params
  )
}
/**
 * 权限管理列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const getlistpower = params => {
  return axiosApi(
    {
      url: '/sysPower/getListAll',
      method: 'post'
    },
    params
  )
}
/**
 * 新增权限
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const savepower = params => {
  return axiosApi(
    {
      url: '/sysPower/save',
      method: 'post'
    },
    params
  )
}
/**
 * 删除权限
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const delpower = params => {
  return axiosApi(
    {
      url: '/sysPower/delete',
      method: 'post'
    },
    params
  )
}
/**
 * 删除权限
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const updatepower = params => {
  return axiosApi(
    {
      url: '/sysPower/update',
      method: 'post'
    },
    params
  )
}
