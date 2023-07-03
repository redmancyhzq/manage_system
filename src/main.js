import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'
Vue.config.productionTip = false

Vue.config.productionTip = false


Vue.use(ElementUI).use(VueRouter)

router.beforeEach((to,from,next) => {
  //判断token存不存在
  const token = Cookie.get('token')
  //token不存在，说明当前用户是未登入，应该跳转至登入页面
  if(!token && to.name !== 'login') {
    next({ name: 'login'})

  }else if (token && to.name === 'login') {
  //token存在，说明用户已登入，此时跳转至首页
  next({name: 'home'})
  }else {
    next()
  }
})
new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    store.commit('addMenu',router)
  }
}).$mount('#app')
