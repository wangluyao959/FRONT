<template>
  <div class="wrap">
    {{`这个是render练习函数`}}
    <input type="text" v-model="number">
    <judge :type="number" @click="eventEmit">
      <span class="render_incoming">外来者</span>
      <p class="render_incoming-p" slot="tag">
        我是p标签
      </p>
    </judge>
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
    eventEmit(){
      console.log('value :');
    }
  },
 components:{
   judge
 }
}
</script>
<style lang="scss" scoped>
.wrap{
  height: 100%
}
</style>