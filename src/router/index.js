import { createRouter, createWebHistory } from 'vue-router'
import authGuard from '../authGuard'

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
      requireAuth: true
    },
    beforeEnter: authGuard
  },
  {
    name: 'Product',
    path: '/products/:productId',
    component: () => import('@/views/ProductDetails.vue'),
    meta: {
      //authIsRequired: true,
      requireAuth: true
    },
    beforeEnter: authGuard
  },
  {
    name: 'Signup',
    path: '/signup',
    component: () => import('@/views/Signup.vue'),
    meta: {
      // authIsRequired: true,
      requireGuest: true
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      // authIsRequired: true,
      requireGuest: true
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

// router
const router = createRouter({ history: createWebHistory(), routes })

/* const isAuthenticated = () => !!localStorage.getItem('token')

const canUserAccess = (to) => {
  if (!isAuthenticated() && to.meta.authIsRequired && to.name !== 'Login') {
    return false
  }
  return true
}

router.beforeEach((to, from) => {
  const canAccess = canUserAccess(to)
  if (isAuthenticated() && to.name === 'Login') {
    return {
      name: 'Home',
    }
  }
  if (!canAccess) {
    return {
      name: 'Login',
    }
  }
})*/
export default router
