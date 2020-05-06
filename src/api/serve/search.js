import { post } from '../http'

//添加到购物车
export const Search = parm => post('/search', parm)