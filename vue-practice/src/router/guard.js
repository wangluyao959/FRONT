import router from './index'

/**
 * 全局前置路由守卫
*/
router.beforeEach((to, from, next)=>{
  console.log('from :', from);
  console.log('to :', to);
  next();
});
/**
 *全局后置钩子
*/
router.afterEach((to, from) => {
  // ...
});