<template>
	<div>
		<div class="box">
			<div class="rig">
				<div class="box_li">
					<Texts class="right_ri" :tit="'古代天文学成就数'" />
					<div class="box_all">
						<div class="flex_op">
							<img class="imgs" src="../../assets/img/dn.png" alt="">
							<div>
								
								<div class="h1">二十四节气，是古代天<br>
									文学与农耕文化的结合</div>
								<div class="h2 bf">{{ dataList.jkqynum || '' }}</div>  <!-- 添加空值过滤 -->
							</div>
						</div>


					</div>
				</div>
				<div class="box_ri">
					<RightHeatmapEchart :rightDataList="rightDataList"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Texts from '../../components/text.vue';
import RightHeatmapEchart from '../../components/right-heatmap-echart.vue'
export default {
	props:["dataList","rightDataList"],
	name: '',
	data() {
		return {

		}
	},
	components: {
		RightHeatmapEchart,
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
	height: 274px;
	box-shadow: inset 0 0 20px 10px rgba(22, 78, 200, 0.5);
	margin-bottom: 20px;
}

.rig {
	display: flex;
}

.box_li {
	width: 40%;
	height: 250px;
	padding: 28px 24px;
	box-sizing: border-box;
}

.box_all {
	padding: 24px 12px;
	box-sizing: border-box;
}

.box_ri {
	width: 60%;
	height: 270px;
}

.flex_op {
	display: flex;
	justify-content: left;
	margin-top: 20px;
}

.tops {
	margin-top: 12px;
}

/* 通用图片样式保留 */
.imgs {
    width: 48px;
    height: 48px;
    margin-right: 18px;
}

/* 精确限定到左侧统计框内的图片 */
.box_li .flex_op .imgs {
    width: 110px;
    height: 110px;
    margin-right: 18px;
}

.h1 {
	font-family: Microsoft YaHei;
	font-weight: 400;
	font-size: 14px;
	color: #FFFFFF;
	writing-mode: vertical-rl;  /* 竖排文字 */
	
}

.h3 {
	font-family: PangMenZhengDao-3;
	font-weight: 400;
	font-size: 24px;
	font-weight: 900;
	color: #FF9600;
	font-family: fg;
	position: relative;
}


</style>
