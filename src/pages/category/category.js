import './category.css'
import 'css/common.css'
import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import mixin from 'js/mixin.js'
import service from 'js/service.js'
let app = new Vue({
  el: '#app',
  data:{
    topList: null,
    currentIndex: 800,
    rankList:null,
    subList: null
  },
  methods:{
    getTopList(){
      service.getTopList().then(response=>{
        this.topList = response.data.lists

      })
    },
    getSubList(id){
      this.currentIndex = id
      if(id===800){
        service.getRank().then(response=>{
          this.rankList = response.data.data

        })
      }else{
        service.getSubList().then(response=>{
          this.subList = response.data.data

        })
      }
    },
    toSearch(list){
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  beforeMount(){
    this.getTopList()
    this.getSubList(800)
  },
  mixins: [mixin]
})
