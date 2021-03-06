import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login.vue'
import Register from './views/login/register.vue'
import LoginDe from './views/login/loginDe.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children:[{
        path:'register',
        name:'register',
        component:Register
      },{
        path:'loginDe',
        name:'loginDe',
        component:LoginDe
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
