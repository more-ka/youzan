import './category.css'
import 'css/common.css'
import Vue from 'vue'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import axios from 'axios'

let app = new Vue({
  el: '#app',
  data:{
    topList: null,
    currentIndex: 800,
    rankList:null,
    subList: null
  },
  components:{
    Foot
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
  },
  beforeMount(){
    this.getTopList()
    this.getSubList(800)
  },
  filters:{
    formatPrice(price){
      let i = new RegExp(/[\.]/)
      if(i.test(price)){
        let str = price+""
        let integer = str.split(".")[0]
        let decimal = str.split(".")[1]
        if(decimal.length === 2){
          return integer+"."+decimal
        }else if(decimal.length === 1){
          return integer + "."+decimal +'0'
        }

      }else{
        return price+'.00'
      }
    }
  }
})
