import { createStore } from 'vuex'

const store = createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
    login(state) {
      state.loggedIn = true
    },
    logout(state) {
      state.loggedIn = false
    },
  },
  actions: {
    login({commit}){
      commit('login')
    },
    logout({commit}){
      commit('logout')
    }
  }
})

export default store
