import Foot from 'components/Foot.vue'

let mixin = {
  filters:{
    formatPrice(price){
      let i = new RegExp(/[\.]/)
      if(i.test(price)){
        let str = price+""
        let integer = str.split(".")[0]
        let decimal = str.split(".")[1]
        if(decimal.length === 2){
          return integer+"."+decimal
        }else if(decimal.length === 1){
          return integer + "."+decimal +'0'
        }
      }else{
        return price+'.00'
      }
    }
  },
  components:{
    Foot
  }
}
export default mixin
