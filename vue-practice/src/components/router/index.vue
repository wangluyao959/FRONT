<template>
  <div class="home" >
    <div class="content_one">
      <div>
        <p>
          在组件中使用$route会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的URL上使用，限制了灵活性。可以使用props将组件和路由解耦。
        </p>
      </div>
      <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="routerPractice/foo">Go to Foo</router-link>
        <router-link to="routerPractice/bar">Go to Bar</router-link>
    </p>
    </div>
    
    <div class="contnet_two">
      <span @click="goFOO">跳转到FOO页面</span>
    </div>
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
    goFOO(){
      //字符串
      // this.$router.push('routerPractice/foo');
      //对象
      this.$router.push({path:'routerPractice/foo'});
      //命名的路由
      // this.$router.push({name:'ShareComponent',params:{
      //   userID:90
      // }});
      //带查询参数，viancheng/register?plan=private
      // this.$router.push({ path: 'routerPractice/foo', query: { plan: 'private' }})


      //router.replace
      // this.$router.replace({path:'routerPractice/foo'});

      //router.go()
      // this.$router.go(-1);
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
 .content_one{
   padding-bottom: 20px;
   border-bottom: 1px dashed #000;
 }
}
</style>
