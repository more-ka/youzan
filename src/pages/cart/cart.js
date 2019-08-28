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
    editingShopIndex: -1,
    removePopup: false,
    removeData: null,
    removeMsg: '',
    ids: null,
    clear: false
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
    add(good) {
      axios.post(url.cartAdd, {
        id: good.id,
        number: 1
      })
        .then(response => {
          good.number += 1
        })
        .catch(error => {
          console.log(error);
        })
    },
    reduce(good) {
      if (good.number === 1) return
      axios.post(url.cartReduce, {
        id: good.id,
        number: 1
      }).then(response => {
        good.number -= 1
      }).catch(error => {
        console.log(error);
      })
    },
    remove(shop, shopIndex, good, goodIndex) {
      this.removeMsg = '确定删除该商品么？'
      this.removePopup = true
      this.removeData = {shop, shopIndex, good, goodIndex}
    },
    removeList() {
      for (let i = 0; i < this.ids.length; i++) {
        this.cartList.forEach((shop,shopIndex) => {
        let template = shop
        shop.goodsList.forEach((good,index) => {
            if (this.ids[i] === good.id) {
              shop.goodsList.splice(index, 1)
            }
          if (!shop.goodsList.length) {
            this.cartList.splice(shopIndex, 1)
          }
        })
          if (!this.cartList.length) {
            this.total = 0
            this.clear = true
          }
      })
      }
    },
    removeConfirm() {
      let {shop, shopIndex, good, goodIndex} = this.removeData
      axios.post(url.cartRemove, {
        id: good.id
      }).then(response => {
        shop.goodsList.splice(goodIndex, 1)
        if (!shop.goodsList.length) {
          this.cartList.splice(shopIndex, 1)
          this.removeShop()
        }
        this.removePopup = false
      })
    },
    removeShop() {
      this.editingShop = null
      this.editingShopIndex = -1
      this.cartList.forEach(shop => {
        shop.editing = false
        shop.editingMsg = '编辑'
      })
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
      if (this.editingShop) {
        let arr = []
        this.cartList.forEach(shop => {
          shop.goodsList.forEach(good => {
            if (good.removeChecked) {
              arr.push(good)
            }
          })
        })
        let ids = []
        arr.forEach(good => {
          ids.push(good.id)
          this.ids = ids
        })
        return arr
      }
      return []
    }
  }
  ,
  beforeMount() {
    this.getCartList()
  }
  ,

  mixins: [mixin]
})
