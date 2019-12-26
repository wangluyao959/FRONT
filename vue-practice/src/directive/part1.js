import Vue from 'vue';

Vue.directive('focus',{
  //当绑定元素被插入到DOM元素中
  inserted:(el)=>{
    //聚焦元素
    el.focus()
  }
})
