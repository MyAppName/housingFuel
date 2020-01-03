import Vue from 'vue'
import App from './App'
import store from './utils/store'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$consturl = "https://www.ccweb.xyz/gas/"
Vue.prototype.$datas = null
Vue.prototype.$openid = null
Vue.prototype.$ajax = function(uRl,pageinfo){
	uni.request({
		url: "https://www.ccweb.xyz/gas/"+uRl, //
		data: {
			type:"user"
		},
		method: 'GET',
		success: function (res) {
				console.log(res);
				console.log(pageinfo);
				Vue.prototype.$datas=res;
				// console.log(data);
		},
		complete:function(){
			// console.log("complete");
		}
	});
	// return data;
}
App.mpType = 'app'

const app = new Vue({
    ...App,
	//挂载
	    store
})
app.$mount()
