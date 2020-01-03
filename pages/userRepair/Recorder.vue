<template>
	<view class="recorder">
		<button type="primary" @tap="open">dakai</button>
		<button @tap="start" class='btn'>开始录音</button>
		<button @tap="stop" class='btn'>停止录音</button>
		<button @tap="play" class='btn'>播放录音</button>
	</view>
</template>

<script>
	const recorderManager = wx.getRecorderManager();
	const innerAudioContext = wx.createInnerAudioContext();
export default {
	
	data() {
		return {
		tempFilePath:""
		}
	},
	 methods:{
		 open:function(){
			 // uni.downloadFile({
			 //   url: 'https://www.ccweb.xyz/vdata/2019102110010642909586.jpeg',
			 //   success: function (res) {
			 //     var filePath = res.tempFilePath;
			 //     uni.openDocument({
			 //       filePath: filePath,
			 //       success: function (res) {
			 //         console.log('打开文档成功');
			 //       }
			 //     });
			 //   }
			 // });
			   // console.log('打开文档成功');
			 uni.openDocument({
			   filePath: "cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/催单指南.pdf",
			   success: function (res) {
			     console.log('打开文档成功');
			   }
			 });
		 },
		 start: function () {
		 
		     const options = {
		       duration: 10000,//指定录音的时长，单位 ms
		       sampleRate: 16000,//采样率
		       numberOfChannels: 1,//录音通道数
		       encodeBitRate: 96000,//编码码率
		       format: 'mp3',//音频格式，有效值 aac/mp3
		       frameSize: 50,//指定帧大小，单位 KB
		     }
		     //开始录音
		     recorderManager.start(options);
		     recorderManager.onStart(() => {
		       console.log('recorder start')
		     });
		     //错误回调
		     recorderManager.onError((res) => {
		       console.log(res);
		     })
		   },
		   stop: function () {
		       recorderManager.stop();
		       recorderManager.onStop((res) => {
		         this.tempFilePath = res.tempFilePath;
		         console.log('停止录音', res.tempFilePath)
		         const { tempFilePath } = res
		       })
		     },
			 play: function () {
			     innerAudioContext.autoplay = true
			     innerAudioContext.src = this.tempFilePath,
			     innerAudioContext.onPlay(() => {
			       console.log('开始播放')
			     })
			     innerAudioContext.onError((res) => {
			       console.log(res.errMsg)
			       console.log(res.errCode)
			     })
			   },
	 }
}
</script>

<style>
</style>
