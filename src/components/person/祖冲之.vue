<template>
<div class="zuchongzhi-container">   
    <img
      class="zuchongzhi-image" 
      src="@/assets/img/circle.png" 
      alt="" 
      :style="{ top: zuchongzhiTop + 'px', left: zuchongzhiLeft + 'px' }"
      />

    <div class="zuchongzhi">
      <h1>祖冲之</h1>
      429年-500年<br>
      南朝宋、齐<br>

      -----编制《大明历》，首次引入“岁差”概念，提高历法精度。-----<br> 
      -----精确测定回归年长度(365.2428日),与现代值仅差46秒。-----<br>
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
.zuchongzhi-image {
    margin-left: 117px;  /* 修改位置的区域 */
    margin-top:0px;
    margin-bottom: -165px;
    width: 4vw;
    height: 4vw;
    /* position: absolute; */
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
    user-select: none;
  -webkit-user-drag: none;
  z-index: -1;
}
.zuchongzhi-image:hover {
    transform: translate(-50%, -50%) scale(1.7);
    transform-origin: center;
    z-index: 999;
}
.zuchongzhi-container {
    position: relative;
    display: inline-block;
    width: 10%;
    height: 10px;
}
.zuchongzhi {
    margin-left: 1px;  /* 修改位置的区域 */
    margin-top:1px;
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
.zuchongzhi-image:hover + .zuchongzhi {
    visibility: visible;
    opacity: 1;
}


</style>