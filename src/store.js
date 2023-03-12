//import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    loggedIn: !!localStorage.getItem('token'),
    signedUp: false,
    //token: 'morenike',
    //user: null,
    //products: []
    cart: []
  },
  mutations: {
    login(state, loggedIn) {
      state.loggedIn = loggedIn
      //state.user = user
    },
    logout(state) {
      state.loggedIn = false
      //state.user = null
    },
    signup(state){
      state.signedUp = true
    },
    addToCart(state, item){
      state.cart.push(item)
    },
    removeFromCart(state, index){
      state.cart.splice(index, 1)
    }
    /*setProducts(state, products){
      state.products = products
    }*/
  },
  actions: {
    login({commit}, loggedIn){
      commit('login', loggedIn)
    },
    logout({commit}){
      localStorage.removeItem('token')
      commit('logout')
    },
    signup({commit}){
      commit('signup')
    },
    addToCart({commit}, item){
      commit('addToCart', item)
    },
    removeFromCart({commit}, index){
      commit('removeFromCart', index)
    }
    /*async fetchProducts({commit}){
      const endpoint = 'https://dummyjson.com/products'
      const response = await axios.get(endpoint)
      const products = response.data
      console.log(products)
      commit('setProducts', products)
    }*/
  },
  getters: {
    /*getProducts(state){
      return state.products
    }*/
    getCartItems(state){
      return state.cart
    },
    getCartItemsCount(state){
      return state.cart.length
    }, 
    getCartTotal(state){
      return state.cart.reduce((total, item) => total + (item.price - item.price * item.discountPercentage / 100), 0 )
    }
  }
})

export default store
