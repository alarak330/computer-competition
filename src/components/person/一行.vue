<template>
<div class="yixing-container">   
    <img
      class="yixing-image" 
      src="@/assets/img/circle.png" 
      alt="" 
      :style="{ top: yixingTop + 'px', left: yixingLeft + 'px' }"
      />

    <div class="yixing">
      <h1>一行</h1>
      683年——727年<br>
      唐<br>

      主持修订《大衍历》，首次用数学方法计算日食、月食。<br>
      组织大规模天文测量，实测子午线长度（世界首次）。<br>
      发明“黄道游仪”改进天体测量精度。<br>
      </div>
    </div>
</template>


<script>
export default{ 
  data() {
    return{
        
    };
  },
}
</script>


<style scoped>
.yixing-image {
    margin-left: 120px;  /* 修改位置的区域 */
    margin-top:-530px;
    margin-bottom: -0px;
    width: 4vw;
    height: 4vw;
    /* position: absolute; */
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
    user-select: none;
  -webkit-user-drag: none;
  z-index: -1;
}
.yixing-image:hover {
    transform: translate(-50%, -50%) scale(1.7);
    transform-origin: center;
    z-index: 999;
}
.yixing-container {
    position: relative;
    display: inline-block;
    width: 10%;
    height: 10px;
}
.yixing {
    margin-left: 0px;  /* 修改位置的区域 */
    margin-top:-150px;
    margin-bottom: -300px;
    visibility: hidden;
    font-size: 16px;
    font-weight: bold;
    width: 800px;
    color: #0d0626;
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    position: absolute;
    top: 200px;
    left: 120px; 
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
.yixing-image:hover + .yixing {
    visibility: visible;
    opacity: 1;
}


</style>