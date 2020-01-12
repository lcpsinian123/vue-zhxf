/*
 * @Author: your name
 * @Date: 2019-10-24 16:17:24
 * @LastEditTime: 2019-11-23 18:21:00
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
      url: '/fireAhBase/save',
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
      url: '/fireAhBase/getListAll',
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
      url: '/fireAhBase/getList',
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
      url: '/fireAhBase/update',
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
      url: '/fireAhBase/delete',
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
 * 查询附件
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const getMdBase = params => {
  return axiosApi(
    {
      url: '/fireMdBase/getListAll',
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
export const listData = params => {
  return axiosApi(
    {
      url: '/fireAhBase/getList',
      method: 'post'
    },
    params
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
export const wddictionaries = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=FIRE_AH_BASE_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 物业基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const wyjc = params => {
  return axiosApi(
    {
      url: '/firePpBase/getListAll',
      method: 'post'
    },
    params
  )
}
/**
 * 单位基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const dwjc = params => {
  return axiosApi(
    {
      url: '/fireCpBase/getListAll',
      method: 'post'
    },
    params
  )
}
/**
 * 单位基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const jzujc = params => {
  return axiosApi(
    {
      url: '/fireBdBase/getListAll',
      method: 'post'
    },
    params
  )
}
/**
 * 楼层基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const lcjc = params => {
  return axiosApi(
    {
      url: '/fFireFlBase/getListAll',
      method: 'post'
    },
    params
  )
}

/**
 * 区域基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const quyu = params => {
  return axiosApi(
    {
      url: '/fireRgBase/getListAll',
      method: 'post'
    },
    params
  )
}

/**
 * 点位基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const dianwei = params => {
  return axiosApi(
    {
      url: '/firePpsBase/getListAll',
      method: 'post'
    },
    params
  )
}
/**
 * 图纸基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const doctreelist = params => {
  return axiosApi(
    {
      url: '/fireDwBase/treeList',
      method: 'post'
    },
    params
  )
}
/**
 * 图纸基础信息
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const AhBasetreelist = params => {
  return axiosApi(
    {
      url: 'fireAhBase/treeList',
      method: 'post'
    },
    params
  )
}
