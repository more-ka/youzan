# Vue重构有赞商城

使用Vue.js重构移动端有赞商城,使用easy-mock生成模拟数据

[预览链接](https://more-ka.github.io/youzan/dist/index.html)

#### 项目截图
![项目gif](https://github.com/more-ka/img-folder/blob/master/youzan-img/123_gaitubao_104x184.gif)
![截图](https://github.com/more-ka/img-folder/blob/master/youzan-img/gaitubao_FnLnDPk66QLat3rqr0rg0ulHExrn.jpg)
![截图](https://github.com/more-ka/img-folder/blob/master/youzan-img/gaitubao_FupSNWRU8CS_NQz4WetxtKX6NbQE.jpg)
![截图](https://github.com/more-ka/img-folder/blob/master/youzan-img/gaitubao_FhedGs17Oilzx96KqOBkXjqbJzHe.jpg)
项目gif https://s2.ax1x.com/2019/09/08/nGo5nK.gif
#### 技术栈
vue + vue-router + vuex + axios + easy-mock +es6
#### 插件
* qs：处理查询参数，将字符串格式的查询参数转变成对象格式

* swiper：轮播图插件

* velocity：动画效果

#### 实现功能
首页 index
* swiper轮播图
* 热门商品推荐 + 触底自动加载

分类页 category

* 商品搜索
* 分类项目

商品详情页 goods
* 商品介绍轮播图
* 加入购物车功能

购物车页面 cart
* 商品全选联动
* 自动计算总价
  * 单个商品增加减少
  * 单个商品点击删除
  * 单个商品右滑删除
  * 多个商品删除

用户信息页 member
* 管理收货地址
  * 地址格式检测
  * 新增地址
  * 修改地址
  * 删除地址
  * 地址设为默认

查找商品页 search
