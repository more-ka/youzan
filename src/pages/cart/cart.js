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
    total: 0,
    editingShop: null,
    editingShopIndex: -1
  },
  methods: {
    getCartList() {
      axios.get(url.cartList)
        .then(response => {
          let list = response.data.cartList
          list.forEach(shop => {
            shop.checked = true
            shop.removeChecked = false
            shop.editing = false
            shop.editingMsg = '编辑'
            shop.goodsList.forEach(good => {
              good.checked = true
              good.removeChecked = false
            })
          })
          this.cartList = list
        })
        .catch(error => {
          console.log(error);
        })
    },
    selectGood(shop, good) {
      let attr = this.editingShop ? 'removeChecked' : 'checked'
      good[attr] = !good[attr]
      shop[attr] = shop.goodsList.every(good => {
        return good[attr]
      })
    },
    selectShop(shop) {
      let attr = this.editingShop ? 'removeChecked' : 'checked'
      shop[attr] = !shop[attr]
      shop.goodsList.forEach(good => {
        good[attr] = shop[attr]
      })
    },
    selectAll() {
      let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
      this[attr] = !this[attr]
    },
    edit(shop, shopIndex) {
      shop.editing = !shop.editing
      shop.editingMsg = shop.editing ? '完成' : '编辑'
      this.cartList.forEach((item, i) => {
        if (i !== shopIndex) {
          item.editing = false
          item.editingMsg = shop.editing ? '' : '编辑'
        }
      })
      this.editingShop = shop.editing ? shop : null
      this.editingShopIndex = shop.editing ? shopIndex : -1
    },
    changeNum(good, num) {
      if (good.number === 1) return
      good.number += num
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
      }
      ,
      set(newValue) {
        this.cartList.forEach(shop => {
          shop.checked = newValue
          shop.goodsList.forEach(good => {
            good.checked = newValue
          })
        })
      }
    },
    allRemoveSelected: {
      get() {
        if (this.editingShop) {
          if (this.cartList && this.cartList.length) {
            return this.cartList.every(shop => {
              return shop.removeChecked
            })
          }
        }
        return false
      }
      ,
      set(newValue) {
        if (this.editingShop) {
          this.cartList.forEach(shop => {
            shop.removeChecked = newValue
            shop.goodsList.forEach(good => {
              good.removeChecked = newValue
            })
          })
        }
      }
    },
    getSelectList() {
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
    },
    getRemoveList() {

    }
  }
  ,
  beforeMount() {
    this.getCartList()
  }
  ,

  mixins: [mixin]
})
