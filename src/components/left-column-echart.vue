<template>
    <div>
        <Texts :tit="''" />
        <div ref="column" class="bt"></div>
    </div>

</template>

<script>
import Texts from '../components/text.vue';
import * as echarts from 'echarts';

export default {
    name: 'PieChart',
    props:["dataList"],
    mounted() {
        this.createChart();
    },
    watch:{
        dataList(){
            this.createChart();
        }
    },
    components: {
        Texts
    },
    methods: {
        createChart() {
            const chartDom = this.$refs.column;
            const myChart = echarts.init(chartDom);

            const option = {
                grid: {
                    left: '1%',
                    right: '12%',
                    bottom: '2%',
                    top: "2%",
                    containLabel: true
                },

                label: {
                    show: true,
                    position: "right", // 标签位置，可以设置为 top、bottom、inside等
                    color: "#fff", // 标签文字颜色
                    fontSize: 8,
                },
                xAxis: {
                    type: 'value',
                    show: false,// 设置 X 轴不显示
                    splitLine: { show: false },
                    // boundaryGap: [0, 10.01]
                },

                legend: {
                    data: ['任务数量', '数据数量',],      //图例名称
                    // right: 10,                              //调整图例位置
                    top: 226,                                  //调整图例位置
                    itemHeight: 8,
                    itemWidth: 8,                       //修改icon图形大小
                    // icon: 'circle',                         //图例前面的图标形状
                    textStyle: {                            //图例文字的样式
                        color: '#fff',               //图例文字颜色
                        fontSize: 12                     //图例文字大小
                    },
                    orient: 'horizontal', // 可选 'horizontal' 或 'vertical'
                },
                yAxis: {
                    type: 'category',
                    data: this.dataList.month,
                    axisLine: { // X轴线条样式
                        lineStyle: {
                            color: 'rgba(0,0,0,0)'// 设置X轴颜色为红色
                        }
                    },
                    axisLabel: {
                        color: '#fff', // 设置字体颜色为红色
                        fontSize: "12px"
                    }
                },
                series: [

                    {
                        name: '',
                        type: 'bar',
                        barGap: 0,
                        showBackground: true,
                        data:this.dataList.tnum,
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(31, 221, 255, 1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'rgba(0, 144, 255, 1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            }
                        }


                    },
                    {
                        name: '',
                        type: 'bar',
                        barGap: 0.05,
                        showBackground: true,
                        data:this.dataList.dnum,
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(255, 252, 2, 1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'rgba(255, 109, 0, 1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            }
                        }
                    }
                ]
            };

            myChart.setOption(option);
        }
    }
};
</script>



<style scoped>
.bt {
    width: 100%;
    height: 240px;
}
</style>
