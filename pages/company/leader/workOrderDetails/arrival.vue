<template>
	<view class="company">
		<view class="head">
			查看工单详情
		</view>
		<view class="Line"></view>
		<view class="orderList">
				<view class="place">
					<view class="placeL">
						<image class="placeL_image" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/place.png" mode=""></image>
						<view class="placeL_info">
							<view>
								<text>李爱国</text>
								<text>10086</text>
							</view>
							<view class="">
								<text>北京丰台</text>
							</view>
						</view>
					</view>
					<view class="placeR">
						评价结算中
					</view>
				</view>
				<view class="cause ">
					<view class="orderList_line"></view>
					<view class="causePhotos">
						<image class="causePhoto" src="" mode=""></image>
						<image class="causePhoto" src="" mode=""></image>
					</view>
					<view class="describe" style="margin-top: 20.83upx;">
						<text class="subject">问题类型:</text>
						<text>暖气漏水</text>
					</view>
					<view class="describe" style="margin-top: 20.83upx;">
						<text class="subject">下单日期:</text>
						<text>2019/10/14 1：13</text>
					</view>
					<view class="describe">
						<text class="subject" style="margin-top:31.94upx;">问题描述:</text>
						<view class="voiceBtn" style="margin-top: 20.83upx;margin-bottom: 27.77upx;">
							<image class="voiceImage" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/voice.png" mode=""></image>
							<text>a</text>
						</view>
					</view>
				</view>
			</view>
			<button type="" class="btn">我已到达维修地点</button>
		</view>
</template>

<script>
</script>

<style>

	.orderList{
		width: 666.66upx;
		border: 3upx solid #FF6F3C;
		border-radius: 10.41upx;
		margin-left: 41.66upx;
		margin-top: 27.77upx;
		margin-bottom: 20.83upx;
	}
	/* .orderList:nth-child(2){
		margin-top: 27.77upx;
	} */
	.place{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.placeL{
		display: flex;
		flex-direction: row;
	}
	.placeL_image{
		width: 27.77upx;
		height: 27.77upx;
		margin-left: 27.77upx;
		margin-top: 41.66upx;
		margin-bottom: 41.66upx;
	}
	.placeL_info{
		/* display: flex;
		flex-direction: row; */
		margin-left: 27.77upx;
		margin-top: 31.94upx;
		font-size: 18.05upx;
		color: #333333;
	}
	.placeR{
		font-size: 18.05upx;
		color: #333333;
		margin-top: 41.66upx;
		margin-right: 27.77upx;
		color: #FF6F3C;
	}
	.orderList_line{
		width: 625upx;
		height: 1upx;
		background-color: #E5E5E5;
		margin-left: 20.83upx;
	}
	.cause{
		margin-left: 27.77upx;
	}
	.causePhotos{
		width: 611.11upx;
		display: flex;
		flex-direction: row;
			margin-top: 27.77upx;
	}
	.causePhoto{
		width: 104.16upx;
		height: 104.16upx;
		border-radius: 10.41upx;
		border: 1px solid #007AFF;
	}
	.causePhoto:nth-child(2){
		margin-left: 20.83upx;
	}
	.describe{
		font-size: 18.05upx;
		color: #333333;
		display: flex;
		flex-direction: row;
		
	}
	.voiceBtn{
		width: 138.88upx;
		height: 41.66upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 34.72upx;
		border: 1px solid #FF6F3C;
	}
	.voiceImage{
		width: 20.83upx;
		height: 20.83upx;
		margin-left: 20.83upx;
	}
	.voiceBtn>text{
		margin-left: 13.88upx;
	}
	
	.btn{
		width: 333.33upx;
		height: 69.44upx;
		font-size: 18.05upx;
		background-color: #FF6F3C;
		color:#FFFFFF ;
		position: fixed;
		bottom:138.88upx;
		left:200upx;
		border-radius: 34.72upx;
		line-height:69.44upx ;
		
	}
</style>
