<template>
	<view class="content">
		<view class="top">
			<text class="fontcolor">投诉</text>
		</view>
		<view class="line"></view>
		<view class="proposal">
			<text class="fontcolor">请输入投诉原因</text>
			<view class="proposaltext">
				<textarea value="" placeholder="请输入投诉内容" @input="bindinput" placeholder-style="color:#FF6F3C"/>
				<view class="voice">
				<!-- 	<image src="../../static/voice.png" mode=""></image>
					<text>选择语音输入</text> -->
				</view>
			</view>
			<text class="fontcolor">请输入选择地点</text>
			<view class="ul">
				<view class="li">
					<view class="li_info">
						<view class="li_l">
							<view class="li_img">
								<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/place.png" mode=""></image>
							</view>
							<view class="li_text">
								<view class="li_l1">
									<text class="fontstyle1">{{address.name}}</text>
									<text class="fontstyle1">{{address.phone}}</text>
								</view>
								<view class="li_l2">
									<text class="fontstyle1">{{address.region}}{{address.street}}{{address.address}}</text>
								</view>
							</view>
						</view>
						<view class="li_r">
							<text class="fontstyle1" @tap="clickAdress" style="color:#FF6F3C">选择其他地址</text>
						</view>
					</view>
				</view>
			</view>
			<!--  -->
			<button type="" class="bt" @tap="click">提交</button>
		</view>
	</view>
</template>

<script>
	let consturl,valtext,inde;
	export default {
		data() {
			return {
	            address:""
			}
		},
		onLoad(options) {
			let ts = this;
			consturl=ts.$consturl;
			inde=options.ind;
			// console.log(ts.$consturl + "wx/api/setComplaintList");
			ts.address=uni.getStorageSync("adress");
			
			
		},
		onShow:function(){
			// console.log("show");
			this.address=uni.getStorageSync("adress");
		},
		methods: {
			clickAdress:function(){
				
					uni.navigateTo({
						url: '../address/pickOtherAddress'
					});

			},
			bindinput:function(e){
				valtext=e.detail.value;
				console.log(valtext);
			},
			// 投诉 提交
			click: function(e) {
				let that=this;
				 console.log(valtext);
				let openid=uni.getStorageSync("openid"),adress=uni.getStorageSync("adress"),adr;
				// console.log(adress);
				adr=adress.area+"-"+adress.stree+"-"+adress.textarea;
				uni.request({
					url: consturl + "wx/api/Repair", //
					data: {
						remark:valtext,
						openid:openid,
						address:JSON.stringify(adress) ,
						jobtype:123

					},
					header: {
							'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
					      },
					method: 'POST',
					success: function(res) {
						// console.log(res);
						// console.log(adress);console.log(valtext);
					uni.reLaunch({
						url: 'proposal'
					});
					
					},
					fail: function() {
						console.log("fail");
					}
				});
			}
		}
	}
</script>

<style>
	.top{
		margin: 10px 41.66upx !important;
	}
	.content>view{
		margin-left: 41.66upx;
	}
	.proposal{
		width: 666.66upx;
		height: 256.94upx;
	}
	.proposaltext{
		width: 100%;
		height: 100%;
		border-radius: 6.94upx;
		background-color: #f7f7f7;
		position: relative;
		margin-top: 20.83upx;
	}
	textarea{
		font-size: 25upx;
		padding-left: 27.77upx;
		padding-top:27.77upx ;
	}
	.voice{
		width: 208.33upx;
		height: 62.5upx;
		position: absolute;
		right: 27.77upx;
		bottom: 27.77upx;
		background-color: #FFFFFF;
		border-radius: 34.72upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		/* justify-content: center; */
	}
	.voice>image{
		width: 27.77upx;
		height: 27.77upx;
		margin-left: 25upx;
		
	}
	.voice>text{
		font-size: 28upx;
		color: #FF6F3C;
		margin-left: 20.83upx;
	}
	/*  */
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
	.li_l{
		display: flex;
		flex-direction: row;
		align-items: center;
	
	}
	.li_l1{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.li_img{
		width: 34.72upx;
		height: 34.72upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.li_img>image{
		width: 34.72upx;
		height: 34.72upx;
	}
	.li_r{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.fontstyle1{
		font-size: 25upx;
		color: #333;
		letter-spacing: 0.69upx;
		margin-left: 27.77upx;
	}
	.fontstyle2{
		font-size: 25upx;
		color: #cccccc;
		letter-spacing: 0.69upx;
	}
	
	.bt{
		width:333.33upx ;
		height: 69.44upx;
		background-color: #FF6F3C;
		border-radius: 34.72upx;
		color: #FFFFFF;
		margin-top: 263.88upx;
		font-size: 25upx;
		line-height: 69.44upx ;
	}
</style>
