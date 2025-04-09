import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIndex from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeIndex
  },
]

const router = new VueRouter({
  routes,
  // mode:history
})

export default router
