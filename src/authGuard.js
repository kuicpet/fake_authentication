import store from './store'

const authGuard = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!store.state.loggedIn) {
      next('/login')
      return
    }
  }
  if (to.matched.some((record) => record.meta.requireGuest)) {
    if (store.state.loggedIn) {
      next('/products')
      return
    }
  }
  next()
}

export default authGuard
