<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">我要报修</text>
		</view>
		<view class="line"></view>
		<view class="but" @tap="click">
			<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/baoxiu11.png" mode=""></image>
			<text>我要报修</text>
		</view>
		<!-- <view class="ul">
			<view class="li1">
				<view class="li1_l">
					<text class="key">日期:</text><text class="value">2019-10-11</text>
				</view>
				<view class="li1_r">
					<text @tap="toproposal">投诉</text>
				</view>
			</view>
			<view class="li2">
				<text class="key">时间:</text><text class="value">09:46</text>
			</view>
			<view class="li3">
				<text class="key">维修类型:</text><text class="value">暖气漏水</text>
			</view>
			<view class="li4">
				<text class="key">维修描述:</text><text class="value">无</text>
			</view>
			<view class="li5">
				<text class="key">维修地点:</text><text class="value">北京朝阳</text>
			</view>
			<view class="li6">
				<text class="key">委托状态:</text><text class="submit">已提交委托</text>
				<view class="detail" @tap="detail">
					查看详情
				</view>
			</view>
		</view> -->
		<!--  -->
		<view class="">

		<view class="ul" v-for="(item,index) in repairlist" :key="index">
			<view class="li1">
				<view class="li1_l">
					<text class="key">日期:</text><text class="value">{{item.createTime}}</text>
				</view>
				<view class="li1_r">
					<text @tap="toproposal">催单</text>
				</view>
			</view>
			<!-- <view class="li2">
				<text class="key">时间:</text><text class="value">{{item.jobNo}}</text>
			</view> -->
			<view class="li3">
				<text class="key">维修类型:</text><text class="value">{{item.type}}</text>
			</view>
			<view class="li4">
				<text class="key">维修描述:</text><text class="value">{{item.remark}}</text>
			</view>
			<view class="li5">
				<text class="key">维修地点:</text><text class="value">{{item.address}}</text>
			</view>
			<view class="li6">
				<text class="key">委托状态:</text>
				<text class="submit" v-if="item.status==2">报修驳回，请打电话</text>
				<text class="submit" v-if="item.status==5">报修提交</text>
				
				<!-- <text class="submit" v-if="item.status==10">已审核</text> -->
				<text class="submit" v-if="item.status==20">已受理</text>
				<!-- <text class="submit" v-if="item.status==30">已派单</text> -->
				<text class="submit" v-if="item.status==35">已派工</text>
				<text class="submit" v-if="item.status==40">执行中</text>
				<text class="submit" v-if="item.status==50">已完成</text>
				<text class="submit" v-if="item.status!=50&&item.status!=40&&item.status!=35&&item.status!=20&&item.status!=5&&item.status!=2">处理中</text>
				<!-- <text class="submit" v-if="item.status==60">已回访</text> -->
				<!-- <text class="submit" v-if="item.status==70">返单中</text> -->
				<!-- <text class="submit" v-if="item.status==75">维修返单</text> -->
				<view class="detail" @tap="detail(index,item.status)">
					查看详情
				</view>
			</view>
		</view>
		</view>
		<!-- end -->
	</view>
</template>

<script>
	// let repairlists=[];
	export default {
		data() {
			return {
				repairlist: ""
			}
		},
		onLoad(options) {
			
		},
		onShow:function(){
			let ts = this,openid=uni.getStorageSync("openid");
			console.log(ts.$consturl + "wx/api/getRepairList");
			uni.request({
				url: ts.$consturl + "wx/api/getRepairList", //
				data: {
					openid:openid,
					jobType:119
				},
				method: 'GET',
				// header: {
				//         'content-type': 'application/json' //自定义请求头信息
				//     },
				success: function(res) {
					let alist=res.data.data,sz=[];
					console.log(res);
					for (let s of alist) {
						// console.log(s.address);
						let aa={};
						aa.createTime=new Date(s.createTime).toLocaleDateString();
						aa.type=s.type;aa.remark=s.remark;
						let ad=JSON.parse(s.address);
						aa.address=ad.region+"-"+ad.street+"-"+ad.address;
						aa.status=s.status;
						sz.push(aa);
					}
					ts.repairlist=sz.reverse();
					console.log(ts.repairlist);
			
				},
				fail: function() {
					console.log("我要报修列表获取失败");
				}
			});
		},
		methods: {
			detail: function(det,status) {
				console.log(status);
				if(status==2){
					return false;
				}
				uni.navigateTo({
					url: '../delegate/delegate?ind='+det
				});
			},
			click: function(e) {
				uni.navigateTo({
					url: './repairs'
				});
			},
			toproposal:function(){
				uni.navigateTo({
					url: '../proposal/proposalPage'
				});
			}
		}
	}
</script>

<style>
	@import url("../../components/repairList.css");
</style>
