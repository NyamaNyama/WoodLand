import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/start-game',
    name: 'StartGame',
    component: () => import(/* webpackChunkName: "about" */ '../views/StartGame.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/game-control',
    name: 'GameControl',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameControl.vue')
  },
  {
    path: '/exit-page',
    name: 'ExitPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExitPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
