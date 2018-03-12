import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/spa/Portfolio'
import Project from '@/spa/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/project/:id',
      name: 'Project',
      component: Project
    }
  ]
})
