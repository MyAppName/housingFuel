<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">查看历史缴费单</text>
		</view>
		<view class="line"></view>
		<view class="ul" @tap="detail">
			<view class="li1">
				<view class="li1_l">
					<text class="key">收费编号:</text><text class="value">20191011</text>
				</view>
			
			</view>
			<view class="li2">
				<text class="key">用热地点:</text><text class="value">北京朝阳</text>
			</view>
			<view class="li3">
				<text class="key">用热面积:</text><text class="value">48平方米（m*2）</text>
			</view>
			<view class="li4">
				<text class="key">当季供暖费:</text><text class="value">1174.23元</text>
			</view>
			<view class="li5">
				<text class="key">供暖费欠费:</text><text class="value">0元</text>
				
			</view>
			<view class="ulline">
				
			</view>
			<view class="li6">
				<text class="key">需缴供暖费用合计:</text><text class="money">1174.23元（已包供暖费欠费0元）</text>
				
			</view>
		</view>
		<!--  -->
		<view class="ul">
			<view class="li1">
				<view class="li1_l">
					<text class="key">收费编号:</text><text class="value">20191011</text>
				</view>
			
			</view>
			<view class="li2">
				<text class="key">用热地点:</text><text class="value">北京朝阳</text>
			</view>
			<view class="li3">
				<text class="key">用热面积:</text><text class="value">48平方米（m*2）</text>
			</view>
			<view class="li4">
				<text class="key">当季供暖费:</text><text class="value">1174.23元</text>
			</view>
			<view class="li5">
				<text class="key">供暖费欠费:</text><text class="value">0元</text>
				
			</view>
			<view class="ulline">
				
			</view>
			<view class="li6">
				<text class="key">需缴供暖费用合计:</text><text class="money">1174.23元（已包供暖费欠费0元）</text>
				
			</view>
		</view>
		<!--  -->
			</view>
</template>

<script>
	let constUrl;
	export default{
		data(){
			return{
					openId:"",
					canIUse: wx.canIUse('button.open-type.getUserInfo')
			}
		
		},
		onLoad(){
			let that=this;
			constUrl=that.$consturl;


			
		},
		methods:{
			detail:function(){
				uni.navigateTo({
					url: 'payDetail'
				});
			},
		}
	}
</script>

<style>
	.nav {
		margin:10px 41.66upx;
	}
	.key{
		font-size: 18.05upx;
		color: #666666;
	}
	.value{
		font-size: 18.05upx;
		color: #333333;
		margin-left: 13.88upx;
	}
	.content>view{
		width: 666.66upx;
		margin-left: 41.66upx;
	}
	.ul{
		/* height: 333.33upx; */
		border: 3.5upx solid #E5E5E5;
		border-radius: 10.41upx;
		margin-top: 27.77upx;
	}
	.ul>view{
		width: 611.11upx;
		margin-left: 27.77upx;
	}
	.li1{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.li1_r>text{
		font-size: 18.05upx;
		color: #155263;
	}
	.li5{
		height: 75upx;
	}
	.ulline{
		width: 569.44upx;
		height: 0.69upx;
		background-color: #E5E5E5;
	}
	.li6{
		
		height: 75upx;
		/* margin-left: 300upx; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		
	}
	.money{
		font-size: 18.05upx;
		color: #155263;
		margin-left: 6.94upx;
	}

</style>
