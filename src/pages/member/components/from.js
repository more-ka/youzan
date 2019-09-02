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
  created(){
    if(this.type==='edit'){
      let ad = this.instance
      this.name = ad.name
      this.tel = ad.tel
      this.id = ad.id
      this.address = ad.address
      this.provinceValue = parseInt(ad.provinceValue)
    }
  },
  computed: {
    lists(){
      return this.$store.state.lists
    }
  },
  methods: {
    add() {
      let { name, tel, provinceValue, cityValue, districtValue, address} = this
      let data = { name, tel, provinceValue, cityValue, districtValue, address}
      if(this.type === 'add'){
        // service.addressAdd(data).then(response=>{
        //   this.$router.go(-1)
        // })
        this.$store.dispatch('addAction',data)
      }
      if(this.type === 'edit'){
        data.id = this.id
        // service.addressUpdate(data).then(response=>{
        //   this.$router.go(-1)
        // })
        this.$store.dispatch('updateAction',data)
      }
    },
    remove() {
      if(window.confirm('确认删除?')){
        // service.addressRemove(this.id).then(response=>{
        //   this.$router.go(-1)
        // })
        this.$store.dispatch('removeAction',this.id)
      }
    },
    setDefault() {
      // service.addressSetDef(this.id).then(response=>{
      //   this.$router.go(-1)
      // })
      this.$store.dispatch('setDefAction',this.id)
    }
  },
  watch: {
    lists: {
      handler(){
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
