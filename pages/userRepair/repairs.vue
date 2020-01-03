<!-- 报修 -->
<template>
	<view class="content">
			<view class="nav">
				 我要报修
			</view>
			<view class="line"></view>
			<view class="">
				<form class="form" @submit="click"  enctype="multipart/form-data">
				<view class="form1">
					<!-- <text class="fontcolor">请拍摄问题照片或视频</text> -->
					<view class="imgs">
						<view class="uni-uploader-title fontcolor" >点击可预览选好的图片 </view>
						<view class="uni-uploader-info"> ({{imageList.length}}/9)</view>
					</view>
					<!-- <view class="video" @tap="chooseImage">
					</view> -->
					<view class="imgs">
						<block v-for="(image,index) in imageList" :key="index">
							<!-- <view class="uni-uploader__file"> -->
								<image class="uni-uploader__img imgimg" :src="image" :data-src="image" @tap="previewImage">
									<image class="imgDel" @tap="imgDel(index)" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/imgDel.png" mode="" style="width: 27.77upx;height: 27.77upx;"></image>
								</image>
							<!-- </view> -->
						</block>
					<view class="" style="width:111.11upx ;height: 111.11upx;margin-top: 10upx;">
						<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/photo.png" mode="" style="width:111.11upx ;height: 111.11upx;"  @tap="chooseImage"></image>
					</view>
					
					</view>
					<!-- <view class="imgimgs">
						<image v-for="(itemImg,index) in img" class="imgimg" :src="itemImg" mode="" @tap="previewImage"></image>
					</view> -->
				</view>
				<view class="form2">
					<text class="fontcolor titlestyle">请选择问题类型</text>
					<view class="problem">
						<view class="item" @tap="callbacktext(1)" :class="{'itemBg':indexColor==1}" >
							暖气不热
						</view>
						<view class="item"  @tap="callbacktext(2)" :class="{'itemBg':indexColor==2}">
							<text>室温不达标</text>
						</view>
						<view class="item" @tap="callbacktext(3)" :class="{'itemBg':indexColor==3}">
							<text>管道漏水</text>
						</view>
						<view class="item" @tap="callbacktext(4)" :class="{'itemBg':indexColor==4}">
							<text>暖气异响</text>
						</view>
						<view class="item" @tap="callbacktext(5)" :class="{'itemBg':indexColor==5}">
							<text>收费咨询</text>
						</view>
						<view class="item" @tap="callbacktext(6)" :class="{'itemBg':indexColor==6}">
							<text>保险理赔</text>
						</view>
						<view class="item" @tap="callbacktext(7)" :class="{'itemBg':indexColor==7}">
							<text>暖气退费</text>
						</view>
						<view class="others">
							<textarea @input="textarea" name="textarea" class="textarea" value="" placeholder="请输入问题描述详情..." placeholder-style="color:#FF6F3C;font-size:18.05upx;"/>
							<view class="voice">
								<!-- <image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/voice.png" mode=""></image>
								<text>选择语音输入</text> -->
							</view>
						</view>
						<view class="place">
							<text class="fontcolor titlestyle">请选择地点</text>
							<view  v-if="address!=''"  class="ul">
								<view class="li">
									<view class="li_info">
										<view class="li_l">
											<view class="li_img">
												<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/company/home/place.png" mode=""></image>
											</view>
											<view class="li_text">
												<view class="li_l1">
													<text class="fontstyle1">{{address.name}}</text>
													<text class="fontstyle1">{{address.phone}}</text>
												</view>
												<view class="li_l2">
													<text class="fontstyle1">{{address.region}}  {{address.street}}  {{address.address}}</text>
												</view>
											</view>
										</view>
										<view class="li_r">
											<text class="fontstyle2" @tap="clickAdress">选择其他地址</text>
										</view>
									</view>
								</view>
							</view>
							<view class="clickAdress" @tap="clickAdress" v-if="address==''&&address==null">
								点击选择选择住址
							</view>
						</view>
					</view>
				</view>
				<button type="" class="btn" formType="submit">提交</button>
			</form>
			<!--  -->
				</view>
		</view>
