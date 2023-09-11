import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import WebshopMainSwitch from '../views/WebshopMainSwitch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/feeders-and-boilies',
    name: 'feeders-and-boilies',
    component: WebshopMainSwitch
  },
  {
    path: '/spinning',
    name: 'spinning',
    component: WebshopMainSwitch
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
