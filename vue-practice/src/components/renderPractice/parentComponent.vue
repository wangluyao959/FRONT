<template>
  <div class="wrap">
    {{`这个是render练习函数`}}
    <input type="text" v-model="number">
    <judge :type="number" >
      <span class="render_incoming">外来者</span>
      <p class="render_incoming-p" slot="tag">
        我是p标签
      </p>
    </judge>

    <span class="gotoArray" @click="gotoArray('part2')">跳转到render练习2</span>
    <router-view/>
  </div>
</template>

<script>
import judge from './index'
export default {
  data () {
    return {
      number:''
    }
  },
  methods:{
    gotoArray(value){
      this.$router.push(
        {
          path:"/part2"
        }
      )
    }
  },
 components:{
   judge
 }
}
</script>
<style lang="scss" scoped>
.wrap{
  height: 100%;
  .gotoArray{
    cursor: pointer;
    color:#3886FF
  }
}
</style>