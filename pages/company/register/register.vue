<template>
	<view class="company">
		<view class="head">
			添加您的信息
		</view>
		<view class="Line"></view>
		<view class="body">
		<form @submit="company">
			<text class="title">联系号码</text>
			<view class="list phone">
				<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/register/phone_no.png" mode=""></image>
				<input type="number" value="" placeholder="请输入手机号" name="phoneValue"/>
			</view>
			<text class="title">联系人姓名</text>
			<view class="list phone">
				<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/register/name_no.png" mode=""></image>
				<input type="text" value=""  placeholder="姓名"  name="nameValue"/>
			</view>
			<!-- <text class="title">所属部门</text>
			<view class="list phone">
				<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/register/department_no.png" mode=""></image>
				<input type="text" value=""  name="departmentValue"/>
			</view> -->
			<button type="" class="btn" formType="submit">进入首页</button>
		</form>
		</view>
		
		<!-- <button wx:if="canIUse" open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button>
		<view wx:else>请升级微信版本</view> -->
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
			// console.log(constUrl);
			// console.log("授权");
			uni.showModal({
				title: '提示',
				content:'请授权',
			    success: function(res) {
					// console.log("授权成功");
					wx.login({
					  provider: 'weixin',
					  success: function (loginRes) {
						  // console.log("wx.login成功");
					let code=loginRes.code;
					  wx.getSetting({
					        success (res){
								 // console.log("getSetting成功");
								 // console.log(res.authSetting);
					          if (res.authSetting) {
					            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
					            wx.getUserInfo({
					            success: function(infoRes) {
									   // console.log("getUserInfo成功");
					                // console.log(res.userInfo);
									console.log(infoRes.userInfo);
									let userInfo=infoRes.userInfo,ts=that;
									let urL=constUrl,nickName=userInfo.nickName,city=userInfo.city,avataUrl=userInfo.avatarUrl;
								uni.request({
									url: urL + "wx/user/login", //
									data: {
										code:code,
										nickName:nickName,
										city:city,
										avataUrl:avataUrl
									},
									header: {
											'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
									      },
									method: 'POST',
									success: function (res) {
									console.log(res.data);
									let id=res.data.openid;
									// console.log(id);
									uni.setStorageSync("openid",id);
									// uni.setStorageSync("openid","test");
									uni.setStorageSync("identity",1);
																			// console.log(id);
									console.log(uni.getStorageSync("openid"));
									},
										complete:function(){
									// console.log("complete");
											}
									});
					              },
								  fail:function(){
									  // console.log(若授权失败,请点击授权登录按钮重新登录);
								  }
					            })//info
					          }
					        }
					      });//get
					    }
					});
				},
			
			});
		},
		methods:{
			company:function(e){
				// console.log(e.detail.value);
				let phone=e.detail.value.phoneValue,name=e.detail.value.nameValue, department=e.detail.value.departmentValue;
				let openid=uni.getStorageSync("openid");
				uni.request({
					url: constUrl + "wx/user/checkPhone", //
					data: {
						phone:phone,
						name:name,
						openid:openid
					},
					header: {
							'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
					      },
					method: 'POST',
					success: function (res) {
					let msg=res.data.msg
					
					if(msg=="failed"){
						uni.showModal({
							title: '提示',
							content: '登录失败，是否重新登录',
							success: function(res) {
								if (res.confirm) {
									// uni.redirectTo({
									// 	url: '../index/index'
									// });
								} else if (res.cancel) {
									// console.log('用户点击取消');
									uni.clearStorageSync();
									uni.reLaunch({
										url: '../../home/home'
									});
								}
							}
						});
					}else{
						uni.reLaunch({
						    url: "../pHome"
						});
					}
					},
					fail:function(){
					// console.log("fail");
					
							}
					});
				
			}
		}
	}
</script>

<style>
	.body{
		margin-left: 41.66upx;
	}
	.title{
		font-size: 26upx;
		color: #155263;
		margin: 0;
		margin-top: 27.77upx;
	}
	.list{
		width: 361.11upx;
		height: 69.44upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 3upx solid #E5E5E5;
		border-radius: 6.94upx;
		margin-top:20.83upx;
	}
	.list:hover{
		border: 3upx solid #FF6F3C;
	}
	.list>image{
		margin-left:27.77upx;
		width: 34.72upx;
		height: 34.72upx;
	}
	.list>input{
		margin-left:27.77upx;
		font-size: 26upx;
		color: #FF6F3C;
	}
	.btn{
		width: 333.33upx;
		height: 69.44upx;
		border-radius: 34.72upx;
		color: #FFFFFF;
		background-color: #FF6F3C;
		margin-top: 300upx;
		line-height: 69.44upx;
		font-size: 28upx;
	}
</style>
