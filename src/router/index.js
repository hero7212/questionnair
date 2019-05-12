import Vue from 'vue'
import Router from 'vue-router'
import Step1 from '@/pages/step1'
import Step2 from '@/pages/step2'
import Step3 from '@/pages/step3'
import Step4 from '@/pages/step4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'Step2',
      component: Step2
    },
    {
      path: '/step3',
      name: 'Step3',
      component: Step3
    },
    {
      path: '/step4',
      name: 'Step4',
      component: Step4
    },
  ]
})
