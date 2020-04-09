import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        loginSuccess(state, str) {
            state.token = str
        }
    },
    actions: {
    }
})

export default store