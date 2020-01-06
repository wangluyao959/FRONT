import Vue from 'vue';

Vue.filter('changMsg', function(val) {
  if(!val){
    return "不存在";
  }else{
    return val;
  }
});