<template>
  <div class="home" @click="gotoArray">
    <span v-for="item in indexList" :key="item.type" :class="`${item.class} ${item.type}`" >{{item.label}}</span>
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
      this.$router.push({
          path:`${this.ROUTERMAP[target.className.split(" ")[1]]}`
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
  .gotoArray{
    cursor: pointer;
    color:#3886FF
  }
}
</style>
