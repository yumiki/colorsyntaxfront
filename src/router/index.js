import Vue from 'vue'
import Router from 'vue-router'
import Highlighter from '@/screen/Highlighter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Highlighter',
      component: Highlighter
    }
  ]
})
