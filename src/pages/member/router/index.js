import Vue from 'vue'
// 使用vue-router
import Router from 'vue-router'
Vue.use(Router)
// 创建vue实例
let routes = [{
  path: '/',
  components: require('../component/member.vue')
},{
  path: '/address',
  components: require('../component/address.vue'),
  children: [{
    path: '',
    redirect: 'all'
  },{
    name: 'all',
    path: 'all',
    components: require('../component/all.vue')
  },{
    name: 'from',
    path: 'from',
    components: require('../component/from.vue')
  }]
}]
let router = new Router({
  routes
})

export default router
