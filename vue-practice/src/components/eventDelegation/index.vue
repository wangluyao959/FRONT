<template>
  <div class="home">
    <ul @click="handelParentClick">
      <li v-for="index in 9" :key="index" v-change-color:[index]>{{index}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    handelParentClick(e){
      //兼容性处理
      let event = e || window.event;
      let target = event.target || event.srcElement;
      console.log('e.target :', target);
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
