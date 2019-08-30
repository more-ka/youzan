import 'css/common.css'
import './index.css'
import Vue from  'vue'
import { InfiniteScroll } from 'mint-ui'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe'
import service from 'js/service.js'
Vue.use(InfiniteScroll);
let app = new Vue({
  el: '#app',
  data:{
    lists: null,
    bannerList: null,
    pageNum: 1,
    pageSize: 6,
    isLoading: false,
    allLoading: false
  },
  methods:{
    getData(){
      if(this.allLoading) return
      this.isLoading = true
      service.getHomePage()
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
      this.pageNum += 1
      this.isLoading = false
    },
    getBanner(){
      service.getBanner()
        .then(response=>{
          this.bannerList = response.data.lists
        })
    }
  },
  beforeMount(){
    this.getData()
    this.getBanner()
  },
  components:{
    Foot,
    Swipe
  }
})

