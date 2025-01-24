import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Article from '../views/Article.vue';
import Details from '../views/Details.vue';
import Admin from "@/views/Profile.vue";



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/test',
    name: 'test',
    component: Details
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
