import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/Index'
import findPage from '@/components/FindPage'
import userPage from '@/components/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: 'findPage',
      children: [
        {
          path: 'findPage',
          name: 'findPage',
          component: findPage
        },
        {
          path: 'userPage',
          name: 'userPage',
          component: userPage
        }
      ]
    }
  ]
})
