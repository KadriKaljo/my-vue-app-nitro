import { createRouter, createWebHistory } from 'vue-router'
import WorkMainPage from '@/views/WorkMainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: WorkMainPage },
    { path: '/works/xooltech', component: () => import('@/components/XoolTech.vue') }
  ],
  scrollBehavior() { return { top: 0 } }
})

export default router
