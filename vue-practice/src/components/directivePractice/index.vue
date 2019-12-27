<template>
  <div class="wrap">
    <input type="text" v-model="direction" v-focus:foo.bar="1===1">
    <div class="change-color"></div>
    <p>Scroll down the page</p>
    <p v-pin:[direction]="200">Stick me 200px from the top of the page</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:"heihei ",
      direction:'bottom'
    }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  .change-color{
    width: 500px;
    height: 500px;
    background-color: #29383d;
  }
}
</style>