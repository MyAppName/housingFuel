<template>
	<view class="content">
		<view class="top">
			<text class="fontcolor">投诉</text>
		</view>
		<view class="line"></view>
		<view class="proposalList">
			<view class="proposalTitle">
				<view class="data">
					日期时间
				</view>
				<view class="adress" style="color: #155243;">
					地点
				</view>
				<view class="reason">
					原因
				</view>
				<view class="state">
					投诉状态
				</view>
			</view>
			<view class="proposalBody">
				<view class="body" v-for="(item,index) in getRepairList" :key="index">
					<view class="data">
					<span>{{item.data}}</span>
					</view>
					<view class="adress">{{item.adree}}</view>
					<view class="reason">{{item.remark}}</view>
					<view class="state">{{item.status}}</view>
				</view>
			
			</view>
			
		</view>
		<view class="proposalBt" @tap="click()">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/proposal.png" mode=""></image>
			<text>投诉</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
	            getRepairList:null,
				htmlt:""
				
			}
		},
		onLoad(options) {
			let ts = this,openid=uni.getStorageSync("openid");
			console.log(ts.$consturl + "wx/api/getRepairList");
			// 获取投诉的信息列表
			uni.request({
				url: ts.$consturl + "wx/api/getRepairList", //
				data: {
					openid:openid,
					jobType:123
				},
				method: 'GET',
				success: function(res) {
					let a=res.data.data,aa=[],bb={};
					ts.getRepairList=a;
					console.log(ts.getRepairList);
					for(var i=0;i<a.length;i++){
						let b=a[i].address;
						let c=JSON.parse(b);
						console.log(c);
					    let	place=c.region+"-"+c.street+"-"+c.address;
						let timer= new Date(a[i].createTime).toLocaleDateString();
						let states="处理中";
						if(a[i].status==20){states="已受理"};if(a[i].status==50){states="已完成"};
						if(a[i].status==5) {states="报修已提交"};if(a[i].status==10){states="已审核"};
						if(a[i].status==2) {states="报修驳回"};
						bb.data=timer;bb.adree=place;bb.remark=a[i].remark;bb.status=states;
						aa.push(bb);
						bb={};
						console.log(aa);
					}
					ts.getRepairList=aa.reverse();
				},
				fail: function() {
					console.log("fail");
				}
			});
		},
		onShow:function(){
			console.log("show");
			this.address=uni.getStorageSync("adress");
		},
		methods: {
			click: function(e) {
				uni.navigateTo({
					url: 'proposalPage'
				});
			}
		}
	}
</script>

<style>
	.top {
		margin:10px 41.66upx !important;
	}
	.proposalList{
		width: 666.66upx;
		margin-left: 41.66upx;
		margin-top: 20.83upx;
	}
	.proposalTitle{
		width: 100%;
		display: flex;
		flex-direction: row;
		
	}
	.proposalTitle>view{
		flex: 1;
		font-size: 28upx;
		color: #666666;
	}
	.proposalBody{
		width: 100%;
	}
	.body{
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: 28upx;
		align-items: center;
		
	}
	.body>view{
		flex: 1;
		font-size: 26upx;
		color: #333;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.reason{
		margin-left: 33.88upx;
	}
	.body>view:hover {
		overflow: visible;
		text-overflow:clip ;
		white-space: normal;
		color: #155263;
	}
	.data{
		display: flex;
		flex-direction: column;
	}
	
	.proposalBt{
		width: 125upx;
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
	.proposalBt>text{
		font-size: 26upx;
		color: #FFFFFF;
	}
</style>
