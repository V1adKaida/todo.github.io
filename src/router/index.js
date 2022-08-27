import { createRouter, createWebHistory } from 'vue-router'
import Authorization from '@/views/Authorization'
import Todo from '@/views/ToDo'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Authorization
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo,
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const isLoggedIn = localStorage.getItem('accessToken');
  if (to.name !== 'auth' && !isLoggedIn) { return { name: 'auth' } }
  if (to.name == 'auth' && isLoggedIn) { return { name: 'todo' } }
})

export default router
