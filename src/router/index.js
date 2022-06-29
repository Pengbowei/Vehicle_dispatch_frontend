import { createRouter, createWebHashHistory } from 'vue-router'
import rou_login from '../views/LoginView.vue'
import rou_rent from '../views/OrderView.vue'
import rou_info from '../views/InfoView.vue'

const routes = [
  {
    path:'/',
    name:'loginPage',
    component: rou_login
  },
  {
    path:'/orderPage',
    name:'orderPage',
    component:rou_rent
  },
  {
    path:'/infoPage',
    name:'infoPage',
    component:rou_info
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
