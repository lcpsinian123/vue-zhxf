/*
 * @Author: your name
 * @Date: 2019-11-29 14:16:36
 * @LastEditTime: 2019-11-29 15:55:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\axios\api\maint.js
 */
import axiosApi from '@/axios/config'

/**
 * 获取巡检分页列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.type
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getlist = (pageNum, pageSize, params) => {
  return axiosApi(
    {
      url: '/firePtpjP/getList?pageNum=' + pageNum + '&pageSize=' + pageSize,
      method: 'post'
    },
    params
  )
}
/**
 * 新增巡检分
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.type
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const save = params => {
  return axiosApi(
    {
      url: '/firePtpjP/save',
      method: 'post'
    },
    params
  )
}
/**
 * 修改巡检分
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.type
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const update = params => {
  return axiosApi(
    {
      url: '/firePtpjP/update',
      method: 'post'
    },
    params
  )
}
/**
 * 删除巡检分
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.type
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const deletes = ids => {
  return axiosApi(
    {
      url: '/firePtpjP/delete?ids=' + ids,
      method: 'post'
    }
  )
}
/**
 * 字典列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const madictionaries = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=EM_TYPE',
      method: 'post'
    },
    params
  )
}
