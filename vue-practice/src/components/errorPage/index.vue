<template>
  <div id="page">
    <div class="error_wrap">
      <!-- displayflex -->
      <div>
        <!-- 定位 -->
        <div class="img-text-wrap">
          <img class="error-img" :src="`../../../static/images/code_404.png`" alt="暂无图片">
          <div class="text-wrap">
            <p class="mt-3 error_title">抱歉，你访问的页面不存在</p>
            <div class="mt-4 error_button">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page_404",
  data() {
    return {};
  },
  methods:{
    backLastePage(){

    }
  }
};
</script>

<style lang="scss" scope>
#page{
  height: 100%;
  width: 100%;
  .error_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAFAFA;
    color: #333333;
    font-size: 18px;
    text-align: center;
    .img-text-wrap{
      width: 555px;
      height: 543px;
      position: relative;
      .error-img{
        width: 100%;
        height: 100%;
      }
      .text-wrap{
        position: absolute;
        bottom: 95px;
        text-align: center;
        width: 100%;
        .error_title{
          font-size:20px;
          font-family:"PingFang-SC-Bold,PingFang-SC";
          font-weight:bold;
          color:rgba(57,61,79,1);
        }
        .error_title_2{
          font-size:16px;
          font-family:"PingFangSC-Regular,PingFang SC";
          font-weight:400;
          color:rgba(134,134,134,1);
        }
      }
    }
  }
}
</style>

