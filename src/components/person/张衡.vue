<template>
  <div class="zhangheng-container">
    <img 
      class="zhangheng-image" 
      src="@/assets/img/circle.png" 
      alt=""
      :style="{ top: zhanghengTop + 'px', left: zhanghengLeft + 'px' }" 
      />

    <div class="zhangheng">
      <h1>张衡</h1>
      78年-139年<br>
      朝代：东汉<br>

      -----提出“浑天说”，改进浑天仪，首次用仪器模拟天体运行。-----<br>
      -----著作《灵宪》系统阐述宇宙理论，提出“月光为日反照”的科学解释。-----<br>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
    
    };
  },
}
</script>


<style scoped>
.zhangheng-image {
  margin-left: 60px;  /* 修改位置的区域 */
  margin-top:-0px;
  margin-bottom: 10px;
  width: 4vw;
  height: 4vw;
  /* position: absolute; */
  transform: translate(-50%, -50%); 
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
  z-index: -1;
}

.zhangheng-image:hover {
  transform: translate(-50%, -50%) scale(1.7);
  transform-origin: center;
  z-index: 999;
}

.zhangheng-container {
  position: relative;
  display: inline-block;
  width: 10%;
  height: 0px;
  left:150px
}

.zhangheng {
  margin-left: -100px;  /* 修改位置的区域 */
  margin-top:0px;
  margin-bottom: -190px;
  visibility: hidden;
  font-size: 16px;
  font-weight: bold;
  width: 800px;
  color: #0d0626;
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  /* position: absolute;
  top: -100px;
  left: 22%; */
  transform: translateX(-50%);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
  transition-delay: 0.5s;
  background-image: url('@/assets/img/juan_zhou.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.zhangheng-image:hover + .zhangheng {
  visibility: visible;
  opacity: 1;
}

</style>