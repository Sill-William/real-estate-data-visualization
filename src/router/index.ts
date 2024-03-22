import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { commonRoutes } from './routes/common'

const routes: RouteRecordRaw[] = [{
  path: '/databoard',
  name: 'DataBoard',
  component: () => import('@/views/databoards/Layout.vue'),
  children: [...commonRoutes]
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
