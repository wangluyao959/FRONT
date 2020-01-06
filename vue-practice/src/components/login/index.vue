<template>
  <div class="home" @click="gotoArray">
    <div v-for="item in indexList" :key="item.type" :class="`menu-list ${item.class} `" class="">
      <span  :class="`${item.type}`">{{item.label}}</span>
    </div>
    
  </div>
</template>

<script>
import { ROUTERMAP,indexList } from "./loginOption";
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      indexList,
      ROUTERMAP
    }
  },
  methods:{
    gotoArray(e){
      //兼容性处理
      let event = e || window.event;
      let target = event.target || event.srcElement;
      console.log('target.className :', target);
      this.$router.push({
          path:`${this.ROUTERMAP[target.className]}`
      })
     
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  height: 100%;
  overflow: hidden;
  .menu-list{
    width: 20%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    float: left;
    border-bottom:1px solid #3886FF;
  }
  .gotoArray{
    font-size: 36px;
    cursor: pointer;
    color:#3886FF
  }
}
</style>
