// 使用vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 创建vue实例
let routes = [{
  path: '/',
  component: require('./components/member.vue')
}]
let router = new Router({
  routes
})

// 挂载
new Vue({
  el: '#app',
  router
})
