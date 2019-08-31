<template>
  <div class="container " style="min-height: 597px;">
    <div v-if="lists" class="block-list address-list section section-first js-no-webview-block">
      <a class="block-item js-address-item address-item "
         v-for="list in lists"
         :key="list.id"
         @click="toEdit">
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}市{{list.districtName}}{{list.address}}</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" to="/address/from">
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
  import service from 'js/service.js'
  export default {
    data(){
      return {
        lists: null
      }
    },
    created(){
      service.addressList().then(response=>{
        this.lists = response.data.lists
      })
    },
    methods: {
      toEdit(){
        this.$router.push({path: '/address/from'})
      }
    }
  }
</script>
<style scoped>

</style>
