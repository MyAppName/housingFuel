<template>
	<view class="company">
		<view class="head">
			查看组员工单
		</view>
		<view class="Line"></view>
		<view class="member">
			<image class="portrait" src="" mode=""></image>
			<text>康瑞</text>
		</view>
		<!-- 未完成的工单 -->
		<view class="proposalList">
			<view class="proposalHead">
				<text>未完成的工单</text>
			</view>
			<view class="proposalLine">
				
			</view>
			<view class="proposalTitle">
				<view class="data">
					日期时间
				</view>
				<view class="adress">
					地点
				</view>
				<view class="reason">
					原因
				</view>
				<view class="state">
					查看更多
				</view>
			</view>
			<view class="proposalBody">
				<view class="body">
					<view class="data">
						<text>2019</text>
						<text>15:22</text>
					</view>
					<view class="adress">
						紫荆花园
					</view>
					<view class="reason">
						暖气不热
					</view>
					<view class="state" @tap="more">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image>
						
					</view>
				</view>
				<view class="body">
					<view class="data">
						<text>2019</text>
						<text>15:22</text>
					</view>
					<view class="adress">
						紫荆花园
					</view>
					<view class="reason">
						暖气不热
					</view>
					<view class="state"><image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image></view>
				</view>
				<view class="body">
					<view class="data">
						<text>2019</text>
						<text>15:22</text>
					</view>
					<view class="adress">
						紫荆花园
					</view>
					<view class="reason">
						暖气不热
					</view>
					<view class="state">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image>
					</view>
				</view>
				<view class="body">
					<view class="data">
						<text>2019</text>
						<text>15:22</text>
					</view>
					<view class="adress">
						紫荆花园
					</view>
					<view class="reason">
						暖气不热
					</view>
					<view class="state">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image>
					</view>
				</view>
				
			</view>
			
		</view>
		
	<!-- 已完成的工单 -->
	<view class="proposalList" >
		<view class="proposalHead">
			<text>已完成的工单</text>
		</view>
		<view class="proposalLine">
			
		</view>
		<view class="proposalTitle">
			<view class="data">
				日期时间
			</view>
			<view class="adress">
				地点
			</view>
			<view class="reason">
				原因
			</view>
			<view class="state">
				查看更多
			</view>
		</view>
		<view class="proposalBody">
			<view class="body">
				<view class="data">
					<text>2019</text>
					<text>15:22</text>
				</view>
				<view class="adress">
					紫荆花园
				</view>
				<view class="reason">
					暖气不热
				</view>
				<view class="state">
					<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image>
				</view>
			</view>
			<view class="body">
				<view class="data">
					<text>2019</text>
					<text>15:22</text>
				</view>
				<view class="adress">
					紫荆花园
				</view>
				<view class="reason">
					暖气不热
				</view>
				<view class="state">
				<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image>				
				</view>
			</view>
			<view class="body">
				<view class="data">
					<text>2019</text>
					<text>15:22</text>
				</view>
				<view class="adress">
					紫荆花园
				</view>
				<view class="reason">
					暖气不热
				</view>
				<view class="state">
					<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image>				</view>
			</view>
			<view class="body">
				<view class="data">
					<text>2019</text>
					<text>15:22</text>
				</view>
				<view class="adress">
					紫荆花园
				</view>
				<view class="reason">
					暖气不热
				</view>
				<view class="state">
				<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/more.png" mode=""></image>			
				</view>
			</view>
			
		</view>
		
	</view>
	<!-- 工单 end -->
	<view class="members">
		<image class="membersPortrait" src="" mode=""></image>
	</view>
	</view>
</template>

<script>
	let constUrl;
	export default {
		data() {
			return {
				title: 'Hello',
				
			}
		},
		onLoad() {
			let that=this;
			constUrl=that.$consturl;
			uni.request({
				url: constUrl + "wx/api/ServiceWork", //
				data: {
					openid:that.openid
				},
				method: 'GET',
				success: function (res) {
						console.log(res.data);
				},
				fail:function(){
					console.log("fail");
				}
			});
		},
		onShow: function() {
			console.log('App Show');
	
		},
		methods: {
			more: function(e) {
				console.log("toHousehold");
				uni.navigateTo({
					url: '../workOrderDetails/finish'
				});
	
			}
		}
	}
</script>

<style>
	.head, .member, .proposalList{
		background-color: #FFFFFF;
	}
	.company{
		background-color: #F4F4F4;
		height: 100vh;
	}
	.member{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 41.66upx;
	}
	.portrait{
		width: 34.72upx;
		height: 34.72upx;
		border: 1upx solid #000000;
		margin: 20.83upx 0;
	}
	.member>text{
		font-size: 18.05upx;
		margin-left: 13.88upx;
	}
	/*  */
	.proposalList{
		width: 666.66upx;
		margin-left: 41.66upx;
		margin-top: 20.83upx;
	}
	.proposalList>view{
		margin-left: 27.77upx;
	}
	.proposalLine{
		width: 555.55upx;
		height: 1upx;
		background-color: #E5E5E5;
		margin-bottom: 20.83upx;
	}
	.proposalHead>text{
		font-size: 20.83upx;
		color: #666666;
		height: 62.5upx;
		line-height:62.5upx ;
	}
	.proposalTitle{
		width: 100%;
		display: flex;
		flex-direction: row;
		
	}
	.proposalTitle>view{
		flex: 1;
		font-size: 15.27upx;
		color: #666666;
	}
	.proposalBody{
		width: 100%;
	}
	.body{
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: 18.05upx;
		align-items: center;
	}
	.body>view{
		flex: 1;
		font-size: 18.05upx;
		color: #333;
	}
	.data{
		display: flex;
		flex-direction: column;
	}
	
	.state>image{
		width: 11.11upx;
		height: 16.66upx;
		margin-left: 34.72upx;
	}
	/* .data, .reason{
		flex: 2;
	}
	.adress{
		flex: 4;
	}
	.state{
		flex: 1;
	} */
	.members{
		width: 750upx;
		height: 125upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.membersPortrait{
		width: 69.44upx;
		height: 69.44upx;
		border-radius: 69.44upx;
		border: 1upx solid #FF6F3C;
		margin-left: 41.66upx;
	}
	.membersPortrait:hover{
		border: 6.94upx solid #FF6F3C;
	}
</style>
