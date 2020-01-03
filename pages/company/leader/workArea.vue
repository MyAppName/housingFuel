<template>
	<view class="content">
		<text class="indextop">---房燃小程序</text>
		<view class="item household" @tap="mywork">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/my.png" mode=""></image>
			<text>我的工作</text>
		</view>
		<view class="item Maintenance" @tap="allocation">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/work.png" mode=""></image>
			<text>分配工单</text>
		</view>
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
			console.log('App Show')
		},
		onShow: function() {
			console.log('App Show');

		},
		methods: {
			mywork: function(e) {
				console.log("toHousehold");
				uni.navigateTo({
					url: 'mywork/mywork'
				});

			},
			allocation: function(e) {
				console.log("toHousehold");
				uni.navigateTo({
					url: 'allocation/allocation'
				});
			
			}
		}
	}
</script>

<style>
	.content {
		width: 100vw;
		height: 100vh;
		/* background-color: #4CD964; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	text {
		font-size: 26rpx;
		color: #155263;
	}

	.indextop {
		position: fixed;
		top: 10upx;
		left: 40rpx;
	}

	.content image {
		width: 200upx;
		height: 200upx;
		margin-top: 30upx;

	}

	.item {
		width: 320upx;
		height: 320upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0px 0px 10px 5px #aaa;
	}

	.item text {
		margin-top: 20upx;
	}

	.household {
		margin-bottom: 55upx;
	}

	.Maintenance {
		margin-top: 55upx;

	}
</style>
