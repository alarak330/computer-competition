<template>
  <div>
    <Texts :tit="'古代各国天文学成就数'" />
    <div class="postion_r">
      <div class="bt" ref="pieChart"></div>
      <img class="tjt_img" src="../assets/img/tjt.png" alt="">
    </div>
  </div>

</template>

<script>
import * as echarts from "echarts";
import Texts from '../components/text.vue';
export default {
  name: 'PieChart',
  props:["dataRightCenterLift"],
  data(){
    return {
      arrXval:[]
    }
  },
  mounted() {
    this.createChart();

  },
  watch:{
    dataRightCenterLift(){
            this.createChart();
        }
    },
  components: {
    Texts
  },
  methods: {
    createChart() {
      const chartDom = this.$refs.pieChart;
      const myChart = echarts.init(chartDom);

      let arr =this.dataRightCenterLift;
      // 计算总数
      let total = arr.reduce((acc, cur) => acc + cur.num, 0);
      
      arr.forEach((item) => {
        item.percent = ((item.num / total) * 100).toFixed(2) + "%";
        item.value = item.num;
        item.name = item.name;
        this.arrXval.push(item.name)
      });

      const seriesInner = {
        type: 'pie',
        radius: ['30%', '47%'], // 外部半径
        center: ['50%', '35%'],
        itemStyle: {
          // borderRadius: 10, //圆角角度
          borderColor: '#fff', //边框颜色
          borderWidth: 0 //边框宽度
        },
        data: arr.map(item => item),
        label: {
          show: true,
          position: 'outer', // 显示在外部
          formatter: (params) => `{name|${params.name}}{value|${params.value}}`,
          rich: {
            name: {
              fontSize: 10,
              color: '#fff', // 名称颜色
            },
            value: {
              fontSize: 10,
              color: '#fff', // 值颜色
            },
          },
        },
        labelLine: {
          show: true, // 显示连接线
          length: 10, // 内部标签线长度
          length2: 10, // 外部标签线长度
        },
      };

      const option = {
        color: ["#FFA555","#0FC89F", "#00F6FF", "#C4654E", "#15A9F5", "#FFC091"],
        legend: {
          data: this.arrXval,
          top: 200,
          itemHeight: 4,
          itemWidth: 4,
          icon: 'circle',
          textStyle: {
            color: '#fff',
            fontSize: 11
          },
          orient: 'horizontal', // 可选 'horizontal' 或 'vertical'
        },
        series: [seriesInner],
      };
      myChart.setOption(option);
    },
  }
};
</script>

<style>
.bt {
  width: 100%;
  height: 300px;
}

.postion_r {
  position: relative;
}

.tjt_img {
  width: 110px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translate(-50%);
}
</style>