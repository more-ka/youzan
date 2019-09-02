// 使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import service from 'js/service.js'
//实例化
const store = new Vuex.Store({
  state: {
    lists: null
  },
  // 对数据同步管理
  mutations:{
    init(state,lists){
      state.lists = lists
    },
    add(state,instance){
      state.lists.push(instance)
    },
    remove(state,id){
      let lists = state.lists
      let index = lists.findIndex(item=>{
        return item.id === id
      })
      lists.splice(index,1)
    },
    update(state,instance){
      let lists = JSON.parse(JSON.stringify(state.lists))
      let index = lists.findIndex(item=>{
        return item.id === instance.id
      })
      lists[index] = instance
      state.lists = lists
    },
    setDef(state,id){
      let lists = state.lists
      let index = lists.forEach(item=>{
        if(item.id === id){
          item.isDefault = true
        }else{
          item.isDefault= false
        }
      })
    }
  },
  // 异步操作  
  actions: {
    getAddressList({commit}){
      service.addressList().then(response=>{
        // this.lists = response.data.lists
        commit('init',response.data.lists)
      })
    },
    addAction({commit},instance){
      service.addressAdd().then(response=>{
        commit('add',instance)
      })
    },
    removeAction({commit},id){
      service.addressRemove().then(response=>{
        commit('remove',id)
      })
    },
    updateAction({commit},instance){
      service.addressUpdate().then(response=>{
        commit('update',instance)
      })
    },
    setDefAction({commit},id){
      service.addressSetDef().then(response=>{
        commit('setDef',id)
      })
    }
  }
})
export default store
