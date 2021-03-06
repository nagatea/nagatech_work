import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Works from '@/components/Works.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
