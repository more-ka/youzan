import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'
import velocity from 'velocity-animate'
let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    searchList: null,
    keyword,
    isshow: false
  },
  methods: {
    getSearch() {
      axios.get(url.search, {keyword, id})
        .then(response => {
          this.searchList = response.data.lists
        })
    },
    move(){
      if(document.documentElement.scrollTop < 100) {
        this.isshow = false
      } else {
        this.isshow = true
      }
    },
    toTop() {
      Velocity(document.body, "scroll", { duration: 700 })
      this.isshow = false
    }
  },
  created() {
    this.getSearch()
  },
  mixins: [mixin]
})
