import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import instaApp from '../views/insta-app.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: instaApp
    },
    {
      path: '/direct',
      name: 'direct-msgs',
      component: instaApp
    },
    {
      path: '/new-post',
      name: 'new-post',
      component: instaApp
    },
    {
      path: '/explore',
      name: 'explore',
      component: instaApp
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: instaApp
    },
    {
      path: '/profile',
      name: 'profile',
      component: instaApp
    },
  ]
})

export default router
