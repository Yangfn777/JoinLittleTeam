import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '../App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: app
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
