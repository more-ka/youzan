<!--
 * @Author: your name
 * @Date: 2019-08-12 14:21:53
 * @LastEditTime: 2020-03-15 23:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \youzan\src\components\Swipe.vue
 -->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" >
          <img class="goods-main-photo fadeIn"
               :src="list.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "Swipe",
    props: {
      lists: {
        type: Array,
        required: true
      }
    },
    mounted(){
        new Swiper('.swiper-container',{
          autoplay:true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          }
        })
    }
  }
</script>

<style scoped>
  .swiper-slide img {
    width: 100%;
    height: 100%;
    max-width: 420px;
  }
</style>
