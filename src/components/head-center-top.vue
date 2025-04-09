<template>
	<div class="head_css">
		<div class="hards">
			<div class="head_text">
				中国古代天文学成就及研究成果
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		
		data() {
			return {
			}
		},
		mounted() {

		},
		methods: {
		
		},
		watch: {
	
		}
	}
</script>

<style scoped >

.hards{
	height: 80px;
	background: url("../assets/img/top_hard.png") no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
	line-height: 60px;
	position: relative;
}
.head_text {
	font-size: 34px;
    font-family: CustomFont, sans-serif;
    background: -webkit-gradient(linear, left bottom, left top, from(#6ebcff), to(#fff));
    background: linear-gradient(to top, #6ebcff, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    height: -webkit-fill-available;
    -webkit-box-align: center;
    -ms-flex-align: cente;
	font-family:fg;
}
</style>
