/*
 * @Author: your name
 * @Date: 2019-10-24 16:17:24
 * @LastEditTime: 2019-11-13 14:52:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\axios\api\user.js
 */
import axiosApi from '@/axios/config'

/**
 * 数据添加
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const addData = params => {
  return axiosApi(
    {
      url: '/fireDwBase/save',
      method: 'post'
    },
    params
  )
}

/**
 * 查询全部列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const queryData = params => {
  return axiosApi(
    {
      url: '/fireDwBase/getListAll',
      method: 'post'
    },
    params
  )
}
/**
 * 分页查询列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const getList = params => {
  return axiosApi(
    {
      url: '/fireDwBase/getList',
      method: 'post'
    },
    params
  )
}
/**
 * 修改文档
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const alterData = params => {
  return axiosApi(
    {
      url: '/fireDwBase/update',
      method: 'post'
    },
    params
  )
}
/**
 * 删除数据
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const deleteData = params => {
  return axiosApi(
    {
      url: '/fireDwBase/delete',
      method: 'post'
    },
    params
  )
}
/**
 * 上传文件
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const upLoading = params => {
  return axiosApi(
    {
      url: '/fireMdBase/createUploadFile',
      method: 'post'
    },
    params
  )
}
/**
 * 下载文件
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @returndownload
 */
export const download = params => {
  return axiosApi(
    {
      url: '/fireMdBase/downloadByObjGuid',
      method: 'get'
    },
    params
  )
}
/**
 * 数据分页
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const listData = params => {
  return axiosApi(
    {
      url: '/fireDwBase/getList',
      method: 'post'
    },
    params
  )
}
/**
 * 数据分页
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const tzdictionaries = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=FIRE_DW_BASE_TYPE',
      method: 'post'
    },
    params
  )
}
