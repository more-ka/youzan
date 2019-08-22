import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'


new Vue({
  el: '.container',
  data: {
    cartList: null,
    total: 0
  },
  methods: {
    getCartList() {
      axios.get(url.cartList)
        .then(response => {
          let list = response.data.cartList
          list.forEach(shop => {
            shop.checked = true
            shop.goodsList.forEach(good => {
              good.checked = true
            })
          })
          this.cartList = list
        })
        .catch(error => {
          console.log(error);
        })
    },
    selectGood(shop, good) {
      good.checked = !good.checked
      shop.checked = shop.goodsList.every(good => {
        return good.checked
      })
    },
    selectShop(shop) {
      shop.checked = !shop.checked
      shop.goodsList.forEach(good => {
        good.checked = shop.checked
      })
    },
    selectAll() {
      this.allSelected = !this.allSelected
    }
  },
  computed: {
    allSelected: {
      get() {
        if (this.cartList && this.cartList.length) {
          return this.cartList.every(shop => {
            return shop.checked
          })
        }
        return false
      },
      set(value) {
        this.cartList.forEach(shop => {
          shop.checked = value
          shop.goodsList.forEach(good => {
            good.checked = value
          })
        })
      }
    },
    getSelectList(){
      let arr = []
      let total = 0
      if (this.cartList && this.cartList.length) {
        this.cartList.forEach(shop => {
          shop.goodsList.forEach(good => {
            if (good.checked) {
              arr.push(good)
              total += good.price * good.number
            }
          })
        })
        this.total = total
        return arr
      } else {
        return []
      }
    }
  },
  beforeMount() {
    this.getCartList()
  },

  mixins: [mixin]
})
