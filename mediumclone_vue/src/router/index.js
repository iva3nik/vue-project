import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
