<template>
  <div class="wrap">
    <div v-for="item in number" :key="item">
      <childComonent :number="item">
        <div>
          德玛西亚万岁！
        </div>
        <div slot="show">
          啦啦啦啦
        </div>
      </childComonent>
    </div>
  </div>
</template>

<script>
import childComonent from './part2Child'
export default {
  data () {
    return {
      number:[1,2,3,4,5,6,7,8,9]
    }
  },
  methods:{
   
  },
 components:{
   childComonent
 }
}
</script>
<style lang="scss" scoped>
.wrap{
  height: 100%
}
</style>