import 'css/common.css'
import './index.css'
import Vue from  'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
let app = new Vue({
  el: '#app',
  data:{
    lists: null,
    pageNum: 1,
    pageSize: 6,
    isLoading: false,
    allLoading: false
  },
  methods:{
    getData(){
      if(this.allLoading) return
      this.isLoading = true
      axios.get(url.homepage)
        .then(response=>{
          if(response.data.lists.length<this.pageSize){
            this.allLoading = true
          }
          if (this.lists){
            this.lists = this.lists.concat(response.data.lists)
          }else {
            this.lists = response.data.lists
          }
        })
        .catch(error=>{
          console.log(error);
        })
      this.pageNum += 1
      this.isLoading = false
    }
  },
  beforeMount(){
    this.getData()
  }
})
