import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './home/index'
import GroupBooking from './group-booking/index'
import MyMessage from './my-message/index'
import ShoppingTrolley from './shopping-trolley/index'
import Register from './register/index'
import Login from './login/index'

const routes = [
    {
        path: '/manage',
        name: 'manage',
        alias: '/',
        redirect:'home/recommend',
        component: () => import('../pages/index.vue'),
        children: [
            ...Home,
            ...GroupBooking,
            ...MyMessage,
            ...ShoppingTrolley
        ]
    },
    ...Register,
    ...Login
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router