import service from 'js/service.js'

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
  created() {
    if (this.type === 'edit') {
      let ad = this.instance
      this.name = ad.name
      this.tel = ad.tel
      this.id = ad.id
      this.address = ad.address
      this.provinceValue = parseInt(ad.provinceValue)
    }
  },
  computed: {
    lists() {
      return this.$store.state.lists
    }
  },
  methods: {
    add() {
      let {name, tel, provinceValue, cityValue, districtValue, address} = this
      if (name.length === 0) {
        alert("姓名为空!")
        return
      }
      if (tel.length === 0) {
        alert("联系方式为空!")
        return
      }
      if (provinceValue && cityValue && districtValue === -1) {
        alert("请选择地区!")
        return
      }
      if (address.length === 0) {
        alert("详细地址未填写!")
        return
      }
      if (name.length != 0) {
        let reg=/^[\u0391-\uFFE5]+$/;
        if (!reg.test(name)) {
          alert("姓名填写错误,必须是汉字!")
          return
        }
      }
      if (tel.length != 0) {
        let reg = /^\d{11}$/;
        if (!reg.test(tel)) {
          alert("联系方式格式错误!")
          return
        }
      }
      if (address.length != 0) {
        let reg = /^[\u0391-\uFFE5]{3,20}/;
        if (!reg.test(address)) {
          alert("详细地址必须三个汉字以上!")
          return
        }
      }
      let data = {name, tel, provinceValue, cityValue, districtValue, address}
      if (this.type === 'add') {
        // service.addressAdd(data).then(response=>{
        //   this.$router.go(-1)
        // })
        this.$store.dispatch('addAction', data)
      }
      if (this.type === 'edit') {
        data.id = this.id
        // service.addressUpdate(data).then(response=>{
        //   this.$router.go(-1)
        // })
        this.$store.dispatch('updateAction', data)
      }
    },
    remove() {
      if (window.confirm('确认删除?')) {
        // service.addressRemove(this.id).then(response=>{
        //   this.$router.go(-1)
        // })
        this.$store.dispatch('removeAction', this.id)
      }
    },
    setDefault() {
      // service.addressSetDef(this.id).then(response=>{
      //   this.$router.go(-1)
      // })
      console.log('set');
      this.$store.dispatch('setDefAction', this.id)
    }
  },
  watch: {
    lists: {
      handler() {
        this.$router.go(-1)
      },
      deep: true
    },
    provinceValue(val) {
      if (val === -1) return
      let list = this.addressData.list
      let index = list.findIndex(item => {
        return item.value === val
      })
      this.cityData = list[index].children
      this.cityValue = -1
      this.districtValue = -1
      if (this.type === 'edit') {
        this.cityValue = parseInt(this.instance.cityValue)
      }
    },
    cityValue(val) {
      if (val === -1) return
      let list = this.cityData
      let index = list.findIndex(item => {
        return item.value === val
      })
      this.districtData = list[index].children
      this.districtValue = -1
      if (this.type === 'edit') {
        this.districtValue = parseInt(this.instance.districtValue)
      }
    }
  }
}
