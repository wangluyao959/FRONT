<script>
export default {
  name:"judge",
  //从父组件中传入的值
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
          first:this.type==1,
          second:this.type==2,
          third:this.type==3
        },
        on:{
          click:this.onShowTypeClick
        },
        //因为是原生html原生组件，所以没有意义
        nativeOn:{
          click: this.nativeClickHandler
        }
      },
      //这一行代码是slots，将父组件中slots命名给挂载到本页
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
    height: 100%;
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