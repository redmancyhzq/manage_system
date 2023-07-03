import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)
//将路由与组件进行映射
const routes = [
  {
    path:'/',
    component:Main,
    name:'Main',
    redirect: '/Home',
    children:[
      // { path: '/Home',name:'home', component: Home },
      // { path: '/User',name:'user', component: User },
      // { path: '/mall', name:'mall',component: mall },
      // { path: '/PageOne', name:'page1',component: PageOne },
      // { path: '/PageTwo',name:'page2', component: PageTwo }
    ]
  },
  {
    path:'/login',
    name: 'login',
    component: Login,
  },

]
/// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
 
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}