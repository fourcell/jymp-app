import { get } from '../../http'

//获取商品信息
export const appSelect = parm => get(`/appSelect?type=${parm}`)