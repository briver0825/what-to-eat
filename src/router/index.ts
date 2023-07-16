import { 
  createRouter, 
  createWebHashHistory, 
  RouteRecordRaw 
} from 'vue-router'

import Home from '@/pages/home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: () => import('../pages/login/index.vue')
  }
]

export const router = createRouter({
  routes,
  history: createWebHashHistory()
})