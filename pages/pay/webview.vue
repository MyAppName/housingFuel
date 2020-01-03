<template>
	<!-- <web-view v-if="userCode!=''&&userCodeLength==10&&userPWord!=''&&userPWordLength==3" src="https://www.baidu.com?userCode"+userCode+"&userPWord"+userPWord></web-view> -->
	<view class="">
		<web-view v-if="ispay==false" :src="url" >to</web-view>
		<view v-else>支付成功</view>
	</view>																										<!-- "qr?userPWord="+that.userPWord+"&userCode="+that.userCode -->
</template>

<script>
	export default{
		data(){
			return{
					openId:"",
					userCode:"",//zhanghao
					userPWord:"",//mima
					url:'',
					ispay:false,
			}
		
		},
		onLoad(options) {
			// console.log(options);
			let that=this;
			that.openId=uni.getStorageSync("openid");
			that.userCode=options.userCode;
			that.userPWord=options.userPWord;
			uni.request({
				url:"https://www.ccweb.xyz/gas/wx/api/setTripartiteinfo",
				data:{
					tripartitePasswd:that.userPWord,
					tripartiteName:that.userCode,
					openid:that.openId, 
				},
				header: {
					    'Content-Type': 'application/x-www-form-urlencoded'
					     },
				method: 'POST',
				success:function(res){
					console.log("保存账号成功");
				}
			})
		},
		onShow:function(){
		const url=	getCurrentPages();
		let index=url.length-1;
		let opt=url[index].options;
		// console.log(url[index].route);
		// console.log(url[index].options);
		// console.log(url);
		
		this.url="https://www.baidu.com?userCode="+opt.userCode+"&userPWord="+opt.userPWord
		},
		methods:{
			
		
		}
	}
</script>

<style>
</style>
