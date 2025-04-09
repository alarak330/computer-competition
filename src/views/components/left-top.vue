<template>
	<div class="box_top">
		<Texts class="tit_left" :tit="'中国影响最深远的八大天文学成就'" />
		<div class="flexs top">
			<div class="flex_all">
				<div class="left_tits"></div>
				<img class="img_jt" src="../../assets/img/left_jt.png" alt="">
			</div>
			<div class="flex_ri_bj">
				<!-- <img class="img_k" src="../../assets/img/left_bj.png" alt=""> -->
				<div class="flex_list_box">
					<div class="tis">商周时期天文记录</div>
					<img class="imgs" src="../../assets/img/01.png" alt="">
				</div>
				<div class="flex_list_box">
					<div class="tis">浑天仪</div>
					<img class="imgs" src="../../assets/img/04.png" alt="">
				</div>
				<div class="flex_list_box">
					<div class="tis">甘石星经</div>
					<img class="imgs" src="../../assets/img/02.png" alt="">
				</div>
				<div class="flex_list_box">
					<div class="tis">马王堆汉墓彗星图</div>
					<img class="imgs" src="../../assets/img/03.png" alt="">
				</div>
			</div>
		</div>

		<div class="flexs topleft">
			<div class="flex_all">
				<div class="left_tits"></div>
				<img class="img_jt" src="../../assets/img/left_jt.png" alt="">
			</div>
			<div class="flex_ri_bj">
				<!-- <img class="img_k" src="../../assets/img/left_bj.png" alt=""> -->
				<div class="flex_list_box">
					<div class="tis">僧一行测子午线</div>
					<img class="imgs" src="../../assets/img/05.png" alt="">
				</div>
				<div class="flex_list_box">
					<div class="tis">宋代水运仪象台</div>
					<img class="imgs" src="../../assets/img/06.png" alt="">
				</div>
				<div class="flex_list_box">
					<div class="tis">郭守敬与《授时历》</div>
					<img class="imgs" src="../../assets/img/07.png" alt="">
				</div>
				<div class="flex_list_box">
					<div class="tis">敦煌星图</div>
					<img class="imgs" src="../../assets/img/08.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Texts from '../../components/text.vue';
export default {
	props:["dataList"],
	name: '',
	data() {
		return {

		}
	},
	components: {
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
.tit_left {
	margin-left: -10px;
}

.flex_list_box {
	width: 25%;
}

.box_top {
	width: 100%;
	height: 284px;
	box-shadow: inset 0 0 20px 10px rgba(22, 78, 200, 0.5);
	margin-bottom: 20px;
	padding: 28px 25px;
	box-sizing: border-box;
}

.flexs {
	display: flex;
	align-items: center;
}

.topleft {
	margin-top: 42px;
}

.flex_all {
	display: flex;
	align-items: center;
}

.img_jt {
	width: 12px;
	margin-left: 2px
}

.flex_ri_bj {
	padding: 0 8px;
	flex: 1;
	display: flex;
	justify-content: space-between;
	text-align: center;
	height: 70px;
	position: relative;
}

.img_k {
	position: absolute;
	width: 100%;
	min-height: 26px;
	top: 52px;
}

.imgs {
	width: 84px;
	margin-top: -12px
}

.tis {
	font-size: 13px;
	margin-bottom: 8px
}

.top {
	margin-top: 8px
}

.left_tits {
	color: white;
	font-size: 15px;
	font-weight: 100;
	font-family: ztk;
	background: linear-gradient(0deg, #00D2FF 20%, #FFFFFF 80%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
