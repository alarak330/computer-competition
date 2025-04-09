<template>
  <div>
    <Texts :tit="'各朝暂存天文学仪器数'" />
    <div class="pos_all">
      <div class="btbx" ref="pieChart"></div>
      <img class="pos" src="../assets/img/zjbj.png" alt="">
      <img class="jxt_img" src="../assets/img/jxt.png" alt="">
    </div>
  </div>

</template>

<script>
import Texts from '../components/text.vue';
import * as echarts from "echarts";

export default {
  name: 'PieChart',
  props:["centerRightList"],
  data(){
    return {
      
      arrXavl:[],
    }
  },
  mounted() {
    this.createChart();
  },
  watch:{
      centerRightList(){
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
      let arr = this.centerRightList;
      let total = arr.reduce((acc, cur) => acc + cur.num, 0);
      arr.forEach((item) => {
        item.percent = ((item.num / total) * 100).toFixed(2) + "%";
        item.value = item.num;
        item.name = item.name;
        this.arrXavl.push(item.name)
      });
      const seriesOuter = {
        type: 'pie',
        radius: ['30%', '40%'], // 外部半径
        center: ['50%', '35%'],
        itemStyle: {
          borderRadius: 10, //圆角角度
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
              fontSize: 11,
              color: '#fff', // 名称颜色
            },
            value: {
              fontSize: 11,
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
        color: ["#0FC89F", "#00F6FF", "#C4654E", "#15A9F5", "#FFA530"],
        legend: {
          data: this.arrXavl,
          top: 190,                          
          itemHeight: 6,
          itemWidth: 6,                       
          icon: 'circle',                     
          textStyle: {                          
            color: '#fff',            
            fontSize:10                    
          },
          orient: 'horizontal', 
        },
        series: [seriesOuter],
      };
      myChart.setOption(option);
    },

  }
};
</script>

<style scoped>
.btbx {
  width: 100%;
  height: 300px;
}

.pos_all {
  position: relative;
}

.pos {
  position: absolute;
  top: 76px;
  left: 50%;
  width: 60px;
  transform: translate(-50%);
}
.jxt_img{
 
  position: absolute;
  top:48px;
  left: 50%;
  width: 116px;
  z-index: -1;
  transform: translate(-50%);
}
</style>