import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        show: false,//首页搜索弹窗
        widthShow: false,//弹窗是否全屏
    },
    mutations: {
        loginSuccess(state, str) {
            state.token = str
        },
        show(state, str) {
            state.show = str
        },
        widthShow(state, str) {
            state.widthShow = str
        },
    },
    actions: {
    }
})

export default store