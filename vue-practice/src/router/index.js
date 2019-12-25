import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import ArrayPractice from '@/components/arrayPractice'
import RenderPractice from '@/components/renderPractice'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/arrayPractice',
      name: 'arrayPractice',
      component: ArrayPractice
    },
    {
      path: '/renderPractice',
      name: 'renderPractice',
      component: RenderPractice
    }
  ]
})
