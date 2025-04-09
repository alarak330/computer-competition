<template>
	<div class="flex">
       <img class="imgs" src="../assets/img/jt.png" alt="">
       <div class="box_tit">{{tit}}</div>
	</div>
</template>

<script>

	export default {
        props:[
            'tit'
        ],
		name: '',
		data() {
			return {
			
			}
		},
        components:{

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
    @font-face {
		font-family: ztk; 
		src: url("../assets/css/ztk.ttf") format("truetype");
    }
    .flex{
        display: flex;
    }
    .imgs{
        width: 24px;
    }
	
	.box{
        width: 100%;
        height: 190px;
        display: flex;
        justify-content: space-between;
		box-shadow: inset 0 0 20px 10px rgba(22, 78, 200,0.5);
		margin-bottom: 10px
    }

	.box_tit{
		color: white;
		font-size: 20px;
		font-weight: 100;
		font-family:ztk;
		background: linear-gradient(0deg, #00D2FF 20%, #FFFFFF 80%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

</style>
