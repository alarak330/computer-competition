<template>
  <div class="box_button_left">
    <Texts class="tit_left" :tit="'中国古代各朝代天文学典籍数量'" />
    <div ref="lineChart" class="box_zx"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Texts from '../../components/text.vue';

export default {
  name: 'LineChart',
  props:["dataList"],
  data() {
    return {
   
    }
  },
  mounted() {
    this.initLineChart();
  },

  watch:{
    dataList(){
            this.initLineChart();
        }
    },
  components: {
    Texts
  },
  methods: {
    initLineChart() {
      const chartDom = this.$refs.lineChart;
      const myChart = echarts.init(chartDom);

      const option = {
        grid: {
          left: '-6%',
          right: '2%',
          bottom: '8%',
          top: "2%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          boundaryGap: false,
          data: this.dataList.month,
          axisLine: { // X轴线条样式
            lineStyle: {
              color: 'rgba(0,0,0,0)'// 设置X轴颜色为红色
            }
          },
          axisLabel: {
            color: '#fff', // 设置字体颜色为红色
            fontSize: 8,
          }
        },
        yAxis: {
          type: "value",
          splitLine: { show: true },
          show: false,
        },
        series: [
          {
            showSymbol: true, // 关闭显示圆圈
            data: this.dataList.dnum,
            type: "line",
            symbol: "circle", // 设置数据点符号形状为圆形
            label: {
              show: true,
              position: "top", // 标签位置，可以设置为 top、bottom、inside等
              color: "#fff", // 标签文字颜色
              fontSize: 8,
            },
            lineStyle: {
              width: 0.5,
              color: "rgba(117, 251, 253, 1)",
            },
            itemStyle: {
              color: "rgba(0, 252, 255, 1)", // 数据点颜色
              borderColor: "rgba(117, 251, 253, 0.4)", // 数据点边框颜色
              borderWidth: 8, // 数据点边框宽度
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 0.9, [
                {
                  offset: 0,
                  color: "rgba(117, 251, 253, 0.9)",
                },
                {
                  offset: 1,
                  color: "rgba(117, 251, 253, .05)",
                },
              ]),
            },
          },
        ],
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
.box_button_left {
  width: 100%;
  height: 272px;
  box-shadow: inset 0 0 20px 10px rgba(22, 78, 200, 0.5);
  margin-top: 20px;
  padding: 25px 24px;
  box-sizing: border-box;
}

.box_zx {
  width: 100%;
  height: 100%;
}
</style>