import './category.css'
import 'css/common.css'
import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import mixin from 'js/mixin.js'

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
      axios.get(url.topList)
        .then(response=>{
          this.topList = response.data.lists
        })
        .catch()
    },
    getSubList(id){
      this.currentIndex = id
      if(id===800){
        axios.get(url.rank)
          .then(response=>{
            this.rankList = response.data.data
          })
          .catch()
      }else{
        axios.get(url.subList)
          .then(response=>{
            this.subList = response.data.data
          })
          .catch();
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
