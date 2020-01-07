<template>
  <div class="home" >
     共享组件-------{{$route.params.type}}-------{{$route.query}}
  
    <router-link :to="`/routerPractice/${type}`">Go to {{type}}</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  watch:{
    "$route":{
      handler(val){
        console.log('val :', val);
      }
    }
  },
  computed:{
    type(){
      return  this.$route.params.type==='foo'?'bar':'foo'
    }
  },
  created(){
    console.log('create创建 :');
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
