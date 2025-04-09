<template>
	<div>
        <div class="box">
			<RightButtonEchart :dataList="dataList"/>
		</div>
	</div>
</template>

<script>
    import RightButtonEchart from '../../components/right-button-echart.vue'
	
	export default {
		name: '',
		props:["dataList"],
		data() {
			return {
			
			}
		},
        components:{
			RightButtonEchart
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
	.box{
		width: 100%;
        height: 274px;
        padding: 22px 24px;
        box-sizing: border-box;
		box-shadow: inset 0 0 20px 10px rgba(22, 78, 200,0.5);
		margin-top: 20px
    }
</style>
