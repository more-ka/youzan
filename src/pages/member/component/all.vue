<!--
 * @Author: your name
 * @Date: 2019-08-31 16:44:33
 * @LastEditTime: 2020-03-15 23:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \youzan\src\pages\member\component\all.vue
 -->
<template>
  <div class="container " style="max-width: 420px;margin: 0 auto;" v-if="lists">
    <div class="block-list address-list section section-first js-no-webview-block">
      <a class="block-item js-address-item address-item "
         v-for="list in lists"
         :key="list.id"
         :class="{'address-item-default':list.isDefault}"
         @click="toEdit(list)">
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}} {{list.address}}</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center" style="max-width: 420px;margin: 0 auto;">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{name:'from',query:{type:'add'}}">
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
  import service from 'js/service.js'

  export default {
    // data(){
    //   return {
    //     lists: null
    //   }
    // },
    created() {
      // service.addressList().then(response=>{
      //   this.lists = response.data.lists
      // })
      if (!this.lists) {
        this.$store.dispatch('getAddressList')
      }
    },
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
    methods: {
      toEdit(list) {
        this.$router.push({
          name: 'from',
          query: {
            type: 'edit',
            instance: list
          }
        })
      }
    }
  }
</script>
<style scoped>
</style>
