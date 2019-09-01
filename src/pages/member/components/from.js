export default {
  data() {
    return {
      name: '',
      tel: '',
      provinceValue: -1,
      cityValue: -1,
      districtValue: -1,
      address: '',
      id: '',
      type: this.$route.query.type,
      instance: this.$route.query.instance,
      addressData: require('js/address.json'),
      cityData: null,
      districtData: null
    }
  },
  watch: {
    provinceValue(val) {
      if (val === -1) return
      let list = this.addressData.list
      let index = list.findIndex(item => {
        return item.value === val
      })
      this.cityData = list[index].children
      this.cityValue = -1
      this.districtValue = -1
    },
    cityValue(val) {
      if (val === -1) return
      let list = this.cityData
      let index = list.findIndex(item => {
        return item.value === val
      })
      this.districtData = list[index].children
        this.districtValue = -1
    }
  }
}
