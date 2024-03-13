import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/channel',
      name: 'channel',
      component: () => import('../views/ChannelView/ChannelView.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/TodoView/TodoView.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/MyView/MyView.vue')
    }
  ]
})

export default router
