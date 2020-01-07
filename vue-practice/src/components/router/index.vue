<template>
  <div class="home" >
     <h1>Hello App!</h1>
     <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
       <router-link to="routerPractice/foo">Go to Foo</router-link>
       <router-link to="routerPractice/bar">Go to Bar</router-link>
     </p>

     <!-- 路由出口 -->
     <!-- 路由匹配到的组件渲染到这里 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  computed:{
    userName(){
      return this.$route.params.userName
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
