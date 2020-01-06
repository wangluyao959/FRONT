<template>
  <div class="home" >
    <div v-for="item in msg" :key="item">
      {{ item | filterMsg}}
      
    </div>
    <hr/>
    <div v-for="item in msg_2" :key="item">
      {{ item | changMsg}}
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:[0,1,2,3,4,5,6,7,8,9,10],
      msg_2:["",0,2,3,"哈哈","5",6,7,8,9,10]
    }
  },
  filters:{
    filterMsg(val){
      console.log('val :', val);
      if(val%2===0){
        return "--";
      }else{
        return "存在";
      }
    }
  },
  methods:{
 
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  height: 100%;
 
}
</style>
