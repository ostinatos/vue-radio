import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Facade from '@/components/Facade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Facade',
      component: Facade
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
