import { createRouter, createWebHistory } from 'vue-router'
import BoardApp from '@/views/boards/BoardApp.vue';
import boardRoute from './boardRoute.js';

import BookApp from '@/views/books/BookApp.vue';
import bookRoutes from './bookRoute.js';

const routes = [
  {
    path: '/',
    redirect : { name : 'boardApp'}
    
  },
  {
    path: '/board',
    name: 'boardApp',
    component: BoardApp,
    children : boardRoute
  },
  {
    path: '/book',
    name: 'bookApp',
    component: BookApp,
    children : bookRoutes
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
