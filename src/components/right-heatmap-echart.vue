<template>
  <div ref="columns" class="rlt"></div>
</template>

<script>
import * as echarts from 'echarts/core';
export default {
  name: 'ScatterChart',
  props: {
    rightDataList: {
      type: Object,
      required: true,
      validator(value) {
        return Array.isArray(value?.categories) && 
               Array.isArray(value?.data) &&
               value.data.every(item => 
                 item.name && item.value && item.people && item.achievements
               )
      }
    }
  },
  mounted() {
    this.createChart();
  },
  watch:{
    rightDataList(){
            this.createChart();
        }
    },
  data() {
    return {
      
    }
  },
  methods: {
    createChart() {
      // 数据有效性检查
      if (!this.validateData()) {
        console.error('Invalid data format');
        return;
      }
      
      // 销毁旧实例
      if (this.myChart) {
        this.myChart.dispose();
      }
      
      const option = {
        xAxis: {
          type: 'category',
          name: '学科领域',
          data: this.rightDataList.categories,
          axisLabel: {
            color: '#fff',
            fontSize: 12,
            rotate: 30
          }
        },
        yAxis: {
          type: 'value',
          name: '成就数量',
          min: 0,
          max: Math.max(...this.rightDataList.data.map(d => d.value)) + 10,
          axisLabel: {
            color: '#fff',
            fontSize: 12
          }
        },
        series: [{
          type: 'scatter',
          data: this.rightDataList.data.map((item, index) => ({
            value: [index, item.value],
            name: item.name,
            people: item.people,
            achievements: item.achievements
          })),
          // 新增标签配置
          label: {
            show: true,
            formatter: (params) => params.value[1],
            position: 'top',
            color: '#FFEB3B',
            fontSize: 12,
            textShadowBlur: 5,
            textShadowColor: '#000'
          },
          symbolSize: (val) => Math.sqrt(val[1]) * 12,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              { offset: 0, color: '#64B5F6' },
              { offset: 0.7, color: '#1976D2' },
              { offset: 1, color: '#0D47A1' }
            ])
          }
        }]
      };
      
      // 初始化图表
      this.myChart = echarts.init(this.$refs.columns);
      this.myChart.setOption(option);
    },
    validateData() {
      const { categories, data } = this.rightDataList;
      return categories && data && 
             categories.length === data.length &&
             data.every((d, i) => d.name === categories[i]);
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: (params) => {
      const data = params.data;
      return `
      <div class="layer_bg">
        <div class="tit1">${data.name}领域</div>
        <div class="tit2">
          <div class="bjimg"></div>
          代表人物：
          <span class="tit4">${data.people.join('、')}</span>
        </div>
        <div class="tit3">
          <div class="bjimg"></div>
          重大成就：
          <span class="tit5">${data.achievements.join('<br>')}</span>
        </div>
      </div>`;
    }
  }
};

</script>

<style scoped>
.rlt {
  width: 100%;
  height: 110%;
}

::v-deep .layer_bg {
  /* 穿透修改提示框容器样式 */
  background: url("../assets/img/hbj.png");
  background-size: 100% 100%;
  width: 120px;
  height: 80px;
  padding: 12px 16px;
}
::v-deep .tit1 {
  /* 时间标题样式（12px居中） */
  font-size: 12px;
  display: flex;
  align-items: center;
}
::v-deep .bjimg {
  /* 箭头图标占位符 */
  width: 6px;
  height: 9px;
  background: url("../assets/img/rjt.png")no-repeat;
}
::v-deep .tit4 {
  /* 数量值特殊颜色（青蓝色） */
  color: rgba(0, 246, 255, 1);
}
::v-deep .tit5 {
  /* 风险等级特殊颜色（警示红色） */
  color: rgba(254, 58, 38, 1);
}
</style>
