<template>
	<div>
		<div class="centet_t">
			<div class="center_top">
				<CenterMapTop :dataCenters="dataCenters"/>
			</div>
			<div class="center_bot">
				<CenterButtonList 
					:centerBottonLift="centerBottonLift" 
				  	:dataListMap="dataListMap"
					:centerBottonRight="centerBottonRight"
				  />
			</div>
		</div>
	</div>
</template>

<script>
	import CenterMapTop from '../../components/center-map-top.vue'
	import CenterButtonList from '../../components/center-button-list.vue'
	export default {
		name: '',
		props:['centerBottonLift','centerBottonRight',"dataCenters",'dataListMap'],
		data() {
			return {
			
			}
		},
        components:{
			CenterMapTop,
			CenterButtonList
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
	
.center_top{
	width: 100%;
	height: 630px;
	position: relative;
}

.center_bot {
	width: 100%;
	height: 272px;
	box-shadow: inset 0 0 20px 10px rgba(22, 78, 200,0.5);
	margin-top: 8px;
}
</style>
