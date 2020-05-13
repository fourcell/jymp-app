import { post } from '../../http'
import { get } from '../../http'

//添加到购物车
export const setShopping = parm => post('/setShopping', parm)

//详情页数据获取
export const appDatails = parm => get(`/appDatails?id=${parm}`)

//购物车数据获取
export const getShopping = parm => get(`/getShopping?userId=${parm}`)

//删除购物车单个数据
export const deleteShopping = (userId,skuId) => get(`/deleteShopping?userId=${userId}&skuId=${skuId}`)

//添加订单
export const setOrder = parm => post('/setOrder', parm)

//查询订单
export const getOrder = parm => get(`/getOrder?userId=${parm}`)