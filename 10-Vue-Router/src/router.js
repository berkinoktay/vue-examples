import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/newUser',
    name: 'NewUser',
    component: () => import('@/views/NewUserPage.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router