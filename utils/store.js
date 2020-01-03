import Vue from 'vue'
import Vuex from 'vuex'
// import shoppingCart from './modules/shoppingCart'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules: {
  //   shoppingCart: {
  //     namespaced: true,
  //     ...shoppingCart
  //   }
  // },
  state: {
    changeModel: false,
    isModel: false,
    curCity: '定位中',
    isLogin: false,
    memberNum: '0',
    openid: '',
    hotelid:'',
    userInfo: {
    	avatarUrl: '',
    	city: '',
    	gender: '',
    	nickName: '',
    	province: ''
    },
  },
  mutations: {
    updateHotelId:(state, change) =>{
      state.hotelid = change
    },
    updateIsModel: (state, change) => {
      state.isModel = change
    },
    updateChangeModel: (state, change) => {
      state.changeModel = change
    },
    updateCity: (state, change) => {
      state.curCity = change
    },
    updateIsLogin: (state, change) => {
  		state.isLogin = change
  	},
    updateOpenid: (state, change) =>{
      state.openid = change
    },
    updateMemberNum: (state,change) =>{
      state.memberNum = change
    },
  	cleanUserInfo: (state) => {
  		state.userInfo = {
  			avatarUrl: '',
	    	city: '',
	    	gender: '',
	    	nickName: '',
	    	province: ''
  		}
  	},
    updateUser: (state, change) => {
      change.gender = change.gender === 1 ? '男' : '女'
      state.userInfo = change
    }
  }
})
export default store
