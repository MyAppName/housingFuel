<template>
	<view class="partyBuild">
		<view class="partyBuild_top">
			<view class="partyBuild_nav fontcolor">党建试卷调查</view>
			<view class="Progress">
				<text style="margin-left: 41.66upx;font-size: 26upx !important;">简答题</text>
				<view class="cmd-progress">
					<cmd-progress :percent="active" :stroke-width="16"></cmd-progress>
				</view>
			</view>
		</view>
		<view class="partyBuildContent">
			<view class="question">
				<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/partyBuild/emblem of a political partyBG.png" mode=""></image>
				<view class="questionText">
					{{molecule}}.{{questionText}}
				</view>
			</view>
			<view class="selector">
				<view class="selectorItem"  @tap.stop="getTndex(1,$event)"  ref="{{choicechild}}" :class="{'selectorItemBorder':indexColor==1}">
					<!-- <view class="circle" :class="{'circleBorder':indexColor==index}">({{index+1}}). </view> -->
					<textarea type="text" value="" placeholder="请输入答案" @input="inputText" />
				</view>				
			</view>
			<view class="choice">
				<text>Num: {{molecule}}/{{Denominator}}</text>
				<text class="choicechild">{{choicechild}}</text>
				<view class="Triangular "></view>
				<text>img</text>
			</view>
		</view>
		<view class="btns">
			<button class="pre btn" @tap="pre">返回上一题</button>
			<button class="next btn"  @tap="next">保存</button>
		</view>
		
	</view>
</template>

<script>
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
export default {  
	    data() {
	    	return {
				listnum:"",//选择题总数据
	    		active: 1,//进度条
				molecule:1,//当前题数
				Denominator:0,//总题数
				choicechild:"",//最终选择内容
				indexColor:0,
				questionText:"",//当前题目
				selector:null,//当前选项
	    		list1: [{
	    			title: '已提交'
	    		}, {
	    			title: '已被接受'
	    		}]
	    	}
	    },  
	    components: {  
	        cmdProgress,  
	    },
		onLoad:function(){
			uni.request({
			    url: 'https://www.ccweb.xyz/gas/wx/api/getTopic', //
			    data: {},
			    success: (res) => {
					let item;
					this.Denominator=1;
					item=res.data.data[2];
					this.questionText=item.name;
					this.selector=item.option.split(";");
					// num=JSON.parse(item.option);
			        console.log(this.questionText);
					console.log(this.selector);
			    }
			});
			this.active=(this.molecule/this.Denominator)*100;
			
		},
		methods:{
			getTndex:function(indexx,e){
				this.indexColor=indexx;
				this.choicechild=e.currentTarget.dataset.ref;
				// return false;
			},
			// click:function(e){
			// 	console.log(e.currentTarget.dataset.ref);
			// },
			// 填空题 获取当前值
			inputText:function(e){
				this.choicechild=e.detail.value;
				// console.log(e.detail.value);
			},
			pre:function(){
				this.molecule--;
				if(this.molecule<1){
					this.molecule=1;
					uni.showModal({
					    title: '提示',
					    content: '即将返回到填空题页面，是否确认',
					    success: function (res) {
					        if (res.confirm) {
					            uni.navigateBack({
					            	delta:1,
					            })
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
				this.active=(this.molecule/this.Denominator)*100;
			},
			next:function(){
				if(this.choicechild!=""&&this.choicechild!=undefined){
				this.molecule++;
				if(this.molecule>this.Denominator){
					this.molecule=this.Denominator;
					uni.showToast({
					    title: '答题完毕，七天后查询成绩',
						icon:"none",
					    duration: 2000,
						
					});
					setTimeout(function(){ 
						uni.reLaunch({
						    url: '../company/pHome'
						}) 
						}, 2200)
				}
				this.active=(this.molecule/this.Denominator)*100;
				}else{
					uni.showToast({
					    title: '选项为空，请重新检查',
					    duration: 1000
					});
				}
			},
		}
		
	}
</script>

<style>
	.partyBuild_nav{
		margin: 20upx 41.66upx;
		font-size: 30upx !important;
		padding-top:17upx;
	}
	.Progress{
		width: 100vw;
		height: 60upx;
		display: flex;
		align-items: center;
		background-color: #F4F4F4;
		font-size: 30upx !important;
	}
	.cmd-progress{
		width: 80%;
		margin-left: 13.88upx;
	}
	.partyBuildContent{
		margin-top: 27.77upx;
	}
	.question{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 41.66upx;
	}
	.question>image{
		width: 48.61upx;
		height: 48.61upx;
	}
	.questionText{
		width: 555.55upx;
		min-height: 69.44upx;
		border: 1px solid #CCCCCC;
		border-radius: 10.41upx;
		font-size: 26upx !important;
		margin-left: 13.88upx;
	}
	.selector{
		width: 555.55upx;
		margin-left: 100upx;
		margin-top: 27.77upx;
		background-color: #F4F4F4;
		padding-bottom: 27.77upx;
		padding-top: 27.77upx;
	}
	.selectorItem{
		width:510upx;
		/* height: 69.44upx; */
		display: flex;
		flex-direction: row;
		/* justify-content: center; */
		align-items: center;
		border: 1px solid #CCCCCC;
		border-radius: 10.41upx;
		margin-left: 20.83upx;
		
	}
	/* .selectorItem:not(:first-child){
		margin-top: 27.77upx;

	} */
	.selectorItemBorder{
		border: 1px solid #FF6F3C;
	}
	.circle{
		width: 10px;
		height: 10px;
/* 		border: 1px solid #CCCCCC;
		border-radius: 100%; */
		margin-left: 17.77upx;
		line-height: 10px;
	}
	.circleBorder{
		/* width: 11px;
		height: 11px; */
		/* background-color:#FF6F3C ; */
		border: none;
	}
	.selectorItem>textarea{
		font-size: 26upx !important;
		margin-left: 23.88upx;
	}
	.btns{
		display: flex;
		flex-direction: row;
		align-items: center;
		position: absolute;
		bottom: 24.3upx;
	}
	.choice{
		float: right;
		margin-right: 41.66upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 27.77upx;
	}
	.choice>text{
		margin-right: 20.83upx;
	}
	.choicechild{
		min-width:138.88upx ;
		height: 55.55upx;
		color: #FFFFFF;
		background-color: #FF6F3C;
		line-height: 55.55upx;
		text-align: center;
		z-index: 3;
		border-radius: 6upx;
		padding: 0 5upx;
	}
	.Triangular{
		width: 38upx;
		height: 38upx;
		background-color: #FF6F3C;
		transform:translate(-41upx) rotate(45deg);
	}
	.btn{
		width: 305.55upx;
		height: 69.44upx;
		border-radius: 69.44upx;
		border: 1px solid #FF6F3C;
		margin-left: 48.61upx;
		line-height:69.44upx ;
	}
	.btn:hover{
		background-color: #FF6F3C;
		color: #FFFFFF;
	}
</style>
