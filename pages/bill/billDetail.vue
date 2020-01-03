<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">查看账单详情</text>
		</view>
		<view class="line"></view>
		<view class="ul">
			<view class="li1">
				<view class="li1_l">
					<text class="key">日期:</text><text class="value">2019-10-11</text>
				</view>
			
			</view>
			<view class="li2">
				<text class="key">时间:</text><text class="value">09:46</text>
			</view>
			<view class="li3">
				<text class="key">维修类型:</text><text class="value">暖气漏水</text>
			</view>
			<view class="li4">
				<text class="key">维修描述:</text><text class="value">无</text>
			</view>
			<view class="li5">
				<text class="key">维修地点:</text><text class="value">北京朝阳</text>
				
			</view>
			<view class="li6">
				<text class="key">维修费用合计:</text><text class="money">145元（已包含人工费30）</text>
				
			</view>
		</view>
		<button type="button" class="button">我有疑问 </button>
	</view>
</template>

<script>
</script>

<style>
	.nav {
		margin:10px 41.66upx;
	}
	.key{
		font-size: 26upx;
		color: #666666;
	}
	.value{
		font-size: 26upx;
		color: #333333;
		margin-left: 13.88upx;
	}
	.content>view{
		width: 666.66upx;
		margin-left: 41.66upx;
	}
	.ul{
		/* height: 333.33upx; */
		border: 1upx solid #FF6F3C;
		border-radius: 6.94upx;
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
		font-size: 26upx;
		color: #ff9a3c;
	}
	.li5{
		height: 75upx;
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
		font-size: 26upx;
		color: #ff6d24;
		margin-left: 6.94upx;
	}
	.button{
		width: 40%;
		height: 70upx;
		font-size: 26upx;
		color: #ff6f3c;
		border:2.08upx solid #ff6f3c;
		border-radius: 35rpx;
		line-height: 70upx;
		position: fixed;
		top: 65%;
		left: 30%;
	}
</style>
