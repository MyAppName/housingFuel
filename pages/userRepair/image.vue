<template>
	<view>qqq
		<!-- <page-head :title="title"></page-head> -->
		<!-- 	<view>
								<view class="uni-uploader-title">点击可预览选好的图片</view>
								<view class="uni-uploader-info">{{imageList.length}}/9</view>
								<view class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImage">123</view>
								</view>
									<block v-for="(image,index) in imageList" :key="index">
											<image style="width: 69.44upx;height: 69.44upx;" class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
									</block>

		</view> -->
		<web-view class="web" v-if="imageList!=''" src="http://tlwx.reliantongbak.com/brfs/jsapi_s.php?openId=oqa1_1oTiBWjeWJmrrXnDZjVfOpM">报修</web-view>
	</view>
</template>
<script>
	// import permision from "@/components/permission.js"
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
				// title: 'choose/previewImage',
				imageList: [1],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		onUnload() {
			this.imageList = [],
				this.sourceTypeIndex = 2,
				this.sourceType = ['拍照', '相册', '拍照或相册'],
				this.sizeTypeIndex = 2,
				this.sizeType = ['压缩', '原图', '压缩或原图'],
				this.countIndex = 8;
		},
		methods: {
			// sourceTypeChange: function(e) {
			// 	this.sourceTypeIndex = parseInt(e.target.value)
			// },
			// sizeTypeChange: function(e) {
			// 	this.sizeTypeIndex = parseInt(e.target.value)
			// },
			// countChange: function(e) {
			// 	this.countIndex = e.target.value;
			// },
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
					let isContinue = await this.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
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
			// isFullImg: function() {
			// 	return new Promise((res) => {
			// 		uni.showModal({
			// 			content: "已经有9张图片了,是否清空现有图片？",
			// 			success: (e) => {
			// 				if (e.confirm) {
			// 					this.imageList = [];
			// 					res(true);
			// 				} else {
			// 					res(false)
			// 				}
			// 			},
			// 			fail: () => {
			// 				res(false)
			// 			}
			// 		})
			// 	})
			// },
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
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
			}
		}
	}
</script>

<style>
	@import url("../../components/uni.css");
	/* .cell-pd {
		padding: 22upx 30upx;
	}

	.list-pd {
		margin-top: 50upx;
	} */
	/* .uni-uploader__img{
		width: 69.44upx;
		height: 69.44upx;
	} */
.web{
	width: 69.44upx;
	height: 69.44upx;
}




</style>
