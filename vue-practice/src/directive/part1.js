import Vue from 'vue';

Vue.directive('focus',{
  //指令第一次绑定要元素时调用
  bind:(el)=>{
    el.value='插入前'
  },
  //当绑定元素被插入到DOM元素中
  inserted:(el)=>{
    console.log('el :', el);
    //聚焦元素
    el.focus();
    el.value='插入到DOM中'
  }
})
