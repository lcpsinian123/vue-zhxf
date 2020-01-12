import axiosApi from '@/axios/config'

/**
 *  安全评估
 * 指标配置管理
 *
 *  新增评估
 * @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *content
考核内容
creatrTime
创建时间
grade
评分方法
guid
mpid
父级节点ID
name
指标名称
sort
排序
standard
考核标准
totalPoint
分值
 *
 */
export const addAssess = params => {
  return axiosApi({
    url: 'scoreType/save',
    method: 'post'
  }, params)
}

/** 查询所有列表
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 */
export const getListAll = params => {
  return axiosApi(
    {
      url: 'scoreType/getListAll',
      method: 'post'
    }, params
  )
}
/** 查询所有列表
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 */
export const getAssListAll = params => {
  return axiosApi(
    {
      url: 'scoreType/findListByPerid',
      method: 'post'
    }, params
  )
}
/**  分页查询
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *          pageNum 页码
 *          pageSize 页容量(每页显示条数)
 */
export const getList = (num, size) => {
  return axiosApi({
    url: 'scoreType/getList?pageNum=' + num + '&pageSize=' + size,
    method: 'post'
  }
  )
}

/**  删除评估指标
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *          ids待删除的id数据，多个逗号分隔
 *
 */
export const deleteAssess = id => {
  return axiosApi({
    url: '/scoreType/delete?ids=' + id,
    method: 'post'
  })
}

/**  修改评估指标
 *  @param {String} url 接口url
 *  @param {string} method 请求方式
 *  @param {string} params 参数
 *          ids待删除的id数据，多个逗号分隔
 *
 */
export const updateAssess = params => {
  return axiosApi({
    url: '/scoreType/update',
    method: 'post'
  }, params)
}

/** -----------------------------------------
 *  任务管理
 *
 *  新增评估
 * @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *
 *
 */
export const addTask = params => {
  return axiosApi({
    url: 'scoreTask/save',
    method: 'post'
  }, params)
}

/** 查询所有任务列表
   *  @param {String} url 接口url
   * @param {string} method 请求方式
   * @param {string} params 参数
   */
export const getTaskListAll = params => {
  return axiosApi(
    {
      url: 'scoreTask/getListAll',
      method: 'post'
    }, params
  )
}

/**  分页查询
   *  @param {String} url 接口url
   * @param {string} method 请求方式
   * @param {string} params 参数
   *          pageNum 页码
   *          pageSize 页容量(每页显示条数)
   */
export const getTaskList = (obj, params) => {
  return axiosApi({
    url: '/scoreTask/getList?pageNum=' + obj.pageNum + '&pageSize=' + obj.pageSize + '&isScore=' + obj.status + '&startTime=' + obj.startTime + '&endTime=' + obj.endTime,
    method: 'post'
  }, params

  )
}

/**  删除评估任务
   *  @param {String} url 接口url
   * @param {string} method 请求方式
   * @param {string} params 参数
   *          ids待删除的id数据，多个逗号分隔
   *
   */
export const deleteTask = params => {
  return axiosApi({
    url: 'scoreTask/delete?ids=' + params,
    method: 'post'
  })
}

/**  修改评估任务
   *  @param {String} url 接口url
   * @param {string} method 请求方式
   * @param {string} params 参数
   *          ids待删除的id数据，多个逗号分隔
   *
   */
export const updateTask = params => {
  return axiosApi({
    url: 'scoreTask/update',
    method: 'post'
  }, params)
}

/** --------------------------------------------------------
 *  自主评估
 *
 *
 *  新增评估
 * @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *
 *
 */
export const addAuto = params => {
  return axiosApi({
    url: 'scoreDetails/save',
    method: 'post'
  }, params)
}

/** 查询所有列表
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 */
export const getAutoListAll = params => {
  return axiosApi(
    {
      url: 'scoreDetails/getListAll',
      method: 'post'
    }, params
  )
}

/**  分页查询
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *          pageNum 页码
 *          pageSize 页容量(每页显示条数)
 */
export const getAutoList = params => {
  return axiosApi({
    url: 'scoreDetails/getList',
    method: 'post'
  }
  , params
  )
}

/**  删除评估指标
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *          ids待删除的id数据，多个逗号分隔
 *
 */
export const deleteAuto = params => {
  return axiosApi({
    url: '/scoreDetails/delete',
    method: 'post'
  }, params)
}

/**  修改评估指标
 *  @param {String} url 接口url
 * @param {string} method 请求方式
 * @param {string} params 参数
 *          ids待删除的id数据，多个逗号分隔
 *
 */
export const updateAuto = params => {
  return axiosApi({
    url: '/scoreDetails/update',
    method: 'post'
  }, params)
}
/**
 *  @param {string} url 接口getTaskList
 * @param {object} params 参数

 */
export const scoreSubmit = params => {
  return axiosApi({
    url: '/scoreDetails/save',
    method: 'post'
  }, params)
}

/** 评估标准接口
 *  @param {string} url 接口
 *  @param {string} method 请求方式
 * @param {object} params 参数

 */
export const getAssessBz = params => {
  return axiosApi({
    url: 'scoreType/findListAddType',
    method: 'post'
  }, params)
}
/**
 *下发
 * *  @param {string} url 接口
 *  @param {string} method 请求方式
 * @param {object} params 参数
 */
export const downAssFile = params => {
  return axiosApi({
    url: '/scoreTask/update',
    method: 'post'
  }, params)
}
// 评估详情
export const getAssessDetail = params => {
  return axiosApi({
    url: '/scoreDetails/findTreeScoreByGuid',
    method: 'post'
  }, params)
}
