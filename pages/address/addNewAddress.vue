<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">添加新地址</text>
		</view>
		<view class="line"></view>
		<form class="form " @submit="Submission">
			<text>联系号码</text>
			<view class="input borderColor" @tap="changeBorderColor">
				<image class="hide input_image s" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/phone.png" mode=""></image>
				<image class="input_image h" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/phone_w.png" mode=""></image>
				<input type="number" value="" placeholder="请输入您的号码" name="phoneValue"/>
			</view>
			<text>联系人姓名</text>
			<view class="input borderColor">
				<image class="hide input_image s" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/uesrName.png" mode=""></image>
				<image class="input_image h" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/uesrName_w.png" mode=""></image>
				<input type="text" value="" placeholder="请输入您的姓名"  name="nameValue"/>
			</view>
			<text>维修地址</text>
			<view class="inputAddres">
				<view class="inputAddres_l borderColor">
					<image class="hide addresImage s" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/addres.png" mode=""></image>
					<image class="addresImage h" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/addres_w.png" mode=""></image>
					<!-- <input type="text" value="" placeholder="请选择区(例:良乡地区)"   name="areaValue"/> -->
					<picker @change="bindPickerChange1" :value="regionTndex" :range="regionlist">
					    <view class="uni-input">{{regionlist[regionTndex]}}</view>
					</picker>
				</view>
				<view class="inputAddres_r borderColor">
					<!-- <input type="text" value="" placeholder="请选择所在街/路"   name="streetValue"/> -->
					<picker @change="bindPickerChange2" :value="streetIndex" :range="streetlist">
					    <view class="uni-input" style="margin-left: 69.44upx;">{{streetlist[streetIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="textarea borderColor">
				<textarea value="" placeholder="请输入详细地址(例如:街心花园小区1号楼1单元101)" name="textareaValue"/>
			</view>
			<button type="" class="primary" formType="submit">完成添加并设为默认地址</button>
		</form>
		
	</view>
	
</template>

<script>
	let constUrl,getAddress,region,street;

	export default {
		data() {
			return {
				// borderColor: false;
				openid:"",
				regionlist:["请所在地区","迎风地区","东风地区","星城地区","高家坡地区","桥梁厂地区"],
				regionTndex:0,
				streetlist:["请选择您所在 街/路","向阳路"	,"羊耳峪北里"	,"迎风四里","北庄"	,"迎风二里","东风北里","东风东里","迎风六里","迎风六里三区","迎风五里"	,"羊耳峪西区","杏花西里","健德一里"
				,"燕东路","健德二里","东风南里","迎风三里","动力厂"
				,"羊耳峪里"	,"大件路","尚店路","羊耳峪里18号","凤凰亭南里","迎风","富燕","北庄南里","朱各庄"	,"岗山","燕房路"
				,"迎风一里","动力站"
				,"健德三里"	,"羊西区"
				,"杏花东里","燕山体育北路"	,"凤凰亭北里","岗南路","凤凰亭","健德四里","双泉路"	,"六里二区","岗北路","东万路"
				,"分局路"
				,"星城","岗东路","东风","横岭","高家坡","迎风街","迎风中路",	"杏花东路","自然村"	,	"东风北里周转","机械厂单身","羊耳峪南里","羊耳峪西里","北庄村内平房"
				,"北庄南二区平房","东风北里26号楼西南侧平房"
				,"动力厂平房南五区"
				,"凤凰亭南里1号院","岗山50号"	,"	岗山村","岗山平房","岗山职高","高家坡159号","高家坡3号楼","高家坡平房","供销北平房"
				,"健德二里乙21号"
				,"木头岭","木头岭南平房1号院","木头岭南平房2号院","树脂平房","杏花东路10号院0号楼","杏花东路3号院"	
				,"燕东路平房","羊耳峪铁路旁","羊耳峪西巷18号楼"	,"迎风二里甲12号楼西侧高家坡116号","迎风六里西侧平房",
				"迎风三里1号职防所","迎风四里平房","迎风一里平房","朱各庄化一平房","朱各庄平房","桥梁厂",	"四里条楼",
				"西里小区","迎风六里二区"],
				streetIndex:0
						
				
			}
		},
		onLoad(options) {
			let that=this;
			constUrl=that.$consturl;
			that.openid=uni.getStorageSync("openid");
			// 获取用户的地址列表信息信息
			uni.request({
				url: constUrl + "wx/api/getAddress", //
				data: {
					openid:that.openid
				},
				success: function (res) {
					let b=res.data.data;
					let c=JSON.parse(b);
					getAddress=c;
						console.log(getAddress);
				},
				complete:function(){
				}
			});
		},
		onShow: function() {
			
		},
		methods: {
			// 用户地址选择 事件
			bindPickerChange1: function(e) {
			    this.regionTndex = e.target.value;
				region=this.regionlist[e.target.value];
				console.log(region);
				
			},
			bindPickerChange2: function(e) {
			    this.streetIndex = e.target.value;
				street=this.streetlist[e.target.value];
				console.log(street);
			},
			// 用户添加地址信息
			Submission:function(e){
				let ts=this,a={};
				a.phone=e.detail.value.phoneValue;
				a.name=e.detail.value.nameValue;
				a.region=region;
				a.street=street;
				a.address=e.detail.value.textareaValue;
				getAddress.push(a);
				uni.setStorageSync("adress",a);
				console.log(uni.getStorageSync("adress").name)
				wx.request({
					url: constUrl + "wx/api/setAddress", //
					data: {
						openid: ts.openid,
						address:JSON.stringify(getAddress)
					},
					method: 'POST',
					header: {
					        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
					      },
					success: function(res) {
						console.log(getAddress);
						console.log(JSON.stringify(getAddress));
						uni.navigateBack({
						    delta:1
						});
					},
					complete: function() {
						// console.log("complete");
					}
				});
				
			},
		 changeBorderColor:function(e){
		}
		}
	}
</script>

<style>
	text{
		color: #155263;
	}
	view{
		box-sizing: border-box;
	}
	.borderColor:hover{
		border: 2upx solid #ff6f3c !important;
	}
	.borderColor:hover .s{
		display: inline-block;
	}
	.borderColor:hover .h{
		display: none;
	}
	.form text{
		margin: 40upx 40upx;
		font-size: 26rpx;
	}
	.input{
		width: 60%;
		height: 72.5rpx;
		display: flex;
		flex-direction: row;
		align-items:center;
		border: 2upx solid #E5E5E5;
		border-radius: 15upx;
		margin-top: 20.83rpx;
		margin-left: 40upx;
	}
	.input_image{
		width: 40upx;
		height: 40upx;
		margin: 0 40upx;
	}
	input{
		font-size:26rpx;
	}
	/* 维修地址样式 */
	.inputAddres{
		width: 100%;
		height: 72.5rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.addresImage{
		width: 40upx;
		height: 40upx;
		margin: 0 40upx;
	}
	.uni-input{
		font-size: 28upx;
	}
	.inputAddres>view{
		height: 100%;
		border: 2upx solid #E5E5E5;
		border-radius: 15upx;
		margin-top: 20.83rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.inputAddres_l{
		width: 40%;
		
		margin-left: 40upx;
	}
	.inputAddres_r{
		width: 48%;
		margin-right: 20upx;
	}
	.inputAddres_r>input{
		margin-left: 40upx;
		
	}
	/*  */
	.textarea{
		width: 92%;
		height: 200rpx;
		font-size: 28rpx;
		margin-top: 40.83rpx;
		margin-left: 40upx;
		border: 2upx solid #E5E5E5;
		border-radius: 15upx;
	}
	.textarea>textarea{
		margin: 27.77rpx 27.77rpx;
	}
	/*  */
	.primary{
		width: 40%;
		height: 70upx;
		font-size: 28rpx;
		color: #FFFFFF;
		background:#ff6f3c;
		border-radius: 35rpx;
		line-height: 70upx;
		position: fixed;
		top: 80%;
		left: 30%;
	}
</style>
