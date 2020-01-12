/*
 * @Author: your name
 * @Date: 2019-12-02 15:26:44
 * @LastEditTime: 2019-12-02 17:23:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\axios\api\role.js
 */
import axiosApi from '@/axios/config'

/**
 * 获取角色列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.type
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getlistrole = (pageNum, pageSize, params) => {
  return axiosApi(
    {
      url: '/role/getList?pageNum=' + pageNum + '&pageSize=' + pageSize,
      method: 'post'
    },
    params
  )
}
/**
 * 获取角色列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.type
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const deltetrole = ids => {
  return axiosApi(
    {
      url: '/role/delete?ids=' + ids,
      method: 'post'
    }
  )
}
