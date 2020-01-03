<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">查看账单详情</text>
		</view>
		<view class="line"></view>
		<view class="ul" v-for="(bill,billIndex) in bills">
			<view class="li1">
				<view class="li1_l">
					<text class="key">用户:</text><text class="value">{{user.name}}</text>
				</view>
			</view>
			<view class="li2">
				<text class="key">住户编号:</text><text class="value">{{user.userCode}}</text>
			</view>
			<view class="li2">
				<text class="key">地区:</text><text class="value">{{user.area}}</text>
			</view>
			<view class="li2">
				<text class="key">用热地点:</text><text class="value">{{user.address}}</text>
			</view>
			
	<!-- 		<view class="li3">
				<text class="key">单价:</text><text class="value">{{user.unitPrice}}/平方米（m*2）</text>
			</view> -->
			<view class="li4">
				<text class="key">当季供暖费:</text><text class="value">{{bill.b_billAmount/100}}元</text>
			</view>
			<view class="li4">
				<text class="key">供暖时间:</text><text class="value">{{bill.b_heatS}}年</text>
			</view>
			<!-- <view class="li5">
				<text class="key">供暖费欠费:</text><text class="value">999元</text>
			</view> -->
			<view class="ulline">
			</view>
			<view class="li6">
				<text class="key">需缴供暖费用合计:</text><text class="money">{{bill.b_billAmount/100}}元</text>
				
			</view>
		</view>
		<button type="button" class="button" @tap="toPay">去缴费 </button>
		<!-- <button type="button" class="viewHistory" @tap="viewHistory">查看历史缴费单 </button> -->
		
	</view>
</template>

<script>
	let constUrl;
	export default{
		data(){
			return{
					openId:"",
					userPWord:"",
					userCode:"",
					msg:null,
					bills:null,
					user:null,
					canIUse: wx.canIUse('button.open-type.getUserInfo')
			}
		
		},
		onLoad(){
			let that=this;
			constUrl=that.$consturl;
			that.openId=uni.getStorageSync("openid");
			uni.request({
				url:"https://www.ccweb.xyz/gas/wx/api/getUserinfo",
				data:{
					openid:that.openId, 
				},
				success:function(res){
					let dat=res.data.data;
					console.log(res.data.data);
					that.userCode=dat.username;
					that.userPWord=dat.passwd;
				}
			});
			uni.showLoading({
			    title: '账单查询中'
			});
			
		},
		onShow:function(){
			// this.address=uni.getStorageSync("adress");
			let that=this;
			setTimeout(function(){
				uni.request({
					url:"https://www.ccweb.xyz/gas/wx/api/sfapi",
					data:{
						userCode:that.userCode,
						userPWord:that.userPWord,
						tradeCode:"0001",
					},
					header: {
						    'Content-Type': 'application/x-www-form-urlencoded'
						     },
					method: 'POST',
					success:function(res){
						that.bills=res.data.info[0].bills;
						that.user=res.data.info[0].user[0];
						console.log(res.data);
						uni.hideLoading();
					
					}
				})
			},500);
			
		},
		methods:{
			toPay:function(){
				uni.navigateTo({
					url: 'payment'
				});
			},
			viewHistory:function(){
				uni.navigateTo({
					url: 'viewHistory'
				});
			}
		}
	}
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
		border: 3.5upx solid #FF6F3C;
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
		font-size: 26upx;
		color: #ff9a3c;
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
		font-size: 26upx;
		color: #ff6d24;
		margin-left: 6.94upx;
	}
	.button{
		width: 40%;
		height: 70upx;
		font-size: 26upx;
		color: #FFFFFF;
		background-color: #FF6F3C;
		border-radius: 35rpx;
		line-height: 70upx;
		position: fixed;
		top: 65%;
		left: 30%;
		
	}
	.viewHistory{
		width: 40%;
		height: 70upx;
		font-size: 26upx;
		color: #ff6f3c;
		border:2.08upx solid #ff6f3c;
		border-radius: 35rpx;
		line-height: 70upx;
		position: fixed;
		top: 75%;
		left: 30%;
	}
	
</style>
