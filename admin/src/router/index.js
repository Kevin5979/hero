import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('views/login/Login')
const Main = () => import('views/Main')
// 分类
const CategoryEdit = () => import('views/category/CategoryEdit')
const CategoryList = () => import('views/category/CategoryList')
// 物品
const ArticleEdit = () => import('views/article/ArticleEdit')
const ArticleList = () => import('views/article/ArticleList')
// 英雄
const HeroEdit = () => import('views/hero/HeroEdit')
const HeroList = () => import('views/hero/HeroList')
// 文章
const EssayEdit = () => import('views/essay/EssayEdit')
const EssayList = () => import('views/essay/EssayList')
// 广告
const AdEdit = () => import('views/ad/AdEdit')
const AdList = () => import('views/ad/AdList')
// 用户
const AdminUserEdit = () => import('views/users/AdminUserEdit')
const AdminUserList = () => import('views/users/AdminUserList')



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: "/category/create",
        component: CategoryEdit
      },
      {
        path: '/category/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: "/category/list",
        component: CategoryList
      },
      {
        path: "/article/create",
        component: ArticleEdit
      },
      {
        path: '/article/edit/:id',
        component: ArticleEdit,
        props: true
      },
      {
        path: "/article/list",
        component: ArticleList
      },
      {
        path: "/hero/create",
        component: HeroEdit
      },
      {
        path: "/hero/edit/:id",
        component: HeroEdit,
        props: true
      },
      {
        path: "/hero/list",
        component: HeroList
      },
      {
        path: "/essay/create",
        component: EssayEdit
      },
      {
        path: "/essay/edit/:id",
        component: EssayEdit,
        props: true
      },
      {
        path: "/essay/list",
        component: EssayList
      },
      {
        path: "/ad/create",
        component: AdEdit
      },
      {
        path: "/ad/edit/:id",
        component: AdEdit,
        props: true
      },
      {
        path: "/ad/list",
        component: AdList
      },
      {
        path: "/admin_users/create",
        component: AdminUserEdit
      },
      {
        path: "/admin_users/edit/:id",
        component: AdminUserEdit,
        props: true
      },
      {
        path: "/admin_users/list",
        component: AdminUserList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
