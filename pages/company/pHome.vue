<template>
	<view class="company">
		<view class="head">
			我的工作区
		</view>
		<view class="notice">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
				<swiper-item v-for="(item,index) in getBulltin" :key="index">
					<view class="swiper-item sswiper-item" >
						<!-- <image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/tu1.png" mode=""></image> -->
						<image :src="item.backimgurl" mode=""></image>
						<view class="neirong">
							<text>{{item.title}}</text>
							<view v-html="item.content" style="overflow: scroll;"></view>
						</view>
						
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="body">
			<image class="answerMain" @tap="toPartyBuild" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/answerMain.png" mode=""></image>
			<view class="mywork" @tap="click">
				<view class="myworkL">
					<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/mywork.png" mode=""></image> 
					<text>我要注销</text>
				</view>
				<view class="myworkLine">
					
				</view>
				<view class="myworkR">
					<!-- <view class="complete Complete">
						<view class="state">
							已完成
						</view>
						<view class="number">
							{{ServiceNum.wz_size}}
						</view>
					</view>
					<view class="complete notComplete">
						<view class="state">
							未完成
						</view>
						<view class="number">
							{{ServiceNum.db_size}}
						</view>
					</view> -->
				</view>
				
			</view>
			<!-- 订单列表 -->
			<view class="orderList" v-if="ServiceNum!=''">
				<view class="place">
					<view class="placeL">
						<image class="placeL_image" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/place.png" mode=""></image>
						<view class="placeL_info">
							<view>
								<text>李XX</text>
								<text>182XXXXXXXXXXX</text>
							</view>
							<view class="">
								<text>北京市XX区</text>
							</view>
						</view>
					</view>
					<view class="placeR">
						评价结算中
					</view>
				</view>
				<view class="cause ">
					<view class="orderList_line"></view>
					<view class="causePhotos">
						<image class="causePhoto" src="" mode=""></image>
						<image class="causePhoto" src="" mode=""></image>
					</view>
					<view class="describe" style="margin-top: 20.83upx;">
						<text class="subject">问题类型:</text>
						<text>暖气漏水</text>
					</view>
					<view class="describe">
						<text class="subject" style="margin-top:31.94upx;">问题描述:</text>
						<view class="voiceBtn" style="margin-top: 20.83upx;margin-bottom: 27.77upx;">
							<image class="voiceImage" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/voice.png" mode=""></image>
							<text>a</text>
						</view>
					</view>
				</view>
			</view>
			<view class="orderList" v-if="openid==''" style="text-align: center;" @tap="registe">
				您未登录
				<view class="">
					请点击登录
				</view>
			</view>
			<view class="img">
				<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/tu1.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	let consturl;
	export default {
		data() {
			return {
			   ServiceNum:"",
			   openid:"",
			   getBulltin:""
			}
		},
		onLoad(options) {
			let ts=this;
			ts.openid=uni.getStorageSync("openid")
			// let ts=this,id=uni.getStorageSync("openid");
			// consturl=ts.$consturl;
			// ts.openid=id;
			// if(ts.openid!=""&&ts.openid!=null&&ts.openid!=undefined){
			// uni.request({
			// 	url: consturl + "wx/api/ServiceNum", //
			// 	data: {
			// 		openid:ts.openid
			// 	},
			// 	success: function (res) {
			// 			console.log(ts.ServiceNum=res.data.data);
			// 	},
			// 	complete:function(){
			// 		console.log("complete");
			// 	}
			// });
			// }
			// 获取工作人员的公告信息
			uni.request({
				url: "https://www.ccweb.xyz/gas/wx/api/getBulltin", //
				data: {
					type:"staff"
				},
				success: function (res) {
						console.log(res.data);
						ts.getBulltin=res.data.data;
						// console.log(data);
				},
				complete:function(){
					// console.log("complete");
				}
			});
		},
		methods: {
			// 检查是否登录
			toPartyBuild:function(){
				if(this.openid!=''&&this.openid!=undefined){
					uni.navigateTo({
					    url: '../partyBuild/selector'
					});
				}else{
					uni.showToast({
					    title: '检查是否登录',
					    duration: 1000
					});
				}
				
			},
			// 去注册
			registe:function(){
				uni.navigateTo({
				    url: 'register/register'
				});
				return  false;
			},
			// 是否注销账号
			click: function(e) {
				uni.showModal({
				    title: '提示',
				    content: '是否注销账号',
				    success: function (res) {
				        if (res.confirm) {
				            uni.setStorageSync("openid","");
							uni.setStorageSync("identity","");
							uni.navigateTo({
								url:"../index/index"
							});
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style>
	.img>image{
		width: 100vw;
	}
	
	.notice{
		width: 750upx;
		height: 319.44upx;
		// background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAHMCAIAAAC/SY9wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACHxJREFUeNrs2rsNhDAURUEWbD7BUhEZ7WwRFEEX1EBGIZRCA0TY0hppJn8ENzsyn3NbKgAAgJLUJgAAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAAAAQgUAAHiXkHL82w8LAgAAt9Z5enzrRQUAACiOUAEAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAAIQKAADAv4WM32q/fTf2NgUAAAoKlSbWcYg2BQAAEvn1CwAAECoAAABCBQAAECoAAABCBQAAECoAAABCBQAAECoAAABCBQAAQKgAAABCBQAAQKgAAABCBQAAQKgAAABCBQAAQKgAAABCBQAAQKgAAAAIFQAAQKgAAAAIFQAAQKgAAAAIFQAAQKgAAAAIFQAAAKECAAAIFQAAAKECAAAIFQAAAKECAAAIFQAAAKECAAAIFQAAAKECAAAgVAAAAKECAAAgVAAAAKECAAAgVAAAAKECAAAgVAAAAIQKAAAgVAAAAIQKAAAgVAAAAIQKAAAgVAAAAIQKAAAgVAAAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAAAAQgUAABAqAAAAQgUAABAqAAAAQgUAABAqAAAAQgUAAECoAAAAQgUAAECoAAAAQgUAAECoAAAAQgUAAECoAAAAQgUAAECoAAAACBUAAECoAAAACBUAAECoAAAACBUAAECoAAAACBUAAAChAgAACBUAAAChAgAACBUAAAChAgAACBUAAAChAgAACBUAAAChAgAAIFQAAAChAgAAIFQAAAChAgAAIFQAAAChAgAAIFQAAACECgAAIFQAAACECgAAIFQAAACECgAAIFQAAACECgAAIFQAAACECgAAgFABAACECgAAgFABAACECgAAgFABAACECgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAAEIFAAAQKgAAAEIFAAAQKgAAAEIFAAAQKgAAAEIFAAAQKiYAAACECgAAgFABAACECgAAgFABAACECgAAgFABAACECgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAAEIFAAAQKgAAAEIFAAAQKgAAAEIFAAAQKgAAAEIFAABAqAAAAEIFAABAqAAAAEIFAABAqAAAAEIFAABAqAAAAEIFAABAqAAAAAgVAABAqAAAAAgVAABAqAAAAAgVAABAqAAAAAgVAAAAoQIAAAgVAAAAoQIAAAgVAAAAoQIAAAgVAAAAoQIAAAgVAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAAIBQAQAAhAoAAIBQAQAAhAoAAIBQAQAAhAoAAIBQAQAAECoAAIBQAQAAECoAAIBQAQAAECoAAIBQAQAAECoAAIBQAQAAECoAAABCBQAAECoAAABCBQAAECoAAABCBQAAECoAAABCBQAAQKgAAABCBQAAQKgAAABCBQAAQKgAAABCBQAAQKgAAABCBQAAQKgAAAAIFQAAQKgAAAAIFQAAQKgAAAAIFQAAQKgAAAAIFQAAAKECAAAIFQAAAKECAAAIFQAAAKECAAAIFQAAAKECAAAIFQAAAKECAAAgVAAAAKECAAAgVAAAAKECAAAgVAAAAKECAAAgVAAAAIQKAAAgVAAAAIQKAAAgVAAAAIQKAAAgVAAAAIQKAAAgVAAAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAAIQKAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAACAUAEAABAqAAAAQgUAABAqAAAAQgUAABAqAAAAQgUAABAqAAAAQgUAABAqAAAAQgUAAECoAAAAQgUAAECoAAAAQgUAAECoAAAAQgUAAECoAAAACBUAAECoAAAACBUAAECoAAAACBUAAECoAAAACBUAAECoAAAACBUAAAChAgAACBUAAAChAgAACBUAAAChAgAACBUAAAChAgAAIFQAAAChAgAAIFQAAAChAgAAIFQAAAChAgAAIFQAAAChAgAAIFQAAACECgAAIFQAAACECgAAIFQAAACECgAAIFQAAACECgAAgFABAACECgAAgFABAACECgAAgFABAACECgAAgFABAACECgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAgFABAAAQKgAAAEIFAAAQKgAAAEIFAAAQKgAAAEIFAAAQKgAAAEIFAAAQKgAAAEIFAABAqAAAAEIFAABAqAAAAEIFAABAqAAAAEIFAABAqAAAAAgVAABAqAAAAAgVAABAqAAAAAgVAABAqAAAAAgVAABAqAAAAAgVAAAAoQIAAAgVAAAAoQIAAAgVAAAAoQIAAAgVAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAACBUTAAAAAgVAAAAoQIAAAgVAAAAoQIAAAgVAAAAoQIAAAgVAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAAJBXSDle58mCAABAdl5UAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAACBUAAAAoQIAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAACBUAAAAhAoAAIBQAQAAXuYSYAD1PQoTh3f2dQAAAABJRU5ErkJggg==");
		background-size: 100%;
	}
	.sswiper-item{
			 width: 750upx;
			 height: 319.44upx;
			 position: relative;
			 overflow: hidden;
	}
	.sswiper-item>image{
			 width: 100%;
			 height: 100%;
			 position: absolute;
			 top: 0;
			 left: 0;
	}
	.neirong{
			 position: absolute;
			 top: 0;
			 left: 0;
		
	}
	.answerMain, .mywork, .orderList{
		margin-left: 41.66upx;
	}
	.answerMain{
		width: 666.66upx;
		height: 111.11upx;
		margin-top: 27.77upx;
		border-radius: 34.72upx;
	}
	.mywork{
		width: 666.66upx;
		height: 152.77upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
	.myworkLine{
		width: 1upx;
		height: 70%;
		background-color: #CCCCCC;
	}
	.myworkL{
		width: 277.77upx;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.myworkL>image{
		width: 41.66upx;
		height: 41.66upx;
		margin-left: 27.77upx;
	}
	.myworkL>text{
		font-size: 26upx;
		color: #155263;
		margin-left: 20.83upx;
	}
	.myworkR{
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.complete{
		text-align: center;
	}
	.Complete{margin-left: 88.19upx;}
	.notComplete{margin-left: 118.05upx;}
	.state{font-size: 16.66upx;color: #CCCCCC;}
	.number{font-size: 22.22upx;color: #333333;}
	/*  */
	.orderList{
		width: 666.66upx;
		border: 3upx solid #FF6F3C;
		border-radius: 10.41upx;
	}
	.place{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.placeL{
		display: flex;
		flex-direction: row;
	}
	.placeL_image{
		width: 27.77upx;
		height: 27.77upx;
		margin-left: 27.77upx;
		margin-top: 41.66upx;
		margin-bottom: 41.66upx;
	}
	.placeL_info{
		/* display: flex;
		flex-direction: row; */
		margin-left: 27.77upx;
		margin-top: 31.94upx;
		font-size: 24upx;
		color: #333333;
	}
	.placeR{
		font-size: 24upx;
		color: #333333;
		margin-top: 41.66upx;
		margin-right: 27.77upx;
		color: #FF6F3C;
	}
	.orderList_line{
		width: 625upx;
		height: 1upx;
		background-color: #E5E5E5;
		margin-left: 20.83upx;
	}
	.cause{
		margin-left: 27.77upx;
		display: none;
	}
	.causePhotos{
		width: 611.11upx;
		display: flex;
		flex-direction: row;
			margin-top: 27.77upx;
	}
	.causePhoto{
		width: 104.16upx;
		height: 104.16upx;
		border-radius: 10.41upx;
		border: 1px solid #007AFF;
	}
	.causePhoto:nth-child(2){
		margin-left: 20.83upx;
	}
	.describe{
		font-size: 24upx;
		color: #333333;
		display: flex;
		flex-direction: row;
		
	}
	.voiceBtn{
		width: 138.88upx;
		height: 41.66upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 34.72upx;
		border: 1px solid #FF6F3C;
	}
	.voiceImage{
		width: 20.83upx;
		height: 20.83upx;
		margin-left: 20.83upx;
	}
	.voiceBtn>text{
		margin-left: 13.88upx;
	}
	.orderList:hover .cause{
		display: inline-block;
	}
	
</style>
