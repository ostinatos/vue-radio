import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Sketch from '@/components/Sketch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sketch',
      component: Sketch
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
