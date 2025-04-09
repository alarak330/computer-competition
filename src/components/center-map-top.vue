<template>
  <div>
    <div class="map_box">
      <img class="bg_img" src="../assets/img/center_bg.png" alt="">
      </div>
      <div class="zuchongzhi_box">
        <zuchongzhi />
      </div>
      <div class="zhangheng_box">
        <zhangheng />
      </div>
      <div class="yixing_box">
        <yixing />
      </div>
      <div class="yixing_box">
        <susong />
      </div>
      <div>
        <guoshoujing />
      </div>
      <div>
        <xuguangqi />
      </div>
      <div>
        <meiwending />
      </div>
    </div>
</template>

<script>
import zhangheng from './person/张衡.vue';
import zuchongzhi from './person/祖冲之.vue';
import yixing from './person/一行.vue';
import susong from './person/苏颂.vue';
import guoshoujing from './person/郭守敬.vue';
import xuguangqi from './person/徐光启.vue';
import meiwending from './person/梅文鼎.vue';
export default {
  data() {
    return {
    };
  },
  components: {
    zhangheng,
    zuchongzhi,
    yixing,
    susong,
    guoshoujing,
    xuguangqi,
    meiwending,
  },
};  
</script>

<style scoped>
.bg_img {
  width: 70%;
  min-height: 30px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  pointer-events: none;
  /* 禁用图片交互方式 */
  user-select: none;
  -webkit-user-drag: none;
  z-index: -1;
}

.zhangheng_box{

  width:10%
}
.zuchongzhi_box{
  margin-left:300px;
  margin-bottom: 40px;
  width:1%;
  height:20px;
}


.yixing_box{
  margin-left:385px;
  margin-bottom: -200px;
  width:1%;
  height:20px;
}
.susong_box{
  margin-left:300px;
  margin-bottom: -200px;
  width:1%;
  height:20px;
}
.guoshoujing_box{
  margin-left:300px;
  margin-bottom: -200px;
  width:1%;
  height:20px;
}
</style>
