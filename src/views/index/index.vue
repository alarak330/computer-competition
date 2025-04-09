<template>
  <div class="content bg" id="index" ref="appRef">
    <dv-loading class="pos" v-if="loading">Loading...</dv-loading>
    <div class="boxs_all">
      <div class="hard">
        <HeadCenterTop />
      </div>
      <div class="box_alls">
        <div class="left-box">
          <LeftTop :dataList="dataLeftTop" />
          <LeftCenter :dataList="dataLeftCenter" :centerRightList="centerRightList" />
          <LeftButton :dataList="dataLeftButton" />
        </div>
        <div class="box-center">
          <Centers
            :dataCenters="dataCenters"
            :dataListMap="dataListMap"
            :centerBottonLift="centerBottonLift"
            :centerBottonRight="centerBottonRight"
          />
        </div>
        <div class="box_right">
          <RightTop :dataList="dataRightTop" :rightDataList="rightDataList" />
          <RightCenter
            :dataRightCenterLift="dataRightCenterLift"
            :dataRightCenterRight="dataRightCenterRight"
          />
          <RightButton :dataList="dataRightButton" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadCenterTop from "../../components/head-center-top.vue";
import LeftTop from "../components/left-top.vue";
import LeftCenter from "../components/left-center.vue";
import LeftButton from "../components/left-button.vue";
import RightTop from "../components/right-top.vue";
import RightCenter from "../components/right-center.vue";
import RightButton from "../components/right-button.vue";
import Centers from "../components/center.vue";
import keyBoard from "../../utils/keyboard";
import drawMixin from "../../utils/drawMixin";
import api from "../../api/index";
import dataObj from "../../api/data.json";
import axios from "axios";
export default {
  mixins: [keyBoard, drawMixin],
  name: "HomeView",
  data() {
    return {
      loading: false,
      dataObj,
      // dataObj: {},
      dataLeftTop: [],
      dataLeftCenter: [],
      dataLeftButton: [],
      dataCenters: [],
      dataRightTop: [],
      dataRightCenter: [],
      dataRightButton: [],
      centerRightList: [],
      centerBottonLift: [],
      centerBottonRight: [],
      dataListMap: [],
      rightDataList: [],
      dataRightCenterLift: [],
      dataRightCenterRight: [],
    };
  },
  components: {
    HeadCenterTop,
    LeftTop,
    LeftCenter,
    LeftButton,
    RightTop,
    RightCenter,
    RightButton,
    Centers,
  },
  mounted() {
    // this.getInit();
    this.init();
  },
  methods: {
    getInit() {
      this.loading = true;
      axios
        .get(process.env.VUE_APP_URL)
        .then((response) => {
          this.dataObj = response.data;
          console.log(this.dataObj);
          setTimeout(() => {
            this.init();
            this.loading = false;
          }, 500);
        })
        .catch((error) => {
          console.error("err", error);
        });

      // api.cates().then((res) => {
      // 	this.dataObj = res.data;
      // 	setTimeout(()=>{
      // 		this.init()
      // 		this.loading =false
      // 	},500)
      // })
    },
    init() {
      let leftCenterObj = {};
      let monthArr = [];
      let dnumArr = [];
      let tnumArr = [];
      this.dataObj.zlrwlist.forEach((item) => {
        monthArr.push(item.date);
        dnumArr.push(item.dnum);
        tnumArr.push(item.tnum);
      });
      leftCenterObj.month = monthArr;
      leftCenterObj.dnum = dnumArr;
      leftCenterObj.tnum = tnumArr;
      this.dataLeftCenter = leftCenterObj;
      this.centerRightList = this.dataObj.zbbqlist;
      let { sjjrnum, jkdynum, cpfwnum, ptzlnum } = this.dataObj;
      let objtop = {};
      objtop.sjjrnum = nubFor((sjjrnum / 100000000).toFixed(2));
      objtop.jkdynum = nubFor(jkdynum);
      objtop.cpfwnum = nubFor(cpfwnum);
      objtop.ptzlnum = nubFor(ptzlnum);
      function nubFor(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      this.dataCenters = objtop;
      this.centerBottonLift = this.dataObj.jkdylisttop;
      this.centerBottonRight = this.dataObj.cpfwlisttop;
      this.centerBottonRight = this.dataObj.cpfwlisttop;
      let leftCenterObjBt = {};
      let monthArrBt = [];
      let dnumArrBt = [];
      this.dataObj.cpljfwlistm12.forEach((item) => {
        monthArrBt.push(item.month);
        dnumArrBt.push(Number(item.num));
      });
      leftCenterObjBt.month = monthArrBt;
      leftCenterObjBt.dnum = dnumArrBt;
      this.dataRightButton = leftCenterObjBt;
      let leftbtnObj = {};
      let monthArrLt = [];
      let dnumArrLt = [];
      this.dataObj.jkdylistm12.forEach((item) => {
        monthArrLt.push(item.month);
        dnumArrLt.push(Number(item.num));
      });
      leftbtnObj.month = monthArrLt;
      leftbtnObj.dnum = dnumArrLt;
      this.dataLeftButton = leftbtnObj;
      let { jkqynum, fxxhnum } = this.dataObj;
      let objtopri = {};
      objtopri.jkqynum = jkqynum;
      objtopri.fxxhnum = fxxhnum;
      this.dataRightTop = objtopri;
      this.dataRightCenterLift = this.dataObj.jzhkredlist;
      let total = this.dataObj.jzhkblacklist.reduce((acc, cur) => acc + cur.num, 0);
      var lists = [
        "linear-gradient(-90deg, #FF9000, #FF6600)",
        "linear-gradient(-90deg, #ADF55B, #299053)",
        "linear-gradient(-90deg, #00F0FF, #0B97EF)",
        "linear-gradient(122deg, #F2F106, #FFA802)",
        "linear-gradient(-90deg, #96A5FF, #5A4DFF)",
        "linear-gradient(-90deg, #0D88FF, #0054FF)",
      ];
      this.dataObj.jzhkblacklist.forEach((item, index) => {
        item.percent = ((item.num / total) * 100).toFixed(2);
        item.kcolor = lists[index];
      });
      this.dataRightCenterRight = this.dataObj.jzhkblacklist;
      const arrYear = [];
      const arrLevel = [];
      this.dataObj.fxxhlist.forEach((item, index) => {
        arrLevel.push(item.level);
        arrYear.push(item.month);
      });
      const levels = [...new Set(arrLevel)];
        const categories = ['天文历法', '数学', '医药学', '农学', '工程技术'];
        const achievementsData = [
          {
            name: '天文历法',
            value: 35,
            people: ['张衡', '郭守敬'],
            achievements: ['浑天仪', '授时历']
          },
          {
            name: '数学',
            value: 42,
            people: ['祖冲之', '刘徽'],
            achievements: ['圆周率', '九章算术']
          },
          {
            name: '医药学',
            value: 28,
            people: ['李时珍', '孙思邈'],
            achievements: ['本草纲目', '千金方']
          },
          {
            name: '农学',
            value: 19,
            people: ['贾思勰'],
            achievements: ['齐民要术']
          },
          {
            name: '工程技术',
            value: 50,
            people: ['李冰', '宇文恺'],
            achievements: ['都江堰', '赵州桥']
          }
        ];
    
        this.rightDataList = {
          categories: categories,
          data: achievementsData
      };
    }
  },
};
</script>

<style scoped>
.pos {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hard {
  width: 100%;
  height: 80px;
  text-align: center;
}

.left-box {
  width: 30%;
  margin: 10px;
  margin-right: 0;
  height: 100%;
  position: relative;
}

.box_right {
  margin: 10px;
}

.boxs_all {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.box_alls {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
}

.box-center {
  width: 60%;
  margin: 10px 28px 10px 28px;
}

.box_right {
  width: 30%;
  margin: 10px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
}
</style>
