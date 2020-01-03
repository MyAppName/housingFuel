<template>
	<view class="content">
		<official-account></official-account>
		<view class="top">
              <!-- <view>{{getBulltin.backimgurl}}</view> -->
			  <!-- <view>{{getBulltin.subtitle}}</view> -->
			  <!-- <view>{{getBulltin.content}}</view> -->
			  <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
			  	<swiper-item v-for="(item,index) in getBulltin" :key="index">
			  		<view class="swiper-item sswiper-item" >
						
						<image :src="item.backimgurl" mode="scaleToFill"></image>
						<view class="neirong">
							<text>{{item.title}}</text>
							<view v-html="item.content" style="overflow: scroll;"></view>
						</view>
						
					</view>
			  	</swiper-item>
			  	<!-- <swiper-item>
			  		<view class="swiper-item sswiper-item">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/tu4.jpg" mode=""></image>
					</view>
			  	</swiper-item> -->
			  </swiper>
		</view>
		<view class="center">
			<!-- 中部 1 -->
			<view class="center0 center1">
				<view class="centerTitle center1Title">
					<text>用户报修</text>
				</view>
				<view class="line"></view>
				<view class="centerList center1List">
					<view id="baoxiu1" class="centerItem center1Item1" @tap="click">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/baoxiu1.png" mode=""></image>
						<view class="picText">
							<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/baoxiu11.png" mode=""></image>
							<text>我要报修</text>
						</view>
					</view>
					<view id="baoxiu2" class="centerItem center1Item2" @tap="click">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/baoxiu2.png" mode=""></image>
						<view class="picText">
							<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/baoxiu22.png" mode=""></image>
							<text>预约维修</text>
						</view>
					</view>
					<view id="baoxiu3" class="centerItem center1Item3" @tap="click">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/baoxiu3.png" mode=""></image>
						<view class="picText">
							<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/baoxiu33.png" mode=""></image>
							<text>预约安检</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 中部 2 -->
			<view class="center0 center1">
				<view class="centerTitle center1Title">
					<text>自助服务</text>
				</view>
				<view class="Line"></view>
				<view class="centerList center1List">
					<view id="fuwu1" @tap="click" class="centerItem center1Item1">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/fuwu1.png" mode=""></image>
						<view class="picText2">
							<text>缴费服务</text>
						</view>
					</view>
					<view id="fuwu2" @tap="click" class="centerItem center1Item2">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/fuwu2.png" mode=""></image>
						<view class="picText2">
							<text>账单查看</text>
						</view>
					</view>
					<view id="fuwu3" @tap="click" class="centerItem center1Item3">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/fuwu3.png" mode=""></image>
						<view class="picText2">
							<text>投诉建议</text>
						</view>
					</view>
					<view id="fuwu4" @tap="click" class="centerItem center1Item3">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/fuwu4.png" mode=""></image>
						<view class="picText2">
							<text>用户注销</text>
						</view>
					</view>
					<view id="fuwu5" @tap="click" class="centerItem center1Item3">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/fuwu5.png" mode=""></image>
						<view class="picText2">
							<text>进入公众号</text>
						</view>
					</view>
					<view id="fuwu6" @tap="click" class="centerItem center1Item3">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/fuw6.png" mode=""></image>
						<view class="picText2">
							<text>使用帮助</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 中部 2 end -->
		</view>
		<!-- content end -->
		<!-- bottom -->
		<view class="bottom">
			<view class="bottomTitle">
				<text>- 暖气小常识 -</text>
			</view>
			<swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000">
				<swiper-item v-for="(swp,index) in knowledge" :key="index">
					<view class="swiper-item">
						<view class="bottomRoll">
							<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/prev.png" mode=""></image>
							<text>{{swp.question}}</text>
							<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/home/next.png" mode=""></image>
						</view>
						<view class="bottomText">
							<text>{{swp.answer}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>	
		</view>
		
	</view>
</template>

<script>
	let consturl;
	export default {

		data() {
			return {
				// imgurl:"https://www.ccweb.xyz",
				getBulltin:"",
				index: 0,
				date: 1,
				openid:"",
				content:"",
				knowledge: [{
							question: '安装暖气片的温控阀',
							answer: '我们主要安装温控阀的目的就是可以调节热水进入暖气管道的水量，热水量多温度就高，流量少温度就低，从而来控制暖气片温度，实现室内温度的控制'
						},
						{
							
							question: '选择正确的暖气片',
							answer: '现在在暖通市场中暖气片的品牌、种类是非常多的，我们要根据实际的需求去采购暖气片，比如那些暖气片散热量大、采暖效果好并且制热效果快的才适合家用，特别死钢制暖气片，大多数选用优质冷轧低碳钢，钢材本身都有大分子的特征，水分子穿透比较好，使用的时候不会有干燥感。'
						}
					],
			}
		},
		onLoad(options) {
			let ts=this,id=uni.getStorageSync("openid");
			ts.openid=id;
			console.log(ts.openid);
			consturl=this.$consturl;
			//获取home也的公共
			// let datas=ts.$ajax("wx/api/getBulltin","home公告");
			// console.log(consturl);
			// setTimeout(function(){
			// 	ts.getBulltin=datas;
			// 	console.log(ts.getBulltin)
			// },1000);
			// console.log(ts.index);
			// 获取住户home的公告
			uni.request({
				url:consturl+"wx/api/getBulltin", //
				data: {
					type:"user"
				},
				method: 'GET',
				success: function (res) {
					ts.getBulltin=	res.data.data;
					console.log(ts.getBulltin);
					
				},
				fail:function(){
					console.log("住户home的公告获取失败");
				}
			});
			// 获取home页下方的知识库
			uni.request({
				url:"http://171.84.0.89:5080/page/CustomerService/WeChatHandler.ashx", //
				data: {
					action:"questionInfo"
				},
				method: 'GET',
				success: function (res) {
					console.log("知识获取失败success");
					let r= res.data.data;
					if(r!=""&&r!=null&&r!=undefined){
						ts.knowledge=r;
						console.log(res.data.data);
					}	
				},
				fail:function(){
					console.log("知识获取失败失败");
				}
			});
		},
		onShow:function(){
			// console.log("home_show");
		},
		methods: {
             //判断是否登录事件
			 // 判断登录后点击了哪一模块
			click: function(e) {
				let that=this;
				let c = e.currentTarget.id,opid=that.openid;
				if(opid!=""&&opid!=null&&opid!=undefined) {
					console.log(opid!=""&&opid!=null&&opid!=undefined);
					// uni.reLaunch({
					//     url: '../userRepair/repairList'
					// });
					if (c == "baoxiu1") {
						uni.navigateTo({
							url: '../userRepair/repairsList'
						});
					}
					if (c == "baoxiu2") {
						uni.navigateTo({
							url: '../userRepair/repairList'
						});
					}
					if (c == "baoxiu3") {
						uni.navigateTo({
							// url: '../userRepair/Recorder',
							url:"../userRepair/securityList"
						});
					}
					if (c == "fuwu1") {
						uni.navigateTo({
							url: '../pay/checkPaymentDelail'
						});
					}
					if (c == "fuwu2") {
						uni.navigateTo({
							url: '../bill/bill'
						});
					}
					if (c == "fuwu3") {
						uni.navigateTo({
							url: '../proposal/proposal'
						});
					}
					if (c == "fuwu4") {
						uni.showModal({
						    title: '提示',
						    content: '是否注销账号',
						    success: function (res) {
						        if (res.confirm) {
						            uni.setStorageSync("openid","");
									uni.setStorageSync("adress","");
									uni.navigateTo({
										url:"../index/index",
										// url:"../company/pHome"
									});
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
					if (c == "fuwu5") {
						uni.navigateTo({
							url: 'pdf?type=5'
						});
					}
					if (c == "fuwu6") {
						uni.navigateTo({
							url: 'pdf'
						});
					}
				} else {
					uni.showModal({
						title: '提示',
						content: '您未登录，是否选择登录',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '../index/index'
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			
		}
	}
</script>

<style>
	.content {
		width: 100vw;
		height: 100vh;
		/* overflow: hidden; */
	}
     .sswiper-item{
		 width: 750upx;
		 /* height: 502.77upx; */
		 /* height: 302.77upx; */
		 height: 100%;
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
		 /* display: flex;
		 flex-direction: column;
		 justify-content: center; */
	 }
	 .neirong>text{
		 font-size: 28upx;
	 }
	.top {
		/* width: 750upx;
		height: 502.77upx; */
		background-color: #E5E5E5;
		/* text-align: center; */
		/* background-image: url("https://www.ccweb.xyz/vdata/2019101903392328409347.jpg"); */
		background-repeat:no-repeat;
		background-size: 100% 113%;
		overflow-y: scroll;
		
	}
	.center {
		width: 100%;
		height: 30%;
	}
	.bottom {
		width: 100%;
		height: 55%;
		/* text-align: center; */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* 顶部 */

	/* 中部 */
	.center0 {
		width: 100%;
		height: 50%;
	}

	.centerTitle {
		width: 100%;
		height: 30%;
		line-height: 60upx;
		color: #666;
		font-size: 25upx;
		margin-left: 20.83rpx;
	}

	.centerList {
		width: 100%;
		height: 70%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		/* overflow: hidden; */
		margin-top: 13.88rpx;
	}

	.centerItem {
		width: 30%;
		height: 90%;
		position: relative;
		margin: 10upx;
	}

	.centerItem text {
		font-size: 25rpx;
		color: white;
	}

	.centerItem>image {
		width: 100%;
		height: 100%;
	}

	.picText2 {
		position: absolute;
		top: 36%;
		left: 28%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.picText {
		position: absolute;
		top: 34%;
		left: 21%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.picText>image {
		width: 34.72rpx;
		height: 34.72rpx;
		margin-right: 10rpx;
	}

	/* 底部 */
	.bottom text{
		font-size: 25upx;
	}
	.bottomTitle {
		width: 100%;
		height: 16%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bottomTitle>text {
		color: #666666;
	}

	.bottomRoll {
		width: 80%;
		height: 16%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-left: 75upx;
	}

	.bottomRoll>image {
		width: 34.72upx;
		height: 34.72upx;

	}

	.bottomText {
		width: 90vw !important;
		/* min-height: 35vh; */
		background-color: ghostwhite;
		margin: 10px auto;

	}
	
</style>
