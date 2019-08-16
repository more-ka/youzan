import "./goods_common.css"
import "./goods_custom.css"
import "./goods.css"
import "./goods_theme.css"
import "./goods_mars.css"
import "./goods_sku.css"

import Vue from 'vue'
import mixin from 'js/mixin.js'
import qs from 'qs'
import axios from 'axios'
import url from 'js/api.js'

let {id} = qs.parse(location.search.substr(1))
console.log(id);
new Vue({
  el: '#app',
  data: {
    details: null,
    detalTab: ['商品详情','本店成交'],
    tabIndex: 0,
    deals: null
  },
  methods: {
    getDetails() {
      axios.get(url.details)
        .then(response=>{
          this.details = response.data.data
        })
    },
    changeTab(index){
      this.tabIndex = index
      if(this.tabIndex && !this.deals){
        this.getDeal()
      }
    },
    getDeal(){
      axios.get(url.deal)
        .then(response=>{
          this.deals= response.data.data.lists
        })
    }
  },
  created(){
    this.getDetails()
  },
  mixins: [mixin]
})
