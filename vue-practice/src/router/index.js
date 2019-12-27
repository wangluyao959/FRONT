import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import ArrayPractice from '@/components/arrayPractice'
import ParentComponent from '@/components/renderPractice/ParentComponent'
import Part2 from '@/components/renderPractice/Part2'
import DirectivePractice from '@/components/directivePractice'
import EventDelegation from '@/components/eventDelegation'
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
      component: ParentComponent,
      children:[
        {
          path:'/part2',
          component: Part2,
        }
      ]
    },
    {
      path: '/directivePractice',
      name: 'directivePractice',
      component: DirectivePractice
    },
    {
      path: '/eventDelegation',
      name: 'eventDelegation',
      component: EventDelegation
      
    }
  ]
})
