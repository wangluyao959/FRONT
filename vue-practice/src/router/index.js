import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import ArrayPractice from '@/components/arrayPractice'
import ParentComponent from '@/components/renderPractice/ParentComponent'
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
      path: '/ParentComponent',
      name: 'ParentComponent',
      component: ParentComponent
    }
  ]
})
