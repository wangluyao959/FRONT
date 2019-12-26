<script>
export default {
  data(){
    return {
      fontSize:0
    }
  },
  props:{
    number:{
      type:Number,
      default:0
    }
  },
  mounted(){
    this.fontSize=this.number
  },
  //使用render函数，createElement函数作为参数，然后再返回createElement函数，使用配置项做参数,一共三个参数
  render(h){
    return h(
      'div',
      {
        class:{
          wrap:true,
          style1:this.number%2===0,
          style2:this.number%2===1
        },
        style:{
          fontSize: this.fontSize+25+'px'
        },
        attrs:{
        },
        domProps:{
          
        },
        on:{

        }
      },
      [this.$slots.default,this.$slots.show]
    );
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  border: 1px dashed black;
  .style1{
    background-color: yellow;
  }
  .style2{
    background-color: gray;
  }
}
</style>