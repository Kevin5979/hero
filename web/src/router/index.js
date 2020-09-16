import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Strategy = () => import('views/strategy/Strategy')
const Match = () => import('views/match/Match')

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/strategy",
    component: Strategy
  },
  {
    path: "/match",
    component: Match
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
