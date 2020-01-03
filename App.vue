<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.line{
		width: 100vw !important;
		height: 1upx;
		background-color: #e5e5e5;
		margin: 0 !important;
	}
	.company>.head{
		font-size: 25upx;
		color: #155263;
		padding:10px 41.66upx;
	}
	.Line{
		width: 750upx;
		height: 3upx;
		background-color: #E5E5E5;
	}
	.hide{
		display: none;
	}
	.fontcolor{
		font-size: 25rpx;
		color: #155263;
	}
	.nav{
		margin: 10px 41.66upx !important;
		color: #155263;
	}
	
</style>
