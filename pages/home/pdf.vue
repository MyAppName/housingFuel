<template>
	<view class="pdf">
		<view class="pdF" v-if="type<5">
			<view class="pdf1">
				使用说明
			</view>
			<view class="Line"></view>
			<view class="pdf2">
				<view class="pdf21" @tap="topdf(1)">
					登录说明
				</view>
				<view class="pdf21" @tap="topdf(2)">
					报修说明
				</view>
				<view class="pdf21" @tap="topdf(3)">
					催单说明
				</view>
				<view class="pdf21" @tap="topdf(4)">
					缴费说明
				</view>
			</view>
		</view>
		<view class="pdf" v-if="type==1">
		<!-- <image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/regist/0_1.jpg" mode=""></image> -->
		<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/regist/0_2.jpg" mode=""></image>
		<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/regist/0_3.jpg" mode=""></image>
		<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/regist/0_4.jpg" mode=""></image>
		<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/regist/0_5.jpg" mode=""></image>
		<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/regist/0_6.jpg" mode=""></image>
		<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/regist/0_7.jpg" mode=""></image>
		</view>
		<view class="pdf" v-if="type==2">
			<!-- <image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0001.jpg" mode=""></image> -->
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0002.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0003.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0004.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0005.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0006.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0007.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/baoxiu/0008.jpg" mode=""></image>
		</view>
		<view class="pdf" v-if="type==3">
			<!-- <image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/tousu/0001.jpg" mode=""></image> -->
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/tousu/0002.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/tousu/0003.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/tousu/0004.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/tousu/0005.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/tousu/0006.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/tousu/0007.jpg" mode=""></image>
		</view>
		<view class="pdf" v-if="type==4">
			<!-- <image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_01.jpg" mode=""></image> -->
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_02.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_03.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_04.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_05.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_06.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_07.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_08.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_09.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/jiaofei/0_10.jpg" mode=""></image>
		</view>
		<view class="pdf" v-if="type==5">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/gongzhonhao/0_1.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/gongzhonhao/0_2.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/gongzhonhao/0_3.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/gongzhonhao/0_4.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/gongzhonhao/0_5.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/gongzhonhao/0_6.jpg" mode=""></image>
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/pdf/gongzhonhao/0_7.jpg" mode=""></image>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	            type:1
			}
		},
		onLoad(options) {
			this.type=options.type;
			console.log(this.type);
			
			
		},
		methods: {
			topdf:function(type){
					this.type=type;
			},
		}
	}
</script>

<style>
	.pdf{
		width: 100vw;
		height: 100vh;
	}
	.pdf>image{
		width: 100%;
		height: 100%;
	}
	
	.pdf1{
		height: 48.61upx;
		line-height: 48.61upx;
		margin-left: 27.77upx;
		color: #666666;
		font-size: 30upx;
	}
	.pdf2{
		width: 708.33upx;
		margin-left:27.77upx;
		display: flex;
		flex-direction: row;
		
	}
	.pdf21{
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		/* color: #FFFFFF; */
		color: #FF6F3C;
		flex: 1;
		border: 1px solid #FF6F3C;
		/* background-color: #FF6F3C; */
		border-radius: 6.94upx;
		text-align: center;
		margin: 13.88upx;
	}
</style>
