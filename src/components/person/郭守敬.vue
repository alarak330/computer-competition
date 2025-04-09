<template>
<div class="guoshoujing-container">   
    <img
      class="guoshoujing-image" 
      src="@/assets/img/circle.png" 
      alt="" 
      :style="{ top: guoshoujingTop + 'px', left: guoshoujingLeft + 'px' }"
      />

    <div class="guoshoujing">
      <h1>郭守敬</h1>
      1231年——1316年<br>
      元<br>

      编制《授时历》,中国古代最精确历法（回归年365.2425日,与现代仅差26秒）。<br>
      发明简仪、仰仪等十余种天文仪器，简化观测流程。<br>
      组织“四海测验”,在全国设27个观测点测定纬度。<br>

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
.guoshoujing-image {
    margin-left: 610px;  /* 修改位置的区域 */
    margin-top:-50px;
    margin-bottom: -610px;
    width: 4vw;
    height: 4vw;
    /* position: absolute; */
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
    user-select: none;
    -webkit-user-drag: none;
    z-index: -1;
}
.guoshoujing-image:hover {
    transform: translate(-50%, -50%) scale(1.7);
    transform-origin: center;
    z-index: 999;
}
.guoshoujing-container {
    position: relative;
    display: inline-block;
    width: 10%;
    height: 10px;
}
.guoshoujing {
    margin-left: 490px;  /* 修改位置的区域 */
    margin-top:100px;
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
.guoshoujing-image:hover + .guoshoujing {
    visibility: visible;
    opacity: 1;
}


</style>