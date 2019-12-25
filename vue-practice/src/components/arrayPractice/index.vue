<template>
  <div class="array">
      事件代理(事件委托):<br>
      什么是事件委托？<br>
      <textarea v-model="eventDaili" id="" cols="30" rows="10"></textarea><br>
      2.1为什么要用事件委托<br>
      <textarea v-model="msg" id="" cols="30" rows="10"></textarea><br>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的与dom节点进行交互，访问dom的次数越多，引起浏览器重绘与重排的次数也就越多，就会延长整个页面的交互就绪时间，这就是为什么性能优化的主要思想之一就是减少DOM操作的原因；每个函数都是一个对象，是对象就会占用内存，对象越多，内存占用率越大，100个li就要占用100个内存空间。如果要用事件委托，就会将所有的操作放到js程序里面，只对它的父级(如果只有一个父级)这一个对象进行操作，与dom的操作就只需要交互一次，这样就能大大的减少与dom的交互次数，提高性能；',
      eventDaili:"事件委托还有一个名字叫事件代理，JS高程上讲：事件委托就是利用事件冒泡，只制定一个时间处理程序，就可以管理某一类型的所有事件。我用取快递来解释这个现象： 有三个同事预计会在周一收到快递。为签收快递，有两种办法：一是三个人在公司门口等快递；二是委托给前台代为签收。现实当中，我们大都采用委托的方案。前台收到快递后，她会判断收件人是谁，然后按照收件人的要求签收，甚至代为付款。这种方案还有一个优势，那就是即使公司里来了新员工（不管多少），前台也会在收到寄给新员工的快递后核实并代为签收。"
    }
  },
  computed:{

  },
  created(){

  },
  mounted(){

  },
  methods:{

  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.array{
  width:100%;
  height: 100%;
}
</style>
