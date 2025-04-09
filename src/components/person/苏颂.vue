<template>
<div class="susong-container">   
    <img
      class="susong-image" 
      src="@/assets/img/circle.png" 
      alt="" 
      :style="{ top: susongTop + 'px', left: susongLeft + 'px' }"
      />

    <div class="susong">
      <h1>苏颂</h1>
      1020年——1101年<br>
      北宋<br>

      设计水运仪象台，集天文观测、计时报时、星象演示于一体。<br>
      著作《新仪象法要》详细记载仪器结构，保存古代天文机械技术。<br>
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
.susong-image {
    margin-left: 237px;  /* 修改位置的区域 */
    margin-top:-530px;
    margin-bottom: -285px;
    width: 4vw;
    height: 4vw;
    /* position: absolute; */
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
    user-select: none;
    -webkit-user-drag: none;
    z-index: -1;
}
.susong-image:hover {
    transform: translate(-50%, -50%) scale(1.7);
    transform-origin: center;
    z-index: 999;
}
.susong-container {
    position: relative;
    display: inline-block;
    width: 10%;
    height: 10px;
}
.susong {
    margin-left: 120px;  /* 修改位置的区域 */
    margin-top:120px;
    margin-bottom: -10px;
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
.susong-image:hover + .susong {
    visibility: visible;
    opacity: 1;
}


</style>