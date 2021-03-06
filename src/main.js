// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iview from 'iview'
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/font/iconfont.css'
import 'mavon-editor/dist/css/index.css'
import 'iview/dist/styles/iview.css'
import './assets/style/github-markdown.min.css'
import './assets/style/reset.less'
import 'swiper/dist/css/swiper.css'
import 'highlight.js/styles/github.css' //样式文件

Vue.use(VueAwesomeSwiper)
Vue.use(iview)
Vue.use(VueLazyLoad)
Vue.config.productionTip = false

/* eslint-disable no-new */
global.AppVue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
