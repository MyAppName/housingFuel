<!-- 预约维修 -->
<template>
	<view class="content">
		<view class="top">
			<text class="fontcolor">预约维修</text>
		</view>
		<view class="line"></view>
		<view class="repair">
			<text class="fontcolor">请选择上门日期</text>
			<view class="date">
				<view class="uni-list">
				    <view class="uni-list-cell">
				        <view class="uni-list-cell-db">
							<image class="times" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/date.png" mode=""></image>
				           <!-- <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				                <view class="uni-input">{{date}}</view>
				            </picker> -->
							<picker @change="monthChange" :value="monthIndex" :range="month">
							    <view class="uni-input">{{month[monthIndex]}} 月</view>
							</picker>
							<image class="down" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/down.png" mode=""></image>
						</view>
						<view class="uni-list-cell-db2">
							<picker  @change="dayChange" :value="dayIndex" :range="day">
								    <view class="uni-input" >{{day[dayIndex]}} 日</view>
								</picker>
							<image class="down" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/down.png" mode=""></image>
							
						</view>
				    </view>
				</view>
			</view>
			 <!--  -->
			 <text class="fontcolor">请选择上门时间</text>
			 <view class="time">
			 	<view class="uni-list">
			 	    <view class="uni-list-cell">
			 	        <view class="uni-list-cell-db">
							<image class="times" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/time.png" mode=""></image>
			 	            <!-- <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
			 	                <view class="uni-input">{{time}}</view>
			 	            </picker> -->
							<picker @change="timeChange" :value="timeIndex" :range="time">
							    <view class="uni-input">{{time[timeIndex]}} 时</view>
							</picker>
							<image class="down" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/down.png" mode=""></image>
			 	        </view>
						<view class="to">
							:
						</view>
						
						<view class="uni-list-cell-db2">
							<picker  @change="minuteChange" :value="minuteIndex" :range="minute">
								    <view class="uni-input" >{{minute[minuteIndex]}} 分</view>
								</picker>
							<image class="down" src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/down.png" mode=""></image>
							
						</view>
						
			 	    </view>
			 	</view>
			 </view>
			 <text class="fontcolor">请选择问题类型</text>
			 <view class="uni-list">
			             <checkbox-group @change="checkboxChange">
			                 <label class="uni-list-cell type uni-list-cell-pd" v-for="(item,index) in items" :key="index" @tap="typeClick(index)" :class="{'typeBgcolor':typeIndex==index}">
								 	<!-- <view class="checkbox">
								 	    <checkbox :value="item.name" :checked="item.checked" />
								 	</view> -->
								 	{{item.name}}			                     
			                 </label>
			             </checkbox-group>
			         </view>
			 <!--  -->
			<text class="fontcolor">请输入选择地点</text>
			<view class="ul">
				<view class="li">
					<view class="li_info">
						<view class="li_l">
							<view class="li_img">
								<image src="cloud://housingfuel-jcgsv.686f-housingfuel-jcgsv-1300436900/static/member/index/addres.png" mode=""></image>
							</view>
							<view class="li_text">
								<view class="li_l1">
									<text class="fontstyle1">{{address.name}}</text>
									<text class="fontstyle1">{{address.phone}}</text>
								</view>
								<view class="li_l2">
									<text class="fontstyle1">{{address.region}}-{{address.street}}-{{address.address}}</text>
								</view>
							</view>
						</view>
						<view class="li_r" @tap="pickOtherAddress">
							<text class="fontstyle2">选择其他地址</text>
						</view>
					</view>
				</view>
			</view>
			<!--  -->
			<button type="" class="bt" @tap="Submission">提交</button>
		</view>
	</view>
</template>