</template>

<script>
	var consturl,imgg=[];
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				type:"that.type",
				jobtype:"repair",
				remark :"",
				address :null,
				reservedTime:0,
				openid: "",
				jobNo:"",
				indexColor:0,
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
	
			}
		},
		onLoad(options) {
			
			consturl=this.$consturl;
			this.openid=uni.getStorageSync("openid");
			this.imageList = [],
			this.sourceTypeIndex = 2,
			this.sourceType = ['拍照', '相册', '拍照或相册'],
			this.sizeTypeIndex = 2,
			this.sizeType = ['压缩', '原图', '压缩或原图'],
			this.countIndex = 8;
		},
		onShow:function(){
			this.address=uni.getStorageSync("adress");
		},
		methods: {	
			clickAdress:function(){
				uni.navigateTo({
					url: '../address/pickOtherAddress'
				});
			},
			chooseImage: async function() {
				// #ifdef APP-PLUS
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
				// #endif
			
				if (this.imageList.length === 9) {
					
					console.log("已经九张了");
						return;
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						// console.log(res.tempFilePaths);
						var tempFilePaths =res.tempFilePaths ;
						uni.uploadFile({
							url:"https://www.ccweb.xyz/gas/file/upload",
							filePath:tempFilePaths[0],
							name:"file",
							success:function(res){
								let a=JSON.parse(res.data).data;
								imgg.push(a);
								
								console.log(imgg);
								
								
								console.log("图片");
							}
						})
						
					},
					fail: (err) => {
						// #ifdef APP-PLUS
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						// #endif
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			imgDel:function(imgIndex){
				this.imageList.splice(imgIndex,1);
			},
			async checkPermission(code) {
				let type = code ? code - 1 : this.sourceTypeIndex;
				let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
					await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
						'android.permission.READ_EXTERNAL_STORAGE');
			
				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "没有开启权限",
						confirmText: "设置",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
			
				return status;
			},
			// 请输入问题详情
			textarea:function(e){
				this.remark=e.detail.value;
			},
			// 问题类型点击事件
			callbacktext:function(text){
				let that=this;
				if(text==1){
					that.type="室温不达标";
					that.indexColor=1;
				};
				if(text==2){
					that.type="散热器温度不足";
					that.indexColor=2;
				};
				if(text==3){
					that.type="管道漏水";
					that.indexColor=3;
				};
				if(text==4){
					that.type="暖气异响";
					that.indexColor=4;
				};
				if(text==5){
					that.type="暖气管道阻塞";
					that.indexColor=5;
				};
				if(text==6){
					that.type="其他";
					that.indexColor=6;
				};
				if(text==7){
					that.type="其他";
					that.indexColor=7;
				};
			},
			// 用户报修单提交
			click: function(e) {
				let that=this;
				console.log(consturl + "/wx/api/Repair");
				// console.log(e);
				uni.request({
					url: consturl + "wx/api/Repair", //
					data: {
						type:that.type,
						remark :that.remark,
						address:JSON.stringify(that.address),
						reservedTime:0,
						openid: that.openid,
						imgurl:imgg,
						jobtype:119
					},
					header: {
							'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
					      },
					method: 'POST',
					success: function (res) {
							console.log(JSON.stringify(that.address));
							that.jobNo=res.data.data;
							console.log(that.jobNo);
							uni.navigateBack({
								delta:1
							});
					},
					fail:function(){
						console.log("complete");
					}
				});
				
				
				
				
			}
			
		}
	}
</script>

