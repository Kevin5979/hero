import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import VueLazyload from 'vue-lazyload'

import { Swipe, SwipeItem, Grid, GridItem } from 'vant';

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)

Vue.use(VueLazyload, {
  loading: 'assets/image/logo.png', // 为图片加载前展示的默认图片路径
})

import 'assets/scss/reset.css'
import 'assets/scss/common.scss'
import 'assets/iconfont/iconfont.css'


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
