import Vue from 'vue'
import Router from 'vue-router'
import FormCode from '@/components/FormCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormCode',
      component: FormCode
    }
  ]
})
