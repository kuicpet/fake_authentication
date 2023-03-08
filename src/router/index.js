import { createRouter, createWebHistory } from 'vue-router'
import authGuard from '../authGuard'
import store from '../store'

// views
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

// routes
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Products',
    path: '/products',
    component: () => import('@/views/Products.vue'),
    meta: {
      //authIsRequired: true,
      requiresAuth: true,
    },
  },
  {
    name: 'Product',
    path: '/products/:productId',
    component: () => import('@/views/ProductDetails.vue'),
    meta: {
      //authIsRequired: true,
      requiresAuth: true,
    },
  },
  {
    name: 'Signup',
    path: '/signup',
    component: () => import('@/views/Signup.vue'),
    meta: {
      // authIsRequired: true,
      requiresGuest: true,
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      // authIsRequired: true,
      requiresGuest: true,
    },
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

// router
const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(!store.state.loggedIn){
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else if(to.matched.some((record) => record.meta.requiresGuest)){
    if(store.state.loggedIn){
      next({
        name: 'Products',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
