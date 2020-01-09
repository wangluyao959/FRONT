<template>
  <div class="home" >
     共享组件-------{{$route.params}}-------{{$route.query}}<br/>
  
    <router-link :to="`/routerPractice/${routerType}/${routerType}`">Go to {{routerType}}</router-link><br/>
    <router-link :to="`/routerPractice/${routerType}/`">{{routerType}}</router-link><br/>

    <transition name="fade">
      <router-view></router-view>
    </transition>

    -------------------------------------------<br/>
    <div v-if="$route.params.userID">{{$route.params}}</div>
  </div>
</template>

<script>
export default {
  props:{
    newsletterPopup:{
      type:String,
      default:""
    }
  },
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
    routerType(){
      return  this.$route.params.type==='foo'?'bar':'foo'
    }
  },
  created(){
  },
  mounted(){
    console.log('this.newsletterPopup :', this.$route);
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
