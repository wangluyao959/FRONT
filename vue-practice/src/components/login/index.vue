<template>
  <div class="home">
    <span class="gotoArray" @click="gotoArray('arr')">跳转到路由练习</span>
    <span class="gotoArray" @click="gotoArray('render')">跳转到render函数</span>
    <span class="gotoArray" @click="gotoArray('directive')">跳转到directive练习</span>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    gotoArray(type){
      if(type==="arr"){
        this.$router.push({
          path:"/arrayPractice"
        })
      }else if(type==="render"){
        this.$router.push({
          path:"/ParentComponent"
        })
      }else if(type==="directive"){
        this.$router.push({
          path:"/directivePractice"
        })
      }
      
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
