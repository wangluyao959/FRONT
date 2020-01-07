import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from '@/components/login'
import ArrayPractice from '@/components/arrayPractice'
import ParentComponent from '@/components/renderPractice/ParentComponent'
import Part2 from '@/components/renderPractice/Part2'
import DirectivePractice from '@/components/directivePractice'
import EventDelegation from '@/components/eventDelegation'
import Mixin from '@/components/mixin'
import Filter from '@/components/filter'
import RouterPractice from '@/components/router'
import ShareComponent from '@/components/router/Share'
import FOO from '@/components/router/Foo'
import BAR from '@/components/router/Bar'
import Page_404 from '@/components/errorPage'

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
      
    },
    {
      path: '/mixinPractice',
      name: 'mixinPractice',
      component: Mixin
      
    },
    {
      path: '/filterPractice',
      name: 'filterPractice',
      component: Filter
      
    },
    {
      path: '/routerPractice',
      name: 'routerPractice',
      component: RouterPractice,
    },
    {
      path: '/routerPractice/:type',
      name: 'ShareComponent',
      component: ShareComponent,
      children:[
        {
          path: 'foo',
          component: FOO
        },
        {
          path: 'bar',
          component: BAR
        }
      ]
    },
    {
      path: '*',
      name: 'Page_404',
      component: Page_404,
    }
  ]
})
