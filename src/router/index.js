import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import OrderView from '../views/OrderView.vue'
import InfoView from '../views/InfoView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/order',
    name: "order",
    component: OrderView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
