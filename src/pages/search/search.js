import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'

let {keyword, id} = qs.parse(location.search.substr(1))
new Vue({
  el: '.container',
  data: {
    searchList: null,
    keyword
  },
  methods: {
    getSearch() {
      axios.get(url.search, {keyword, id})
        .then(response => {
          this.searchList = response.data.lists
        })
    },
    goToTop(){

    }
  },
  created() {
    this.getSearch()
  }
})
