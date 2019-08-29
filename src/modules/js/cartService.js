import url from 'js/api.js'
import fetch from 'js/fetch.js'

class CartService{
  static add(method,id){
    return fetch(method,url.cartAdd,{
      id,
      number: 1
    })
  }
}
export default CartService
