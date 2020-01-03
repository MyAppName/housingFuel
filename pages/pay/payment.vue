<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">缴费支付</text>
		</view>
		<view class="line"></view>
		<text class="title">住户编号</text>
		<view class="userword">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/pay/userName.png" mode=""></image>
			<input type="number" :value="userCode"  placeholder="请输入您的住户编号" @input="saveUsname" placeholder-style="color:#cccccc"/>
		</view>
		<text class="title">验证码</text>
		<view class="userword password">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/pay/password.png" mode=""></image>
			<input type="password" :value="userPWord"  placeholder="验证码" @input="savePsword" placeholder-style="color:#cccccc"/>
		</view>
		<button type="" class="topay" @tap="toPay">{{isispay}}</button>
		<view class="QR"><image :src="wxqrcode" mode=""></image></view>
		<!-- <view class="QR">{{wxqrcode}}</view> -->
		<view class="proposalBt" @tap="click()">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/pay/callPhone.png" mode=""></image>
			<text style="color: #FFFFFF;font-size: 26upx;">呼叫</text>
		</view>
	</view>
</template>

<script>
	import wxqrcode from "@/components/wxqrcode.js"
	export default{
		data(){
			return{
					openId:"",
					userPWord:"",
					userCode:"",
					msg:null,
					wxqrcode:null,
					isispay:"我要支付"
			}
		
		},
		onLoad(){
			let that=this;
		    that.openId=uni.getStorageSync("openid");
			uni.request({
				url:"https://www.ccweb.xyz/gas/wx/api/getUserinfo",
				data:{
					openid:that.openId, 
				},
				success:function(res){
					let dat=res.data.data;
					console.log(dat);
					that.userCode=dat.username;
					that.userPWord=dat.passwd;
				}
			})
		},
		methods:{
			saveUsname:function(e){
				
				this.userCode=e.detail.value;
				console.log(this.userCode);
			},
			savePsword:function(e){
				this.userPWord=e.detail.value;
				console.log(this.userPWord);
			},
			toPay:function(){
				let that=this,l=that.userCode.length;
				console.log(l);
				if(that.userPWord!=""&&l==10&&that.userCode!=""){
					// uni.showToast({
					// 	icon:"loading",
					//     title: '请耐心等待几秒钟',
					//     duration: 1000
					// });
					uni.showLoading({
					    title: '加载中'
					});
					uni.request({
						url:"https://www.ccweb.xyz/gas/wx/api/sfapi",
						data:{
							// userPWord:that.userPWord,
							// userCode:that.userCode,
							userCode:that.userCode,
							userPWord:that.userPWord,
							tradeCode:"0001",
						},
					
						header: {
							    'Content-Type': 'application/x-www-form-urlencoded'
							     },
						method: 'POST',
						success:function(res){
							let a=that.userCode,b=that.userPWord;
							console.log(res);
							console.log(that.userCode);
							console.log(that.userPWord);
							uni.navigateTo({
								url:"qr?userPWord="+that.userPWord+"&userCode="+that.userCode,
								// url:"webview?userPWord="+b+"&userCode="+a,
							})
						}
					})
					
				}else{
					uni.showToast({
						icon:"none",
					    title: '用户编码或验证码不符合规范，请重新检查',
					    duration: 3000
					});
				}
			},
			click:function(){
				uni.makePhoneCall({
				    phoneNumber: '010-81337279' //仅为示例
				});
			},
		
		}
	}
</script>

<style>
	.nav{
		margin:10px 41.66upx;
	}
	.title, .userword{
		margin-left: 41.66upx;
	}
	.title{
		margin-top: 27.77upx;
		font-size: 16.66upx;
		color: #CCCCCC;
	}
	.userword{
		width: 666.66upx;
		height: 69.44upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 3upx solid #E5E5E5;
		border-radius: 6.94upx;
		margin-top: 20.83upx;
	}
	.userword>image{
		width: 34.72upx;
		height: 34.72upx;
		margin-left: 27.77upx;
		
	}
	.userword>input{
		margin-left: 27.77upx;
		font-size: 25upx;
		/* color: #CCCCCC; */
	}
	.topay{
		width: 333.33upx;
		height: 69.44upx;
		font-size: 26upx;
		color: #FFFFFF;
		border-radius: 34.72upx;
		background-color: #FF6F3C;
		margin-top: 83.33upx;
		line-height: 69.44upx;
	}
	.QR{
		margin-left: 41.66upx;
	}
	.proposalBt{
		width: 125upx !important;
		height: 125upx;
		background-color: #FF6F3C;
		border-radius: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		right: 48.61upx;
		bottom: 97.22upx;
	}
	
	.proposalBt>image{
		width: 34.72upx;
		height: 34.72upx;
		padding-bottom: 17.36upx;
	}
</style>
