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
import Home from '@/components/router/Home'
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
      components: {default : ShareComponent},
      //如果props被设置为true,则route.params将会被设置为组件的属性。
      // props:{default : true},
      //如果props是一个对象，它会被按原样设置为组件属性，当props是静态的时候有用。
      props: { newsletterPopup: "嘿嘿" },
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: 'foo',
          name: 'foo',
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
