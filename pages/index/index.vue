<template>
	<view class="content">
			<text class="indextop">---房燃小程序</text>
		<view class="item household" @tap="toHousehold()">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/household.png" mode=""></image>
			<text>用户登录</text>
		</view>
		<view class="btn" v-if="isBtn==false">
			<button wx:if="canIUse" open-type="getUserInfo" @tap="bindgetuserinfo">授权登录</button>
			<view wx:else>请升级微信版本</view>
		</view>
		<view class="item Maintenance" @tap="toCompany()">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/Maintenance.png" mode=""></image>
			<text>供热员工登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				isBtn:false
			}
		},
		onLoad() {
			// console.log(this.$datas);
			let id =uni.getStorageSync("openid"),ts=this;
			if(id==""){
				ts.isBtn=false;
			}
			if(id!=""){
				ts.isBtn=true;
			}
		},
		onShow: function() {
			// console.log('App Show');
			
		},
		methods: {
			bindgetuserinfo:function(e){
				// this.isBtn=true;
					this.isBtn=true;
				console.log(e);
				// console.log("bindGetUserInfo");
			},
			// btnbtn:function(){
			
			// },
			toHousehold: function(e){
				let ts=this;
			// console.log("toHousehold");	
			if(ts.isBtn){
				uni.redirectTo({
					url: 'main'
				});
			}else{
					uni.showToast({
					    title: '请先点击授权按钮哦',
						icon:"",
					    duration: 1000
					})
				}
			
	
	},
	        toCompany:function(){
				let ts=this;
				if(ts.isBtn){
					uni.redirectTo({
					url: '../company/pHome'
					});
				}else{
					uni.showToast({
					    title: '请先点击授权按钮哦',
						icon:"",
					    duration: 1000
					})
				}
			}
		}
	}
</script>

<style>
	.content{
		width: 100vw;
		height: 100vh;
		/* background-color: #4CD964; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	text{
		font-size: 32rpx;
		color: #155263;
	}
	.indextop{
		position: fixed;
		top: 70upx;
		left: 40rpx;
		font-size: 34.72upx !important;
	}
	.content image{
		width:200upx;
		height: 200upx;
		margin-top: 30upx;
		
	}
	.item{
		width:320upx;
		height:320upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0px 0px  10px 5px #aaa;
	}
	.item text{
		margin-top: 20upx;
		font-size: 30upx;
	}
	.household{
		margin-bottom: 55upx;
	}
	.Maintenance{
		margin-top: 55upx;
		
	}
	.btn{
		position: fixed;
		top: 41.66upx;
		right: 41.66upx;
	}
</style>
