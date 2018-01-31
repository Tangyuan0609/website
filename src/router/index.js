import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/module/index/index'
import About from '@/module/about/about'
import Life from '@/module/life/life'
import Doing from '@/module/doing/doing'
import Share from '@/module/share/share'
import Learn from '@/module/learn/learn'
import Saying from '@/module/saying/saying'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/doing',
      name: 'Doing',
      component: Doing
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/doing',
      name: 'Doing',
      component: Doing
    },
    {
      path: '/saying',
      name: 'Saying',
      component: Saying
    },
  ]
})
