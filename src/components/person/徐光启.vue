<template>
<div class="xuguangqi-container">   
    <img
      class="xuguangqi-image" 
      src="@/assets/img/circle.png" 
      alt="" 
      :style="{ top: xuguangqiTop + 'px', left: xuguangqiLeft + 'px' }"
      />

    <div class="xuguangqi">
      <h1>徐光启</h1>
      1562年——1633年<br>
      明<br>

      与传教士利玛窦合译《崇祯历书》，引入西方天文理论。<br>
      主持修订《崇祯历法》，融合中西天文历算方法。<br>
      推动天文观测仪器（如望远镜）的早期应用。<br>


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
.xuguangqi-image {
    margin-left: 870px;  /* 修改位置的区域 */
    margin-top:-50px;
    margin-bottom: -680px;
    width: 4vw;
    height: 4vw;
    /* position: absolute; */
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
    user-select: none;
    -webkit-user-drag: none;
    z-index: -1;
}
.xuguangqi-image:hover {
    transform: translate(-50%, -50%) scale(1.7);
    transform-origin: center;
    z-index: 999;
}
.xuguangqi-container {
    position: relative;
    display: inline-block;
    width: 10%;
    height: 10px;
}
.xuguangqi {
    margin-left: 650px;  /* 修改位置的区域 */
    margin-top:180px;
    margin-bottom: -100px;
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
.xuguangqi-image:hover + .xuguangqi {
    visibility: visible;
    opacity: 1;
}


</style>