<style>
	@import url("../../components/uni.css");
		.content{
			width: 750upx;
		}
		
		.content>view{
			margin:20.83upx 41.66upx;
		}
		.fontcolor{
			font-size: 25upx;
			color: #155263;
		}
		.place{
			margin-top: 20.83upx !important;
		}
		.form2{
			margin-top: 20.83upx !important;
		}
		/* form */
		.form{
			width: 666.66upx;
            
		}
		.imgs{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
		.video{
			width: 69.44upx;
			height: 69.44upx;
			border: 1px solid #000000;
		
		}
		.uni-uploader-info{
			font-size: 24upx;
		}
		.imgimgs{
			display: flex;
			flex-direction: row;
		}
		.imgimg{
			width: 111.11upx;
			height: 111.11upx;
			
			margin-top: 10upx;
		/* 	position: relative !important; */
		}
		.imgDel{
			width: 27.77upx;
			height: 27.77upx;
			margin-right:15upx;
			transform: translate(-13.88upx);
		/* 	position: absolute;
			top: 0upx;
			right:0upx; */
		}
		.problem{
			width: 666.66upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			align-items: center;
		}
		.item{
			width: 30%;
			height:69.44upx  ;
			border: 1upx solid #666666;
			border-radius: 10.41upx;
			text-align: center;
			line-height:69.44upx ;
			margin-top: 13.88upx;
			color:  #666666;
			font-size: 25upx;
		}
	/* 	.item>text{
			font-size: 20upx;
			color: #FF6F3C;
		} */
		.itemBg{
			background-color: #FF6F3C;
			color:  #FFFFFF;
			border: 1upx solid #FF6F3C;
		}
		.textcolor{
			color: #FFFFFF;
		}
	/* 	.item:hover{
		}
		.item:hover text{
		} */
		.others{
			width: 666.66rpx;
			height: 256.94upx;
			background-color: #f7f7f7;
			margin-top: 27.77upx;
			position: relative;
		}
		.textarea{
			height: 60%;
			font-size: 25upx;
			margin-top: 27.77upx;
			margin-left:27.77upx ;
		}
		/* .voice{
			height: 40%;
		} */
		.voice{
			width: 208.33upx;
			height: 62.5upx;
			position: absolute;
			right: 27.77upx;
			bottom: 27.77upx;
			background-color: #FFFFFF;
			border-radius: 34.72upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			/* justify-content: center; */
		}
		.voice>image{
			width: 27.77upx;
			height: 27.77upx;
			margin-left: 25upx;
			
		}
		.voice>text{
			font-size: 28upx;
			color: #FF6F3C;
			margin-left: 20.83upx;
		}
		.place{
			width: 666.66upx;
			/* border: 1px solid red; */
		}
		.clickAdress{
			width:340upx ;
			height: 69.44upx;
			border: 1px solid #155243;
			border-radius: 10upx;
			color: #155243;
			margin-left: 180upx;
			line-height: 69.44upx ;
			text-align: center;
		}
		.li{
			border-radius:10.41upx;
			border: 3upx solid #FF6F3C;
			margin-top: 27.77upx;
		}
		.li_info{
			width: 611.11upx;
			/* height: 55.55upx; */
			/* border: 0.69upx solid #007AFF; */
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin: 27.77upx;
		}
		.li_l{
			display: flex;
			flex-direction: row;
			align-items: center;
		
		}
		.li_l1{
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.li_img{
			width: 34.72upx;
			height: 34.72upx;
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.li_img>image{
			width: 34.72upx;
			height: 34.72upx;
		}
		.li_r{
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.fontstyle1{
			font-size:25upx;
			color: #333;
			letter-spacing: 0.69upx;
			margin-left: 27.77upx;
		}
		.fontstyle2{
			font-size: 25upx;
			color: #ff6f3c;
			letter-spacing: 0.69upx;
		}
		.btn{
			width:333.33upx ;
			height: 69.44upx;
			background-color: #FF6F3C;
			border-radius: 34.72upx;
			color: #FFFFFF;
			margin-top:69.44upx;
			font-size: 25upx;
			line-height: 69.44upx ;
		}
	
</style>