<script>
	let consturl;
	export default {
	    data() {
	        // const currentDate = this.getDate({
	        //     // format: true
	        // })
	        return {
	            index: 0,
				month:[],
				monthIndex:0,
	            day: [0],
				dayIndex:0,
	            time:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
				timeIndex:0,
				minute: [0],
				minuteIndex:0,
				address:null,
				Rminute:"",
				Rtime:"",
				Rday:"",
				Rmonth:"",
				typeIndex:null,
				date:new Date(),
				items: [{
				                        
				                        name: '室温不达标',
										checked: 'true'
				                    },
				                    {
				                        
				                        name: '散热器温度不足',
				                        
				                    },
				                    {
				                       
				                        name: '管道漏水'
				                    },
				                    {
				                        
				                        name: '暖气异响'
				                    },
				                    {
				                        
				                        name: '暖气管道阻塞'
				                    },
				                    {
				                        
				                        name: '其他'
				                    }
				                ]
	        }
	    },
	    computed: {
	        // startDate() {
	        //     return this.getDate('start');
	        // },
	        // endDate() {
	        //     return this.getDate('end');
	        // }
	    },
		onLoad(options) {
			let ts=this;
			consturl=this.$consturl;
			let month = ts.date.getMonth()+1;
			let nextmonth=month+1;
			if(nextmonth>12){nextmonth=1}
			ts.month.push(month);ts.month.push(nextmonth);
			for(let i=1;i<60;i++){ts.minute.push(i)};
			uni.showToast({
				icon:"none",
			    title: '功能待开放，以下仅为测试数据',
			    duration: 5000
			});
			},
		onShow:function(){
			this.address=uni.getStorageSync("adress");
			// day
			let that=this,i;
			that.Rmonth=that.month[0];
			console.log(that.Rmonth);// 1 3 5 7 8 10 12
			if(that.monthIndex==1){
				that.day=[];
				i=1;
			}else{
				that.day=[];
				i=that.date.getDate()+1;
			};
			
			if(that.Rmonth==4||that.Rmonth==6||that.Rmonth==9||that.Rmonth==11){
				for(i;i<=30;i++){
					
					that.day.push(i);
				}
			}else if(that.Rmonth==2){
				if(that.date.getFullYear%4){
					for(i;i<=29;i++){
						that.day.push(i);
					}
				}else{
					for(i;i<=28;i++){
						that.day.push(i);
					}
				}
			}else{
				for(i;i<=31;i++){
					that.day.push(i);
				}
			}
		},
	    methods: {
			monthChange: function(e) {
				let that=this,i;
			    that.monthIndex = e.target.value;
				that.Rmonth=that.month[e.target.value];
				console.log(that.Rmonth);// 1 3 5 7 8 10 12
				if(that.monthIndex>0){
					that.day=[];
					i=1;
				}else{
					that.day=[];
					i=that.date.getDate()+1;
				};

				if(that.Rmonth==4||that.Rmonth==6||that.Rmonth==9||that.Rmonth==11){
					for(i;i<=30;i++){
						
						that.day.push(i);
					}
				}else if(that.Rmonth==2){
					if(that.date.getFullYear%4){
						for(i;i<=29;i++){
							that.day.push(i);
						}
					}else{
						for(i;i<=28;i++){
							that.day.push(i);
						}
					}
				}else{
					for(i;i<=31;i++){
						that.day.push(i);
					}
				}
			},
			dayChange:function(e){
				this.dayIndex = e.target.value;
				this.Rday=this.day[e.target.value];
				console.log(this.Rday);
			},
			timeChange: function(e) {
			    this.timeIndex = e.target.value;
				this.Rtime=this.time[e.target.value];
				console.log(this.Rtime);
			},
			minuteChange: function(e) {
			    this.minuteIndex = e.target.value;
				this.Rminute=this.minute[e.target.value];
				console.log(this.Rminute);
			},
			typeClick:function(index){
				this.typeIndex=index;
				// console.log(this.items[index].name);
			},
			Submission:function(){
				uni.request({
					url: consturl + "wx/api/reservedRepair", //
					data: {
						type:"",
						jobtype:"",
						openid: "test"
					},
					success: function (res) {
							console.log(res);
					},
					complete:function(){
					}
				});
			},
			pickOtherAddress:function(){
				uni.navigateTo({
					url: '../address/pickOtherAddress'
				});
			},
	   //      bindPickerChange: function(e) {
	   //          console.log('picker发送选择改变，携带值为', e.target.value)
	   //          this.index = e.target.value;
				// console.log(e.target.value);
	   //      },
	        // bindDateChange: function(e) {
	        //     this.Rdata = e.target.value;
	        // },
	        // bindTimeChange: function(e) {
	        //     this.Rtime = e.target.value;
	        // },
	   //      getDate(type) {
	   //          const date = new Date();
	   //          let year = date.getFullYear();
	   //          let month = date.getMonth()+1;
	   //          let day = date.getDate();
				// console.log(date);console.log(year);console.log(month);console.log(day);
	   //          if (type === 'start') {
	   //              year = year - 60;
	   //          } else if (type === 'end') {
	   //              year = year + 2;
	   //          }
	   //          month = month > 9 ? month : '0' + month;;
	   //          day = day > 9 ? day : '0' + day;
	   //          return `${year}-${month}-${day}`;
	   //      },// getDate
			checkboxChange: function (e) {
			                var items = this.items,
			                    values = e.detail.value;
			                for (var i = 0, lenI = items.length; i < lenI; ++i) {
			                    const item = items[i]
			                    if(values.includes(item.value)){
			                        this.$set(item,'checked',true)
			                    }else{
			                        this.$set(item,'checked',false)
			                    }
			                }
							console.log(item);
			            }//
	    },
		// method end
	}
