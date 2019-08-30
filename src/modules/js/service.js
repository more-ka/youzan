import url from 'js/api.js'
import fetch from 'js/fetch.js'

class Service{
  // homepage
  static getHomePage(){
    return fetch('get',url.homepage)
  }
  static getBanner(){
    return fetch('get',url.banner)
  }
  // search
  static getSearch(data){
    return fetch('get',url.search,data)
  }
  // category
  static getTopList(){
    return fetch('get',url.topList)
  }
  static getRank(){
    return fetch('get',url.rank)
  }
  static getSubList(){
    return fetch('get',url.subList)
  }
  // goods
  static getDetails(){
    return fetch('get',url.details)
  }
  static getDeal(){
    return fetch('get',url.deal)
  }
  static addCart(data){
    return fetch('post',url.addCart,data)
  }
  // cart
  static getCartList(){
    return fetch('get',url.cartList)
  }
  static add(id){
    return fetch('post',url.cartAdd,{
      id,
      number: 1
    })
  }
  static reduce(id){
    return fetch('post',url.cartReduce,{
      id,
      number:1
    })
  }
  static removeList(ids){
    return fetch('post',url.cartRemove,{
      ids
    })
  }
}
export default Service
