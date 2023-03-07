import store from './store'

const authGuard = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.loggedIn) {
      next('/login')
      return
    }
  }
  if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.state.loggedIn) {
      next('/products')
      return
    }
  }
  next()
}

export default authGuard
