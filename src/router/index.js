import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import instaApp from '../views/insta-app.vue'
import explorerPage from '../views/explorer-page.vue'
import directPage from '../views/direct-page.vue'

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
      component: directPage
    },
    {
      path: '/new-post',
      name: 'new-post',
      component: instaApp
    },
    {
      path: '/explore',
      name: 'explore',
      component: explorerPage
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
