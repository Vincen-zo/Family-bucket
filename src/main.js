import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './krouter'
// import store from './store'
import store from './kstore'
Vue.use(ElementUI)
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  // Vue.prototype.$router = router
  router,

  store,
  render: h => h(App)
}).$mount('#app')
