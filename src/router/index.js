import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'
import Page4 from '@/components/page4'
import Page5 from '@/components/page5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2
    },  
    {
      path: '/Page3',
      name: 'Page3',
      component: Page3
    },  
    {
      path: '/Page4',
      name: 'Page4',
      component: Page4
    },  
    {
      path: '/Page5',
      name: 'Page5',
      component: Page5
    },
  ]
})



