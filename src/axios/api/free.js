/*
 * @Author: your name
 * @Date: 2019-11-09 17:09:17
 * @LastEditTime: 2019-11-23 14:22:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\axios\api\free.js
 */
import axiosApi from '@/axios/config'

/**
 * 新增消防宣传信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const savexfxc = params => {
  return axiosApi(
    {
      url: '/xfxc/saveXfxcInformation',
      method: 'post'
    },
    params
  )
}
/**
 * 修改消防宣传信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const updatexfxc = params => {
  return axiosApi(
    {
      url: '/xfxc/updateXfxcInformation',
      method: 'post'
    },
    params
  )
}
/**
 * 分页显示消防宣传信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const getxfxc = params => {
  return axiosApi(
    {
      url: '/xfxc/getXfscList',
      method: 'post'
    },
    params
  )
}
/**
 * 删除消防宣传信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const dekxfxc = params => {
  return axiosApi(
    {
      url: '/xfxc/deleteXfxcInformation',
      method: 'post'
    },
    params
  )
}
/**
 * 删除消防宣传信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const savedownload = params => {
  return axiosApi(
    {
      url: '/xfxc/saveXfxcDownloadInformation',
      method: 'post'
    },
    params
  )
}
/**
 * 消防宣传文档
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const getxfxcAllFile = params => {
  return axiosApi(
    {
      url: '/xfxc/findAllFile',
      method: 'post'
    },
    params
  )
}
/**
 * 分类字典列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const xcdictionarie = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=ISSUE_TYPE',
      method: 'post'
    },
    params
  )
}
