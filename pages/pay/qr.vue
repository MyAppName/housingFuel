<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">缴费支付</text>
		</view>
		<view class="line"></view>
		<!-- <text class="title"></text> -->
		<view class="userword">
			<text class="title">姓名(name):</text><text>{{user.name}}</text>
		</view>
		<!-- <text class="title">userCode</text> -->
		<view class="userword password">
			<!-- <image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/pay/password.png" mode=""></image>
			<input type="password" value=""  placeholder="验证码" @input="savePsword"/> -->
			<text class="title">用户编码(userCode):</text><text>{{user.userCode}}</text>
		</view>
		<view class="userword">
			<text class="title">地区(area):</text><text>{{user.area}}</text>
		</view>
		<view class="userword">
			<text class="title">地址(address):</text><text>{{user.address}}</text>
		</view>

	<!-- 	<view class="userword">
			<text class="title">单价(unitPrice):</text><text>{{user.unitPrice}}</text>
		</view> -->
		<!-- <button type="" class="topay" @tap="toPay">我要支付</button> -->
		<view class="QR"><image :src="wxqrcode" mode="" @tap="preview"></image></view>
		<!-- <view class="QR">{{wxqrcode}}</view> -->
		<!-- <view class="proposalBt" @tap="click()">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/pay/callPhone.png" mode=""></image>
			<text style="color: #FFFFFF;">呼叫</text>
		</view> -->
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
					user:""
			}
		
		},
		onLoad(options){
			// uni.showToast({
			//     title: '数据请求中',
			//     duration: 1000
			// });
			uni.showLoading({
			    title: '数据请求中'
			});    
			let that=this;
		    that.openId=uni.getStorageSync("openid");
			that.userPWord=options.userPWord;
			that.userCode=options.userCode;
			uni.request({
				url:"https://www.ccweb.xyz/gas/wx/api/sfapi",
				data:{
					// userPWord:that.userPWord,
					// userCode:that.userCode,
					userPWord:that.userPWord,
					userCode:that.userCode,
					tradeCode:"0001",
				},
				header: {
					    'Content-Type': 'application/x-www-form-urlencoded'
					     },
				method: 'POST',
				success:function(res){
					uni.hideLoading();
					that.msg=res.data.info[0].bills[0].b_url;
					that.user=res.data.info[0].user[0];
					that.wxqrcode = wxqrcode.createQrCodeImg(that.msg, {  
					     size: parseInt(180)//二维码大小  
					})
					// console.log(that.msg);
					// console.log(user);
					// console.log(res.data);
				}
			});
			
			
		},
		onShow:function(){
			let that=this;
			uni.request({
				url:"https://www.ccweb.xyz/gas/wx/api/setTripartiteinfo",
				data:{
					tripartitePasswd:that.userPWord,
					tripartiteName:that.userCode,
					openid:that.openId, 
				},
				header: {
					    'Content-Type': 'application/x-www-form-urlencoded'
					     },
				method: 'POST',
				success:function(res){
					console.log(res);
				}
			})
		},
		methods:{
			preview:function(){
				let a=[];
				a.push(this.wxqrcode);
				uni.previewImage({
					current: 0,
					urls:a 
				})
			},
			// saveUsname:function(e){
			// 	this.userCode=e.detail.value;
			// 	console.log(this.userCode);
			// },
			// savePsword:function(e){
			// 	this.userPWord=e.detail.value;
			// 	console.log(this.userPWord);
			// },
			// toPay:function(){
			// 	let that=this;
			// 	console.log(that.userPWord);
			// 	console.log(that.userCode);
			// 	if(that.userPWord!=""&&that.userCode!=""){
					
			// 	}
			// },
			click:function(){
				uni.makePhoneCall({
				    phoneNumber: '010-81337279' //仅为示例
				});
			},
		
		}
	}
</script>

<style>
	.nav {
		margin:10px 41.66upx;
	}
	.title, .userword{
		margin-left: 41.66upx;
	}
	.title{
		font-size: 16.66upx;
		color: #CCCCCC;
	}
	.userword{
		width: 666.66upx;
		height: 69.44upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 3upx solid #E5E5E5;

	}
	.userword>image{
		width: 34.72upx;
		height: 34.72upx;
		margin-left: 27.77upx;
		
	}
	.userword>text{
		margin-left: 27.77upx;
		font-size: 25upx;
	}
	.topay{
		width: 333.33upx;
		height: 69.44upx;
		font-size: 18.05upx;
		color: #FFFFFF;
		border-radius: 34.72upx;
		background-color: #FF6F3C;
		margin-top: 83.33upx;
		line-height: 69.44upx;
	}
	.QR{
		display: flex;
		justify-content: center;
		margin-top: 100upx;
	}
	/* .proposalBt{
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
	} */
</style>
