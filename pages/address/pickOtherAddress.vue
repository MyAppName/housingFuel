<template>
	<view class="content">
		<view class="nav">
			<text class="fontcolor">选择其他地址</text>
		</view>
		<view class="line"></view>
		
		<view class="ul" v-for="(item,index) in getAddress" :key="index">
			<view class="li" @tap="click(index)">
				<view class="li_info">
					<view class="li_l">
						
						<view class="li_text">
							<view class="li_l1">
								<text class="fontstyle1">{{item.name}}</text>
								<text class="fontstyle1">  {{item.phone}}</text>
							</view>
							<view class="li_l2">
								<text class="fontstyle1">{{item.region}}  {{item.street}}  {{item.address}}</text>
							</view>
						</view>
						
					</view>
					<view class="li_r">
						<view @tap="deleteItem(index)" class="li_img">
							<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/delete.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- end -->
		<view class="buttons">
			<button type="" class="button1" @tap="addNewAddress">添加新地址</button>
			<button type="" class="button2" @tap="save">保存</button>
		</view>
	</view>
</template>

<script>
	var consturl;
	export default {
		data() {
			return {
				getAddress:"",
				address:"",
				openid:""
			}
		},
		onLoad(options) {
			
		},
		onShow:function(){
			let ts=this,a=[];
			consturl=ts.$consturl;
			ts.openid=uni.getStorageSync("openid");
			ts.address=uni.getStorageSync("adress") ;
			// console.log(a.push(ts.address));
			// 获取用户地址列表
			uni.request({
				url: consturl + "wx/api/getAddress", //
				data: {
					openid:ts.openid
				},
				success: function (res) {
					let b=res.data.data;
					let c=JSON.parse(b);
					ts.getAddress=c;
						console.log(ts.getAddress);
				},
				complete:function(){
				}
			});
		},
		methods: {
			// 添加地址按钮 
			addNewAddress:function(){
				uni.redirectTo({
					url: 'addNewAddress'
				});
			},
			// 删除地址信息
			deleteItem:function(i){
				let ts=this;
				ts.getAddress.splice(i,1);
				console.log(i);
				wx.request({
					url: consturl + "wx/api/setAddress", //
					data: {
						openid: ts.openid,
						address:JSON.stringify(ts.getAddress)
					},
					method: 'POST',
					header: {
					        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
					      },
					success: function(res) {
						// console.log(JSON.stringify(getAddress));
						uni.navigateTo({
							url: '#'
						});
					},
					complete: function() {
						// console.log("complete");
					}
				});
			},
			// edit:function(j){
			// 	uni.navigateTo({
			// 		url: 'addNewAddress?index='+j
			// 	});
			// }
			click:function(j){
				// 修改用户默认地址
				let ts=this;
				let gas= ts.getAddress[j];
				uni.getStorageSync("adress") 
				uni.setStorageSync("adress",gas);
			},
			save:function(){
				uni.navigateBack({
					delta:1,
				})
				
			}
			
		}
	}
</script>

<style>
	.content{
		width: 100vw;
		height: 100vh;
	}
	.content>view{
		width: 666.66upx;
		margin-left: 41.66upx;
	}
	.nav {
		margin:10px 41.66upx;
	}
	.li{
		border-radius:10.41upx;
		border: 3upx solid #E5E5E5;
		margin-top: 27.77upx;
	}
	.li:hover{
		border: 3upx solid #FF6F3C;
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
		font-size: 26upx;
		color: #333;
		letter-spacing: 0.69upx;
		margin-left: 27.77upx;
	}
	.fontstyle2{
		font-size: 26upx;
		color: #cccccc;
		letter-spacing: 0.69upx;
	}
	
	.buttons{
		width: 333.33upx;
		height: 180.55upx;
		position: fixed;
		top: 65%;
		left:0;
	}
	.buttons>button{
		width:333.33upx ;
		height: 69.44upx;
		border: 3.6upx solid #FF6F3C;
		border-radius: 34.72upx;
		line-height:69upx ;
		font-size: 26upx;
	}
	.button1{
		color: #FF6F3C;
	}
	.button2{
		color: #FF6F3C;
		background-color: #FF6F3C;
		margin-top: 41.66upx;
		color: #FFFFFF;
	}
</style>
