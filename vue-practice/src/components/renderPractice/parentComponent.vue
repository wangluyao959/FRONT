<template>
  <div>
    <input type="text" v-model="number">
    <judge :type="number">
      <span class="render_incoming">外来者</span>
      <p class="render_incoming-p" slot="tage">
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
      items: [1, 2, 3, 4]
    }
  },
 components:{
   judge
 }
}
</script>
<style lang="sass" scoped>

</style>