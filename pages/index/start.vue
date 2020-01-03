<template>
	<view class="content">
		<!-- <image class="startPage" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv/static/startPage.png"></image> -->
		<image class="startPage" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/startPage.jpg"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// console.log('App Show')
		},
		onShow: function() {
			console.log('App Show');
			setTimeout(function(){
				
				let identity=uni.getStorageSync("identity");
				if(identity==1){
					uni.redirectTo({
					    url: '../company/pHome'
					});
				}else{
					uni.redirectTo({
					    url: '../home/home'
					});
				}
			},4000)
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
	height: 100vh;
	width:100vw;
	}

	.content>image {
		height: 100%;
		width:100%;
		
	}

</style>
