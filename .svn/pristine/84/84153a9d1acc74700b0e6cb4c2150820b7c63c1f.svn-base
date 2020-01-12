/*
 * @Author: your name
 * @Date: 2019-11-23 18:09:32
 * @LastEditTime: 2019-11-28 20:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\axios\api\firealarm.js
 */
import axiosApi from '@/axios/config'

/**
 * 查询事件列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const getEvent = params => {
  return axiosApi(
    {
      url: '/fireRaReal/getEvent',
      method: 'post'
    },
    params
  )
}
/**
 * 查询事件列表/fireAevP/save
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const saveAevp = params => {
  return axiosApi(
    {
      url: '/fireAevP/save',
      method: 'post'
    },
    params
  )
}
/**
 * 查询详情
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const details = (emid,raType) => {
  return axiosApi(
    {
      url: '/fireEmBase/findBySn?emid=' + emid +'&raType=' +raType,
      method: 'post'
    }
  )
}
/**
 * 查询详情
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const findDetails = (emid,raType) => {
  return axiosApi(
    {
      url: '/fireRaReal/findDetails?emid=' + emid +'&raType=' +raType,
      method: 'post'
    }
  )
}
/**
 * 查询详情
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const fdetails = emid => {
  return axiosApi(
    {
      url: '/fireRaReal/details?emid=' + emid,
      method: 'post'
    }
  )
}
/**
 * 统计24小时报警事件
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const twentyFour = (ppid, rgname) => {
  return axiosApi(
    {
      url: '/fireRaReal/twentyFour?ppid=' + ppid + '&rgname=' + rgname,
      method: 'post'
    }
  )
}
/**
 * 统计7天报警事件
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const sevenDays = (ppid, rgname) => {
  return axiosApi(
    {
      url: '/fireRaReal/sevenDays?ppid=' + ppid + '&rgname=' + rgname,
      method: 'post'
    }
  )
}
/**
 * 统计7天报警事件
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const twotree = params => {
  return axiosApi(
    {
      url: '/fireRaReal/twotree',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltype = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=HD_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltypePrqr = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=PR_QR_CL_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltypeRshz = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=RS_HZ_QRTYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltypeRsgz = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=RS_GZ_QR_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltypeRscs = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=RS_CS_SD_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltypeRs = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=RS_CS_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltypeRspb = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=RS_PB_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const cltypeRshl = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=RS_HL_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 处理类型
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const shieleTit = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=SHIELD_TIT',
      method: 'post'
    },
    params
  )
}
