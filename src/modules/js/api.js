/*
 * @Author: your name
 * @Date: 2019-08-11 18:44:19
 * @LastEditTime: 2020-03-15 20:20:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \youzan\src\modules\js\api.js
 */
let url = {
  homepage: '/index/hotList',
  banner: '/index/banner',
  topList: '/category/topList',
  rank: '/category/rank',
  subList: '/category/subList',
  search: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  cartAdd: '/cart/add',
  cartUpdate: '/cart/update',
  cartList:'/cart/list',
  cartReduce: '/cart/reduce',
  cartRemove:'/cart/remove',
  cartMremove: '/cart/mremove',
  addressList: '/address/list',
  addressAdd: '/address/add',
  addressRemove: '/address/remove',
  addressUpdate: '/address/update',
  addressSetDefault: '/address/setDe'
}
// 开发环境和真实环境的切换
// let host = ''
let host = 'http://rap2.taobao.org:38080/app/mock/7058/get'
// let host = 'https://www.easy-mock.com/mock/5d6fc633c71dca09124b401e/youzan'

for (let key in url) {
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}
export default url

