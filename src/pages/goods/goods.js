import "./goods_common.css"
import "./goods_custom.css"
import "./goods.css"
import "./goods_theme.css"
import "./goods_mars.css"
import "./goods_sku.css"

import Vue from 'vue'
import mixin from 'js/mixin.js'
import qs from 'qs'
import swipe from 'components/Swipe'
import service from 'js/service.js'
let {id} = qs.parse(location.search.substr(1))
new Vue({
  el: '#app',
  data: {
    id,
    details: null,
    detalTab: ['商品详情', '本店成交'],
    tabIndex: 0,
    deals: null,
    bannerList: null,
    sku: 0,
    skuPop: false,
    skuNum: 1,
    isAddCart: false,
    addCartMsg: false
  },
  methods: {
    getDetails() {
      service.getDetails().then(response=>{
        this.details = response.data.data
        this.bannerList = []
        this.details.imgs.forEach(item => {
          this.bannerList.push({
            clickUrl: '',
            img: item
          })
        })
      })
    },
    changeTab(index) {
      this.tabIndex = index
      if (this.tabIndex && !this.deals) {
        this.getDeal()
      }
    },
    getDeal() {
      service.getDeal().then(response=>{
        this.deals = response.data.data.lists
      })
    },
    skuShow(type) {
      this.sku = type
      this.skuPop = true
    },
    skuClose() {
      this.skuPop = false
    },
    changeNum(num) {
      if (num < 0 && this.skuNum === 1) return
      this.skuNum += num
    },
    addCart() {
      service.addCart({id,number: this.skuNum}).then(response => {
        if (response.data.status === 200) {
          this.isAddCart = true
          this.skuPop = false
        }
        this.addCartMsg = true
        setInterval(() => {
          this.addCartMsg = false
        }, 1500)
      })
    }
  },
  created() {
    this.getDetails()
  },
  components: {
    swipe
  },
  mixins: [mixin],
  watch: {
    skuPop(val, oldval) {
      document.body.style.overflow = val ? 'hidden' : 'auto'
      document.querySelector('html').style.overflow = val ? 'hidden' : 'auto'
      document.body.style.height = val ? '100%' : 'auto'
      document.querySelector('html').style.height = val ? '100%' : 'auto'
    }
  }
})
