import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import HelloWorld from '@/page/HelloWorld'
import Permission from '@/page/403'
import dashboard from '@/page/dashboard'
import sql from '@/page/sql'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
      // children:[{path: 'p',component: Permission,}]
    },
    {
      path: '/sql',
      name: 'sql',
      component: sql
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'Permission',
      component: Permission
    }

  ]
})
