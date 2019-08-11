import 'css/common.css'
import './index.css'
import Vue from  'vue'
import axios from 'axios'
import url from 'js/api.js'

let app = new Vue({
  el: '#app',
  data:{
    lists: null
  },
  methods:{
    getData(){
      axios.get(url.homepage)
        .then(response=>{
          this.lists = response.data.lists
        })
        .catch(error=>{
          console.log(error);
        })
    }
  },
  beforeMount(){
    this.getData()
  }
})
