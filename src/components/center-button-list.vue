<template>
    <div>
        <div class="flex_list">
            <div class="box_button">
                <Texts :tit="'天文学主要成就：系统的天文观测与记录'" />
                <div class="left">
                    
                    <div class="ov">
                        <vueSeamlessScroll :data="centerBottonLift" :class-option="defaultOption">
                            <div class="list">
                                从商代甲骨文起，中国记录了世界上最早的彗星（如哈雷彗星）、日月食、太阳黑子等天象，时间跨度长达数千年。  <br>
                                中国拥有超新星观测的记录，如北宋《宋史》中记载的“天关客星”就是1054年蟹状星云超新星爆发,为现代天体物理学提供了珍贵数据。  <br>
                                星表与星图:战国《甘石星经》记载了120余颗恒星位置,唐代敦煌星图是世界现存最古老的星图之一。<br>
                                同时，中国拥有独特的星官体系<br>
                                将星空划分为“三垣二十八宿”的体系，形成独特的星座命名和天文坐标系统，影响东亚各国。<br>
                            </div>
                        </vueSeamlessScroll>
                    </div>
                </div>
            </div>

            <div class="box_button">
                <Texts :tit="'天文学主要成就：精密的历法与天文仪器'" />
                <div class="right">
                    
                      
                    <div class="ov">
                        <vueSeamlessScroll :data="centerBottonRight" :class-option="defaultOption">
                            <div class="list" > 
                                从《太初历》（汉代）到《授时历》（元代），中国历法融合阴阳合历、节气、闰月等，精度极高。例如《授时历》推算回归年长度仅误差26秒。<br>  
                                历法服务于农业和社会管理，包含日、月、五星运行规律及交食预测。<br>
                                浑仪与简仪：汉代浑仪用于测量天体坐标，元代郭守敬简仪简化结构并提高精度。  <br>
                                张衡发明水运浑象（演示天体运行）和候风地动仪（测地震），宋代苏颂的水运仪象台集观测、演示与报时于一体，被誉为“中世纪天文钟”。<br>  
                                中国发明了独特的“圭表测影”通过测量日影长度确定节气与回归年，元代登封观星台的巨型圭表是代表。<br>
                            </div>
                        </vueSeamlessScroll>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Texts from '../components/text.vue';
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
    name: 'PieChart',
    props:["dataList",'centerBottonLift','centerBottonRight'],
    data() {
        return {
            allowScroll: true,
        }
    },
    components: {
        Texts,
        vueSeamlessScroll
    },

    mounted() {

    },
    computed: {
        defaultOption() {
            return {
                step: 0.3, // 数值越大速度滚动越快
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                openWatch: true, // 开启数据实时监控刷新dom
                singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动)direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
                // limitMoveNum: 3
            }
        },
    },

    methods: {

    }
};
</script>

<style scoped>
.rlt {
    width: 100%;
    height: 100%;
}

.flex_list {
    display: flex;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    justify-content: space-between;
    box-shadow: inset 0 0 20px 10px rgba(12, 30, 68, .6);
}

.box_button {
    width: calc(50% - 20px);
    height: calc(100% - 10px);
}

.left {
    width: 100%;
    height: 100%;
}

.right {
    width: 100%;
    height: 100%;
}




.flex_box>div {
    font-family: Microsoft YaHei;
    font-weight: 600;
    font-size: 12px;
    color: #FFFFFF;
    background: linear-gradient(180deg, #FFFFFF 0%, #36DCEB 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.flex_box>div:nth-child(1) {
    width: 40%;
    text-align: center;
}

.flex_box>div:nth-child(2) {
    width: 30%;
    text-align: center;
}

.flex_box>div:nth-child(3) {
    width: 30%;
    text-align: center;
}



.ov {
    height: 190px;
    overflow: hidden;
}

.tit {
    font-family: Microsoft YaHei;
    font-weight: bold;
    font-size: 10px;
    color: #ADFCFF;
}
</style>
