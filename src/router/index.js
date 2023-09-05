import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LayananKami from '../views/LayananKami.vue'
import TentangKami from '../views/TentangKami.vue'
import Blog from '../views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  {
    path: '/layanankami',
    name: 'LayananKami',
     component: LayananKami
  },
  {
    path: '/tentangkami',
    name: 'TentangKami',
     component: TentangKami
  },
  {
    path: '/blog',
    name: 'Blog',
     component: Blog
  }
  ]
})

export default router
