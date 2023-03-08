import { createStore } from 'vuex'

const store = createStore({
  state: {
    loggedIn: false,
    signedUp: false,
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
    signup(state){
      state.signedUp = true
    }
  },
  actions: {
    login({commit}){
      commit('login')
    },
    logout({commit}){
      commit('logout')
    },
    signup({commit}){
      commit('signup')
    }
  }
})

export default store
