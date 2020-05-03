import { post } from '../../http'

//添加到购物车
export const setShopping = parm => post('/setShopping', parm)