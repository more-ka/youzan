let url = {
  homepage: '/index/hotList',
  banner: '/index/banner',
  topList: '/category/topList',
  rank: '/category/rank',
  subList: '/category/subList',
  search: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal'
}
// 开发环境和真实环境的切换
// let host = ''
let host = 'http://rap2api.taobao.org/app/mock/7058'
for (let key in url) {
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}
export default url
