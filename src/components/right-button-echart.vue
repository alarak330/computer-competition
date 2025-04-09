<template>
    <div>
        <Texts :tit="'中国古代重大天文发现与事件'" />
        <div ref="column" class="bt_ri"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import Texts from '../components/text.vue';


export default {
    name: 'PieChart',
	props:["dataList"],
    data(){
        return {

        }
    },
    mounted() {
        this.createChart();
    },
    watch:{
        dataList(){
            this.createChart();
        }
    },
    components:{
        Texts
    },
    methods: {
        createChart() {
            const chartDom = this.$refs.column;
            const myChart = echarts.init(chartDom);
            const option = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "rgba(0, 180, 255, 1)", // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: "rgba(0, 180, 255, 0)", // 100% 处的颜色
                    },
                ]),
                grid: {
                    top: "12%",
                    bottom: "5%",
                    right: "2%",
                    left: "-4%",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        data:this.dataList.month,
                        axisLabel: {
                            show: true,
                            margin: 12,
                            fontSize: 8,
                            textStyle: {
                                color: "#ffffffcc"
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#355d8d",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                ],
                yAxis: [
                    {
                        show:false,
                        axisLabel: {
                            show: true,
                            margin: 8,
                            fontSize: 6,
                            textStyle: {
                                color: "#FFFFFF99", //字体颜色
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "#87C2FF66",
                                width: 0.1,
                                type: "dashed",
                            },
                        },
                    },
                ],
                series: [
                    {
                        type: "bar",
                        barWidth: 10,
                        barGap: "11%",
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                        },
                        itemStyle: {
                            barBorderRadius: 15,
                            borderWidth: 1,
                        },
                        data: this.dataList.dnum.map((value, index) => ({
                            value: value,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { 
                                        offset: 0, 
                                        color: ["#FF4365", "#FFA647", "#FFE66D", "#6FCF97", "#3DCCC7", "#5E9FFF"][index] 
                                    },
                                    { 
                                        offset: 1, 
                                        color: ["#FF4365", "#FFA647", "#FFE66D", "#6FCF97", "#3DCCC7", "#5E9FFF"][index] + "00" 
                                    }
                                ])
                            }
                        }))
                    }
                ]
            };
            myChart.setOption(option);
        }
    }
};
</script>

<style>
.bt_ri {
    width: 100%;
    height: 210px;
}
</style>
