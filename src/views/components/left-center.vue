<template>
    <div class="tops">
        <div class="box_center">
            <div class="son_left_centet">
                <LeftColumnEchart :dataList="dataList" />
            </div>
            <div class="son_left_centet two">
                <LeftCakeEchart :centerRightList="centerRightList"/>
            </div>
        </div>
    </div>
</template>

<script>
import LeftCakeEchart from '../../components/left-cake-echart.vue'
import LeftColumnEchart from '../../components/left-column-echart.vue'

export default {
    name: '',
    props:["dataList","centerRightList"],
    data() {
        return {

        }
    },
    components: {
        LeftCakeEchart,
        LeftColumnEchart
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
.tops {
    width: 100%;
    height: 314px;
}

.box_center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.son_left_centet {
    width: 50%;
    padding: 28px 25px;
    box-sizing: border-box;
    box-shadow: inset 0 0 20px 10px rgba(22, 78, 200, 0.5);
}

.two {
    margin-left: 20px
}
</style>
