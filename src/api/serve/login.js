import { post } from '../http'
export const Login = param =>post('/login',param)