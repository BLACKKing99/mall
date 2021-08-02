import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// import tocast from './components/commom/tocast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})
// Vue.use(tocast)

// 解决300ms延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


