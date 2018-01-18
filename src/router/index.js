import Vue from 'vue'
import Router from 'vue-router'
import Wrapper from '../components/Wrapper'
import index from '../pages/index'
import general from '../plugin/general'

Vue.use(Router)
Vue.use(general)

export default new Router({
  /**
   * mode:"history", //去掉地址中的哈希#
   */
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/wrapper',
      component: Wrapper
    }
  ]
})
