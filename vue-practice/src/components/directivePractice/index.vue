<template>
  <div class="wrap">
    <input type="text" v-model="value" v-focus>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:""
    }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%
}
</style>