</script>

<style>
	.content>view{
		margin:20upx 41.66upx;
	}
	.repair{
		width: 666.66upx;
		
	}
	/*  */
	
	.uni-list view{
		font-size: 25upx;
	}
	.uni-list-cell{
		display: flex;
		flex-direction: row;
	}
	.uni-list-cell-db{
		width: 208.33upx;
		height: 69.44upx;
		/* margin-left: 34.72upx; */
		border: 3.5upx solid #CCCCCC;
		border-radius: 6.94upx;
		/* line-height: 69.44upx; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.to{
		height: 69.44upx;
		margin-left: 27.77upx;
		line-height: 69.44upx;
	}
    .uni-list-cell-db2{
		width: 120upx;
		height: 69.44upx;
		border: 3.5upx solid #CCCCCC;
		border-radius: 6.94upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-left: 27.77upx;
	}
	.uni-list-cell-db:hover{
		border: 3.5upx solid #FF6F3C;
	}
	.uni-list-cell-db2:hover{
		border: 3.5upx solid #FF6F3C;
	}
	.times{
		width: 34.72upx;
		height: 34.72upx;
	}
	.type{
		width: 200upx !important;
		margin: 9upx;
		border-radius: 10upx;
		font-size: 26upx;
		color: #666666;
	}
	.typeBgcolor{
		background-color: #FF6F3C;
		color: #FFFFFF;
		border: 2.43rpx solid #FF6F3C;

	}
	.down{
		width: 20.83upx;
		height: 10.41upx;
	}
	/* checkbox */
	checkbox-group{
		width: 666.66upx;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
	label{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
	}
	checkbox-group>label{
		width: 201.38upx;
		height: 69.44upx;
		border: 2.43upx solid #CCCCCC;
	}
	/*  */
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
		font-size: 25upx;
		color: #333;
		letter-spacing: 0.69upx;
		margin-left: 27.77upx;
	}
	.fontstyle2{
		font-size: 25upx;
		color: #cccccc;
		letter-spacing: 0.69upx;
	}
	
	.bt{
		width:333.33upx ;
		height: 69.44upx;
		background-color: #FF6F3C;
		border-radius: 34.72upx;
		color: #FFFFFF;
		margin-top: 263.88upx;
		font-size: 25upx;
		line-height: 69.44upx ;
	}
</style>

