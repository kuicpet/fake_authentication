import { createStore } from 'vuex'

const store = createStore({
  state: {
    loggedIn: false,
    user: null,
  },
  mutations: {
    login(state, user) {
      state.loggedIn = true
      state.user = user
    },
    logout(state) {
      state.loggedIn = false
      state.user = null
    },
  },
  actions: {
    login({commit}, user){
      commit('login', user)
    },
    logout({commit}){
      commit('logout')
    }
  }
})

export default store
