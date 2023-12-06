import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import HomeView from '../views/HomeView.vue'
import Scores from '../views/Scores.vue'
import StartGame from '../views/StartGame.vue'
import ExitPage from '../views/ExitPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/start-game',
    name: 'StartGame',
    component: StartGame
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
    component: ExitPage
  },
  {
    path: '/',
    name:'HomeView',
    component: HomeView,
  },
  {
    path: '/scores',
    name: 'ScoresList',
    component: Scores
  },
  {
    path: '/game-run',
    name: 'GameRun',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameRun.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const isExitPage = from.path === '/game-run';
  if (isExitPage && to.path !== '/game-run') {
    const canvasElement = document.querySelector('#runner-canvas');
    if (canvasElement) {
      canvasElement.remove();
    }
  }
  next();
});


export default router
