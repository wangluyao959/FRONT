<script>
export default {
  name:"judge",
  props:{
    type:{
      type:Number | String,
      default:1
    }
  },
  render(h){
    return h(
      'div',
      {
        class:{
          default:true,
          first:this.type===1,
          second:this.type===2,
          third:this.type===3
        },
        on:{
          click:this.onShowTypeClick
        }
      },
      [this.$slots.default,this.$slots.tag]
    )
  },
  methods:{
    onShowTypeClick(){
      alert(this.type);
    }
  }
}
</script>
<style lang='scss' scoped>
  .default {
    text-align: center;
    width: 200px;
    line-height: 50px;
    background-color: #eee;
  }
  .first {
    background-color: #f66;
  }
  .second {
    background-color: #c66;
  }
  .third {
    background-color: #804;
  }
</style>