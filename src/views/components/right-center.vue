<template>
    <div>
        <div class="box">
            <div class="son">
                <RightCakeEchart :dataRightCenterLift="dataRightCenterLift"/>
            </div>
            <div class="son rwo">
                <Texts class="right_ri" :tit="'各朝代天文学家数量'" />
                <RightColumnEchart :data="dataRightCenterRight" />
            </div>
        </div>
    </div>
</template>

<script>
import RightCakeEchart from '../../components/right-cake-echart.vue'
import RightColumnEchart from '../../components/right-column-echart.vue'
import Texts from '../../components/text.vue';

export default {
    name: '',
    props:["dataRightCenterLift" , 'dataRightCenterRight'],
    data() {
        return {
            // list: [
            //     { kname: "严重违法失信", kcolor: "linear-gradient(-90deg, #FF9000, #FF6600)", knub: "34218", kpercentage: '55.526' },
            //     { kname: "企业涉诈", kcolor: "linear-gradient(-90deg, #ADF55B, #299053)", knub: "21339", kpercentage: '34.46' },
            //     { kname: "失信被执行人", kcolor: "linear-gradient(-90deg, #00F0FF, #0B97EF)", knub: "4266", kpercentage: '6.89' },
            //     { kname: "重大税收违法", kcolor: "linear-gradient(122deg, #F2F106, #FFA802)", knub: "1810", kpercentage: '2.22' },
            //     { kname: "环评守信一般企业", kcolor: "linear-gradient(-90deg, #96A5FF, #5A4DFF)", knub: "285", kpercentage: '0.46' },
            //     { kname: "安监生产", kcolor: "linear-gradient(-90deg, #0D88FF, #0054FF)", knub: "8", kpercentage: '0.01' },
            // ]
        }
    },
    components: {
        RightCakeEchart,
        RightColumnEchart,
        Texts
    },
    mounted() {

    },
    methods: {

    },
    watch: {
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 324px;
    display: flex;
    justify-content: space-between;

}

.son {
    width: 50%;
    padding: 22px 25px;
    box-sizing: border-box;
    box-shadow: inset 0 0 20px 10px rgba(22, 78, 200, 0.5);
}

.rwo {
    margin-left: 20px;
}
</style>
