import Vue from 'vue';

Vue.directive('focus',{
  //指令第一次绑定要元素时调用
  bind:()=>{
  },
  //当绑定元素被插入到DOM元素中
  inserted:(el,binding)=>{
    console.log('el :', el);
    //聚焦元素
    el.focus();
    console.log('binding :', binding);

  }
})


Vue.directive('change-color',{
  //指令第一次绑定要元素时调用
  bind:(el)=>{
    el.value='插入前'
  },
  //当绑定元素被插入到DOM元素中
  inserted:(el,binding)=>{
    el.style.backgroundColor=`rgb(${binding.arg*20}, ${binding.arg*40}, ${binding.arg*10})`;
    el.style.color=`rgb(${255-binding.arg*30}, ${255-binding.arg*20}, ${255-binding.arg*20})`
    el.style.height=`${binding.arg*10+10}px`;
  }
})



Vue.directive('pin',{
  //指令第一次绑定要元素时调用
  bind:(el,binding,vnode)=>{
    el.style.position='fixed';
    // let s=(binding.arg==='left' ? 'left' : 'top');
    el.style[binding.arg]=binding.value+'px';
    el.style.color='red';
  },
  //当绑定元素被插入到DOM元素中
  inserted:(el)=>{
    // el.addEventListener('click',()=>{
    //   console.log('点击1 :', event);
    // },false);
    // el.addEventListener('click',()=>{
    //   console.log('点击2 :', event);
    // },false);
    // el.addEventListener('click',()=>{
    //   console.log('点击3 :', event);
    // },true)
    

    //给document添加点击事件，并进行事件委托
    document.addEventListener('click',()=>{
      console.log("event",event);
      if(event.target['className']==='change-color'){
        event.target.style.backgroundColor='gray'
      }
    })




  },
  unbind(){
    // el.addEventListener('click',()=>{
    //   console.log('event :', event);
    // })
  }
})