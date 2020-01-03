<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">账单查看</text>
		</view>
		<view class="line"></view>
		<view class="ul">
			<view class="li">
				<view class="li_info">
					<view class="li_l">
						<view class="li_l1">
							<text class="fontstyle1">2019-10-11 10:53 类型:</text>
							<text class="fontstyle2">暖气漏水</text>
						</view>
						<view class="li_l2">
							<text class="fontstyle3">维修费:90元</text>
						</view>
					</view>
					<view class="li_r">
						<text class="fontstyle4" @tap="click()">查看详情</text>
					</view>
				</view>
			</view>
			<view class="li">
				<view class="li_info">
					<view class="li_l">
						<view class="li_l1">
							<text class="fontstyle1">2019-10-11 10:53 类型:</text>
							<text class="fontstyle2">暖气漏水</text>
						</view>
						<view class="li_l2">
							<text class="fontstyle3">维修费:90元</text>
						</view>
					</view>
					<view class="li_r">
						<text class="fontstyle4"  @tap="click()">查看详情</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		},
		onLoad(options) {
			console.log(this.islogin);
		},
		methods: {
			click: function(e) {
				uni.navigateTo({
					url: 'billDetail'
				});
			}
		}
	}
</script>

<style>
	.content{
		width: 100vw;
		height: 100vh;
	}
	.content>view{
		width: 666.66upx;
		margin-left: 41.66upx;
	}
	.nav {
		margin:10px 41.66upx;
	}
	.li{
		border-radius:10.41upx;
		border: 3upx solid #FF6F3C;
		margin-top: 27.77upx;
	}
	.li_info{
		width: 611.11upx;
		/* height: 55.55upx; */
		/* border: 0.69upx solid #007AFF; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 27.77upx;
	}
	.li_l1{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.li_r{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.fontstyle1{
		font-size: 24upx;
		color: #cccccc;
		letter-spacing: 0.69upx;
	}
	.fontstyle2{
		font-size: 26upx;
		color: #cccccc;
		margin-left: 6.94upx;
		letter-spacing: 0.69upx;
	}
	.fontstyle3{
		font-size: 28upx;
		color: #155263;
		letter-spacing: 0.69upx;
	}
	.fontstyle4{
		font-size: 24upx;
		color: #155263;
	}
	
</style>
