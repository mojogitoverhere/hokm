import { createRouter, createWebHashHistory } from 'vue-router'
import Setup from '../views/Setup.vue'

const routes = [
  {
    path: '/',
    name: 'Setup',
    component: Setup
  },
  {
    path: '/round',
    name: 'Round',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "roundstart" */ '../views/RoundStart.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
