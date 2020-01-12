import axiosApi from '@/axios/config'

/**
 * 获取计划配置项
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.type
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getPlanPz = params => {
  return axiosApi(
    {
      url: '/sysDictionary/dictionaries?type=PT_TYPE',
      method: 'post'
    },
    params
  )
}
/**
 * 新增巡检计划
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const addPlans = params => {
  return axiosApi(
    {
      url: '/firePtpbP/save',
      method: 'post'
    },
    params
  )
}
/**
 * 编辑巡检计划
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const editPlans = params => {
  return axiosApi(
    {
      url: '/firePtpbP/update',
      method: 'post'
    },
    params
  )
}
/**
 * 获取巡检计划列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getPlanList = (num, size, params) => {
  return axiosApi(
    {
      url: '/firePtpbP/getList?pageNum=' + num + '&pageSize=' + size,
      method: 'post'
    },
    params
  )
}
/**
 * 获取巡检隐患详情
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getDetail = guid => {
  return axiosApi(
    {
      url: '/firePtpbP/selectDetail?guid=' + guid,
      method: 'post'
    }
  )
}

/**
 * 获取巡检计划列表
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const deletePlan = params => {
  return axiosApi(
    {
      url: '/firePtpbP/delete?ids=' + params,
      method: 'post'
    }
  )
}
/**
 * 获取巡检计划详情
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getPlanDetail = params => {
  return axiosApi(
    {
      url: '/firePtpbP/getDetails',
      method: 'post'
    },
    params
  )
}

/**
 * 获取巡检人员
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getUserPerson = () => {
  return axiosApi(
    {
      url: '/user/getListAllInspection',
      method: 'post'
    }
  )
}

/**
 * 获取巡检人员
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *
 *
 * @param {Fn} cb 回调函数
 * @return
 */
export const getRouters = () => {
  return axiosApi(
    {
      url: '/firePtlpP/getListAll',
      method: 'post'
    }
  )
}
