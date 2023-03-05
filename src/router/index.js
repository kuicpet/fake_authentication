import { createRouter, createWebHistory } from 'vue-router'

// views
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Product from '../views/ProductDetails.vue'

// routes
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    children: [
      {
        name: 'Products',
        path: '/products',
        component: Products,
        meta: {
          authIsRequired: true,
        },
      },
      {
        name: 'Product',
        path: '/products/:productId',
        component: Product,
        meta: {
          authIsRequired: true,
        },
      },
    ],
  },
  {
    name: 'Signup',
    path: '/signup',
    component: () => import('@/views/Signup.vue'),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
]

// router
const router = createRouter({ history: createWebHistory(), routes })

const isAuthenticated = () => !!localStorage.getItem('token')

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
})
export default router
