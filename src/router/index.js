import Vue from 'vue'
import Router from 'vue-router'
import FormCode from '@/components/FormCode'
import Highlighter from '@/screen/Highlighter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormCode',
      component: FormCode
    },
    {
      path: '/highlighter',
      name: 'Highlighter',
      component: Highlighter,
    }
  ]
})
