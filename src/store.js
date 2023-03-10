//import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    loggedIn: false,
    signedUp: false,
    user: null,
    //products: []
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
    },
    /*setProducts(state, products){
      state.products = products
    }*/
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
    },
    /*async fetchProducts({commit}){
      const endpoint = 'https://dummyjson.com/products'
      const response = await axios.get(endpoint)
      const products = response.data
      console.log(products)
      commit('setProducts', products)
    }*/
  },
  /*getters: {
    getProducts(state){
      return state.products
    }
  }*/
})

export default store
