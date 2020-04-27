import { post } from '../../http'

//用户注册
export const regs = parm => post('/appRegs', parm)

//用户登录
export const login = parm => post('/appLogin', parm)