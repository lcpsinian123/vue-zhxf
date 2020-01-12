/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 16:56:22
 * @LastEditTime: 2019-10-30 14:18:55
 * @LastEditors: Please set LastEditors
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
export const get = params => {
  return axiosApi(
    {
      url: '/admins',
      method: 'get'
    },
    params
  )
}
