<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">委托详情</text>
		</view>
		<view class="line"></view>
		<view class="progress">
			<view class="info">
				<view class="img">
					<image v-if="active==5" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/speed1.png" mode=""></image>
					<image v-if="active==20" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/speed2.png" mode=""></image>
					<image v-if="active==35" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/speed3.png" mode=""></image>
					<image v-if="active==40" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/speed4.png" mode=""></image>
					<image v-if="active==50" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/speed5.png" mode=""></image>
				</view>
				<!-- <view class="worker">
					<text class="workertext1">维修人员到达现场啦</text>
					<text class="workertext2">记得核实身份并确认哦</text>
					<view class="workerinfo">
						
					</view>
				</view> -->
			</view>
			<view class="speed">
				<speed :options="list1" :active="activeINd"/>
			</view>
		</view>
		<view class="delegateLine"></view>
		<view class="orderList" >
			<view class="place">
				<view class="placeL">
					<image class="placeL_image" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/place.png" mode=""></image>
					<view class="placeL_info">
						<view>
							<text>{{listnum.name}}--</text>
							<text>   {{listnum.phone}}</text>
						</view>
						<view class="">
							<text>{{listnum.address}}</text>
						</view>
					</view>
				</view>
				<!-- <view class="placeR">
					评价结算中
				</view> -->
			</view>
			<view class="cause ">
				<view class="orderList_line"></view>
				<!-- <view class="causePhotos">
					<image class="causePhoto" src="" mode=""></image>
					<image class="causePhoto" src="" mode=""></image>
				</view> -->
				<view class="describe" style="margin-top: 20.83upx;">
					<text class="subject">问题类型 : </text>
					<text class="mg_10">  {{listnum.type}}</text>
				</view>
				<view class="describe">
					<text class="subject" style="margin-top:31.94upx;">问题描述 :</text>
					<view class="voiceBtn mg_10" style="margin-top: 20.83upx;margin-bottom: 27.77upx;">
						<!-- <image class="voiceImage" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/voice.png" mode=""></image>
						<text>a</text> -->
						   {{listnum.remark}}
					</view>
				</view>
			</view>
		</view>
		<!-- <button type="" class="bt">已确认维修人员信息并已到达现场</button> -->
	</view>
</template>

<script>
	let consturl;
	import speed from "@/components/qingqing-steps/uni-steps.vue"
	export default {  
	    data() {
	    	return {
				listnum:'',
	    		active: 0,
				activeINd:0,
	    		list1: [{
	    			title: '已提交'
	    		}, {
	    			title: '已受理'
	    		}, {
	    			title: '已派工'
	    		}, {
	    			title: '执行中'
	    		}, {
	    			title: '已完成'
	    		}]
	    	}
	    },  
	    components: {  
	        speed  
	    },
		  onLoad(options) {
		  	let ts=this,indd=options.ind,openid,address;
		
		  	consturl=ts.$consturl;
		  	openid=uni.getStorageSync("openid");
		  	address=uni.getStorageSync("adress") ;
		  	// console.log(a.push(ts.address));
		  	uni.request({
		  		url: consturl + "wx/api/getRepairList", //
		  		data: {
		  			openid:openid,
		  			jobType:119
		  		},
		  		method: 'GET',
		  		success: function(res) {
		  			let alist=res.data.data,sz=[];
		  			// console.log(alist);
		  			for (let s of alist) {
		  				console.log(s);
		  				let aa={};
		  				aa.createTime=new Date(s.createTime).toLocaleDateString();
		  				aa.type=s.type;aa.remark=s.remark;
		  				let ad=JSON.parse(s.address);
		  				aa.address=ad.region+"-"+ad.street+"-"+ad.address;
		  				aa.status=s.status;ts.active=s.status;
						if(s.status==5){ts.activeINd=0};if(s.status==30){ts.activeINd=1};
						if(s.status==35){ts.activeINd=2};if(s.status==40){ts.activeINd=3};
						if(s.status==50){ts.activeINd=4};
		  				aa.name=ad.name;aa.phone=ad.phone;
		  				sz.push(aa);
		  			}
					let a=sz.reverse();
		  			ts.listnum=a[indd];
					console.log(ts.listnum)
		  	
		  		},
		  		complete: function() {
		  			// console.log("complete");
		  		}
		  	});
		  },
	}
</script>

<style>
	.fontcolor{
		font-size: 25rpx;
		color: #155263;
	}
	.nav{
		margin: 10px 41.66upx !important;
		color: #155263;
	}
	.progress{
		margin-left: 69.44upx;
		margin-top: 27.77upx;
	}
	.info{
		display: flex;
		flex-direction: row;
	}
	.img{
		width: 319.44upx;
		height: 208.33upx;
	}
	.img>image{
		width: 100%;
		height: 100%;
	}
	.worker{
		margin-top: 50upx;
		margin-left: 55.55upx;
	}
	.workertext1{
		font-size: 26upx;
		color: #155263;
	}
	.workertext2{
		font-size: 24upx;
		color: #155263;
	}
	.speed{
		width:600upx;
	}
	.speed view{
		font-size: 18upx;
		color: #FF6F3C;
	}
	
	.delegateLine{
		width: 750upx;
		height: 13.88upx;
		background-color: #f4f4f4;
		margin-top:34.72upx ;
	}
	/*  */
	.orderList{
		width: 666.66upx;
		border: 3upx solid #FF6F3C;
		border-radius: 10.41upx;
		margin-left: 41.66upx;
		margin-top: 41.66upx;
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
		margin-left: 27.77upx;
		color: #333333;
	}
	.placeL_info text{
		font-size:24upx;
	}
/* 	.placeR{
		font-size:26upx;
		color: #333333;
		margin-top: 41.66upx;
		margin-right: 27.77upx;
		color: #FF6F3C;
	} */
	.orderList_line{
		width: 625upx;
		height: 1upx;
		background-color: #E5E5E5;
	}
	.cause{
		margin-left: 27.77upx;
		/* display: none; */
	}
/* 	.causePhotos{
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
	} */
	.causePhoto:nth-child(2){
		margin-left: 20.83upx;
	}
	.describe{
		font-size: 26upx;
		color: #333333;
		display: flex;
		flex-direction: row;
		
	}
	.mg_10{
		margin-left: 10upx;
	}
	.voiceBtn{
		/* width: 238.88upx; */
		height: 41.66upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-top: 6.47upx;
		/* border-radius: 34.72upx; */
		/* overflow-x: scroll; */
		/* border: 1px solid #FF6F3C; */
	}
	.voiceImage{
		width: 20.83upx;
		height: 20.83upx;
		margin-left: 20.83upx;
	}
	.voiceBtn>text{
		margin-left: 13.88upx;
	}
	/* .orderList:hover .cause{
		display: inline-block;
	} */
</style>
