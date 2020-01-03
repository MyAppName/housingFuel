<template>
	<view class="company">
		<view class="head">
			分配工单
		</view>
		<view class="Line"></view>
		<view class="orderList">
				<view class="place" @tap="choosejobNo(88)">
					<view class="placeL">
						<image class="placeL_image" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/place.png" mode=""></image>
						<view class="placeL_info">
							<view>
								<text>李爱国</text>
								<text>10086</text>
							</view>
							<view class="">
								<text>北京丰台</text>
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
		
		<view class="orderList">
				<view class="place">
					<view class="placeL">
						<image class="placeL_image" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/place.png" mode=""></image>
						<view class="placeL_info">
							<view>
								<text>李爱国</text>
								<text>10086</text>
							</view>
							<view class="">
								<text>北京丰台</text>
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
		<view class="seeMembers">
			<view class="memberList">
				<view class="memberItem" @tap="chooseuid('张伟')">
					<image class="memberItem_portrait" src="" mode=""></image>
					<text style="margin-top: 13.88upx;">李志坚</text>
					<text>共有1件委托</text>
				</view>
			</view>
			<view class="seeMember" v-if="jobNo!=''&&uid!=''" @tap="AllocationWork">
				分配工单
			</view>
			<view class="seeMember" v-else @tap="ServiceWork">
				查看组员工单
			</view>
		</view>
	</view>
</template>

<script>
	let constUrl,ts;
	export default {
		data() {
			return {
				openid:"",
				jobNo:"",
				uid:""
			}
		},
		onLoad() {
			// console.log('App Show');
			let that=this;
			ts=that;
			console.log(that.jobNo);
			console.log(ts.uid);
			constUrl=that.$consturl;
			that.openid=uni.getStorageSync("openid");
			uni.request({
				url: constUrl + "wx/api/getAllocationWork", //
				data: {
					openid:that.openid
					
				},
				success: function (res) {
				console.log(res);
				console.log(that.openid);
				// let id=res.data.openid;
				// uni.setStorageSync("openid",id);
				// console.log(uni.getStorageSync("openid"));
				},
				fail:function(){
				console.log("fail");
						}
				});
		},
		onShow: function() {
			// console.log('App Show');
	
		},
		methods: {
			// 查看组员工单
			ServiceWork:function(){
				if(true){
				uni.navigateTo({
					url: '../viewMember/viewMember'
						});
				}
			},
			// 分配工单
			AllocationWork:function(){
				uni.request({
					url: constUrl + "wx/api/AllocationWork", //
					data: {
						jobNo:ts.jobNo,
						uid:ts.uid,
						openid:ts.openid
					},
					success: function (res) {
							console.log(res);
					},
					fail:function(){
						console.log("fail");
					}
				});
			},
			choosejobNo:function(jobno){
				
				if(ts.jobNo==jobno){
					ts.uid="";
				}else{ts.jobNo="jobNo";}
				console.log(ts.jobNo);
			},
			chooseuid: function(uids) {
				if(ts.uid==uids){
					ts.uid="";
				}else{ts.uid=uids;}
				
				// console.log(ts.uid);
				console.log(ts.uid);
				// uni.navigateTo({
				// 	url: '../viewMember/viewMember'
				// });
	
			}
		}
	}
</script>

<style>
	.orderList{
		width: 666.66upx;
		border: 3upx solid #FF6F3C;
		border-radius: 10.41upx;
		margin-left: 41.66upx;
	}
	.orderList:nth-child(2){
		margin-top: 27.77upx;
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
		font-size: 18.05upx;
		color: #333333;
	}
	.placeR{
		font-size: 18.05upx;
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
		font-size: 18.05upx;
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
	
	.seeMembers{
		width: 750upx;
		height:326.38;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.memberList{
		width: 750upx;
		height: 243.05upx;
		background-color: #E5E5E5;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.seeMember{
		width: 750upx;
		height: 83.33upx;
		font-size: 16.66upx;
		color: #FFFFFF;
		background-color: #FF6F3C;
		text-align: center;
		line-height:83.33upx ;
		letter-spacing: 1px;
		
	}
	.memberItem{
		width: 159.72upx;
		height: 159.72upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFF;
		margin: 20.83upx;
	}
	.memberItem_portrait{
		width: 48.61upx;
		height: 48.61upx;
		margin-top: 20.83upx;
		border: 1upx solid #000000;
	}
	.memberItem>text{
		font-size: 16.66upx;
		color: #333333;
	}
</style>
